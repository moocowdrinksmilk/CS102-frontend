<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
      <SideBar/>
      <div class="w-full bg-gray-200 ml-64 bg-white p-5">
      <div class="h-20 grid grid-cols-6 grid-flow-col items-center">
          <div class="col-span-2">
              <h1 class="text-xl font-medium">
              Subscribed Vessels
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
        
      <div class="block h-10 grid grid-cols-5 grid-flow-col gap-4 border-b-2 border-gray-500">
          <div>Vessel Name</div>
          <div></div>
          <div>Full Voyage Name</div>
          <div>Berth Number</div>
          <div>Status</div>
      </div>
      <div class="overflow-auto h-64">
      <div v-for="item in this.vessels">
          <vessel-item
        :vessel_name="item.vessel_name"
        :full_voyage_name="item.full_voyage_name"
        :berth_number="item.berth_number"
        :status="item.status"
        >
        </vessel-item>
      </div>
      </div> 
        
      </div>
    </div>
</template>

<script>
import VesselItem from '../components/VesselItem.vue'
export default {
  components: { VesselItem },
    data() {
        return {
            vessels :[
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },
                {
                    vessel_name : "BTS",
                    full_voyage_name: "Bangtan",
                    berth_number: "1FW6",
                    status:"Alongside"
                },

            ]
        }
    }
}
</script>