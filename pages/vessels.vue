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
          <div class="col-start-6 col-span-1">
              <input type="search" v-model="searchterm" v-on:input="searchVessel" class="border-2 border-gray-500" placeholder="Search">
          </div>
          <div class="col-start-6 align-center">
              
          </div>
      </div>
        
      <div class="block h-10 grid grid-cols-9 grid-flow-col gap-2 border-b-2 border-gray-500 h-20 sticky top-0 text-sm py-3 text-gray-700 bg-gray-200 items-end">
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
      class="mb-2"
      v-for="(vessel, index) in filteredVesselList" :key="index"
          :vessel_name="vessel.fullVslM"
          :abbrvslm="vessel.abbrvslm"
          :voyage_name="vessel.inVoyN"
          :speed="vessel.avgSpeed"
          :distance_to_go="vessel.distanceToGo"
          :berth_time="vessel.berthTime"
          :unberth_time="vessel.unBerthTime"
          :berth_number="vessel.berthNo"
          :status="vessel.status"
          :subscribed="vessel.subscribed"
          :isIncreasing="vessel.increasing"
      ></vessel-details-item>
        
      </div>
    </div>
</template>

<script>
import VesselDetailsItem from '../components/VesselDetailsItem.vue'
import VesselItem from '../components/VesselItem.vue'
import moment from 'moment'
export default {
  middleware: 'authenticated',
  components: { VesselItem }, 
    data() {
      return {
        vesselList: [],
        filteredVesselList: [],
        searchterm: "",
        subscribedVessel:[]
      }
    },
    methods:{
       async searchVessel(){
        console.log(this.searchterm);
        this.vesselList = await this.$http.$post('http://localhost:8080/vessel/get-vessel-by-shortAbbrVslM', {
          "abbrVslM" : this.searchterm
        })
        this.indicateSubscribed()
        // console.log(this.searchterm);
      },
      indicateSubscribed(){
        if(this.subscribedVessel.length == 0){
          for(let i = 0; i<this.vesselList.length; i++){
            this.vesselList[i].subscribed = false;
          }
          this.filteredVesselList = this.vesselList
          return
        }
        for(let i = 0; i<this.subscribedVessel.length; i++){
          for(let j = 0; j<this.vesselList.length; j++){
            if(this.subscribedVessel[i].inVoyN === this.vesselList[j].inVoyN){
              this.vesselList[j].subscribed = true
              // console.log(this.vesselList[j]);
            }else if(this.vesselList[j].subscribed != true){
              this.vesselList[j].subscribed = false
            }
          }
        }
        this.filteredVesselList = this.vesselList
      }
      
    },
    async beforeMount() {
      this.indicateSubscribed()
      this.$http.setHeader("Accept", "application/json")
      this.$http.setHeader('Content-Type', 'application/json')
      this.vesselList = await this.$http.$post('http://localhost:8080/vessel/getvesselsbydate', 
        {
          "date": moment().format().substring(0,19)
        } 
        
      )
      let username = ""
      if(process.client){ 
            username = JSON.parse(localStorage.getItem("vuex")).auth.user_name
        }
      console.log(username);
      this.subscribedVessel = await this.$http.$post('http://localhost:8080/user/get-subscribed', {
        "username" : username,
        "sort_by" : "name",
        "order" : "asc"
      })
      this.indicateSubscribed()  
      console.log(this.vesselList);
    },
    async fetch(){
      // this.$http.setHeader("Accept", "application/json")
      // this.$http.setHeader('Content-Type', 'application/json')
      // this.vesselList = await this.$http.$post('http://localhost:8080/vessel/getvesselsbydate', 
      //   {
      //     "date": moment().format().substring(0,19)
      //   } 
        
      // )
      // let username = ""; 
      // if(process.client){ 
      //       username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name
      //   }
      // // this.subscribedVessel = await this.$http.$post('http://localhost:8080/user/get-subscribed', {
      // //   "username" : username,
      // //   "sort_by" : "name",
      // //   "order" : "asc"
      // // })
      // this.indicateSubscribed()  
      // console.log(this.vesselList);
      
    }
}
</script>