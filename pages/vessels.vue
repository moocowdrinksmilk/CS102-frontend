<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
      <SideBar/>
      <div class="w-full bg-gray-200 ml-56 bg-white p-5">
      <div class="h-20 grid grid-cols-6 grid-flow-col items-center">
          <div class="col-span-2">
              <h1 class="text-xl font-medium">
              Vessel view
                </h1>
          </div>
          <div class="col-start-4 col-span-1">
              <input type="search" name="" id="" class="border-2 border-gray-500">
          </div>
          <div class="col-start-6 align-center">
              <button type="button" class="bg-blue-700 px-3 py-3 rounded-2xl font-semibold text-white">
                  + Add Vessel
              </button>
          </div>
      </div>
        
      <div class="block h-10 grid grid-cols-9 grid-flow-col gap-2 border-b-2 border-gray-500 text-base">
          <div>Vessel Name</div>
          <div>Voyage Name</div>
          <div>Speed</div>
          <div>Distance to go</div>
          <div>Berthing Time</div>
          <div>Departure Time</div>
          <div>Berth Number</div>
          <div>Status</div>
      </div>
      <vessel-details-item
      class="my-2"
      v-for="(vessel, index) in vesselList" :key="index"
            :vessel_name="vessel.abbrVslm"
          :voyage_number="vessel.inVoyN"
          :berth_time="vessel.berthTime"
          :berth_number="vessel.berthNo"
          :status="vessel.status"
      ></vessel-details-item>
        
      </div>
    </div>
</template>

<script>
import VesselDetailsItem from '../components/VesselDetailsItem.vue'
import VesselItem from '../components/VesselItem.vue'
import moment from 'moment'
export default {
  components: { VesselItem }, 
    data() {
      return {
        vesselList: [],
        filteredVesselList: [],
      }
    },
    async fetch(){
        this.$http.setHeader("Accept", "application/json")
      this.$http.setHeader('Content-Type', 'application/json')
      this.vesselList = await this.$http.$post('http://localhost:8080/vessel/getvesselsbydate', 
        {
          "date": moment().format().substring(0,19)
        } 
        
      )
      console.log(vesselList);
    }
}
</script>