<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <SideBar class=""/>
    <VesselDetailsModal v-if="vesselDetailsModal" @closeModal="closeModal"/>
    <div class="w-full bg-gray-200 ml-56 ">
      <div class="px-20">
        <h1 class="text-5xl my-8">
          Dashboard
        </h1>
        <h1 class="text-3xl my-8">
            Your Watchlist
          </h1>
        <div class="flex">
          <div class="flex w-full h-56 overflow-x-auto max-w-screen-lg min-w-screen-lg">
            <subscribed-item
            @openDetailsModal="openDetailsModal"
            v-for="(item, index) in subscribedVessel" :key="index"
            :vessel_name='item.fullVslM'
            :berth_date='item.bthgDt'
            :voyage_number='item.inVoyN'
            :status='item.status'
            :berth_no='item.berthNo'
            :abbrvslm='item.abbrVslM'
            >
            </subscribed-item>
          </div>
          </div>
        <div>
          <div class="flex justify-between mt-12 items-center">
            <div class="text-xl font-bold">
              Incoming Vessels
            </div>
            <div class="dropdown inline-block relative">
              <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">Status: {{status.charAt(0) + status.toLowerCase().substring(1)}}</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 right-0 z-10">
                <li class="cursor-pointer"><a class="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="filterStatus('All')">All</a></li>
                <li class="cursor-pointer"><a class="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="filterStatus('BERTHING')">Berthing</a></li>
                <li class="cursor-pointer"><a class="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="filterStatus('ALONGSIDE')">Alongside</a></li>
                <li class="cursor-pointer"><a class="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="filterStatus('UNBERTHED')">Unberthed</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-5 text-sm top-0 sticky items-center mt-8 border-b-2 py-4 text-gray-600 bg-gray-200">
          <div>
            Vessel Name
          </div>
          <div class="">
            Status
          </div>
          <div>
            Voyage Number 
          </div>
          <div>
            Berth Time
          </div>
          <div>
            Berth Number
          </div>
        </div>
        <div
        v-for="(vessel, index) in filteredVesselList" :key="index"
        >
          <vessel-item
          :vessel_name="vessel.fullVslM"
          :voyage_number="vessel.inVoyN"
          :berth_time="vessel.berthTime"
          :berth_number="vessel.berthNo"
          :status="vessel.status"
          >
          </vessel-item>
        </div>
      </div>
    </div>
</div>
</template>
<style>
     

  .h-90{
    height: 22rem;
  }
  .dropdown:hover .dropdown-menu {
  display: block;
}
</style>
<script>
import VesselItem from '../components/VesselItem.vue'
import moment from 'moment'
export default {
  middleware: 'authenticated',
  components: { VesselItem },
    data() {
      return {
        vesselList: [],
        filteredVesselList: [],
        subscribedVessel: [],
        berthing: 0,
        alongSide: 0,
        unBerthed: 0,
        status: "All",
        vesselDetailsModal:false,
        speed:[],

      }
    },
    methods:{
      filterStatus(newStatus){
        this.status = newStatus
        if(this.status == "All"){
          this.filteredVesselList = this.vesselList
          return
        }
        this.filteredVesselList = []
        for(let i = 0; i<this.vesselList.length; i++){
          if(this.vesselList[i].status == newStatus){
            this.filteredVesselList.push(this.vesselList[i])
          }
        }
      },
      async openDetailsModal(abbrvslm, voyageName){
      this.$store.dispatch("vessel/GET_VESSEL", {
        "abbrvslm" : abbrvslm,
        "voyageName" : voyageName
      })
      this.speed = await this.$http.$post(
      "http://localhost:8080/vessel/get-vessel-speed-history",
      {
        vsl_voy:
          abbrvslm.replace(/\s/g, "") + voyageName,
      }
    );
    let speedNum = []
    let speedTime = []
    for (let i = 0; i < this.speed.length; i++) {
      speedNum.push(this.speed[i]["Average Speed"]);
      speedTime.push(this.speed[i].Time.split(" ")[0]);
    }
    this.$store.dispatch("speed/GET_SPEED", {
      vesselSpeed: speedNum,
      vesselTime: speedTime,
    });
      console.log(this.$store.state.vessel);
    this.vesselDetailsModal = true
    },
    closeModal(){
      this.vesselDetailsModal = false
    }, 
    },
    async beforeMount(){
      this.$http.setHeader("Accept", "application/json")
      this.$http.setHeader('Content-Type', 'application/json')
      this.filteredVesselList = await this.$http.$post('http://localhost:8080/vessel/getvesselsbydate', 
        {
          "date": moment().format().substring(0,19)
        } 
      )
      // this.filteredVesselList = this.vesselList
      let username = ""
      if(process.client){ 
            username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name
        }
      this.subscribedVessel = await this.$http.$post('http://localhost:8080/user/get-subscribed', {
        "username" : username,
        "sort_by" : "name",
        "order" : "asc"
      })
      console.log(this.subscribedVessel);
    },
    async fetch() {
      this.$http.setHeader("Accept", "application/json")
      this.$http.setHeader('Content-Type', 'application/json')
      this.vesselList = await this.$http.$post('http://localhost:8080/vessel/getvesselsbydate', 
        {
          "date": moment().format().substring(0,19)
        } 
      )
      this.filteredVesselList = this.vesselList
      console.log(this.filteredVesselList);
      // console.log(moment().format());
      // console.log(this.vesselList.length);
      for(let i = 0; i<this.vesselList.length; i++){
        // console.log(this.vesselList[i]);
        if(this.vesselList[i].status == "BERTHING"){
          this.berthing++;
        }
        if(this.vesselList[i].status == "ALONGSIDE"){
          this.alongSide++;
        }
        if(this.vesselList[i].status == "UNBERTHED"){
          this.unBerthed++;
        }
      }

      // this.subscribedVessel = await this.$http.$post('http://localhost:8080/user/get-subscribed', {
      //   "username" : "Rui Xian",
      //   "sort_by" : "name",
      //   "order" : "asc"
      // })
      // console.log(this.subscribedVessel);
    }
}
</script>