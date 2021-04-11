<template>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <SideBar class=""/>
    <VesselDetailsModal v-if="vesselDetailsModal" @closeModal="closeModal" class="absolute"/>
    <div class="w-full bg-white ml-56 ">
      <div class="px-20">
        <div class="flex justify-between items-center">
          <h1 class="text-5xl my-8">
          Overview
        </h1>
        <div class="flex">
          <div class="cursor-pointer">
            <a href="/settings">
            <svg height="20pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m471.386719 325.011719c-16.96875-14.910157-37.546875-27.792969-61.167969-38.289063-10.097656-4.484375-21.914062.0625-26.398438 10.15625-4.484374 10.09375.0625 21.910156 10.15625 26.398438 19.917969 8.851562 37.082032 19.542968 51.007813 31.78125 17.167969 15.085937 27.015625 36.929687 27.015625 59.941406v37c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-37c0-23.011719 9.847656-44.855469 27.015625-59.941406 20.207031-17.757813 79.082031-59.058594 188.984375-59.058594 81.605469 0 148-66.394531 148-148s-66.394531-148-148-148-148 66.394531-148 148c0 47.707031 22.695312 90.207031 57.851562 117.289062-64.328124 14.140626-104.34375 41.359376-125.238281 59.722657-25.808593 22.675781-40.613281 55.472656-40.613281 89.988281v37c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60v-37c0-34.515625-14.804688-67.3125-40.613281-89.988281zm-323.386719-177.011719c0-59.550781 48.449219-108 108-108s108 48.449219 108 108-48.449219 108-108 108-108-48.449219-108-108zm0 0"/></svg>
            </a>
          </div>

          <div class="cursor-pointer dropdown">
            <a href="/alerts">
            <svg height="20pt" viewBox="-21 0 512 512" width="50pt" xmlns="http://www.w3.org/2000/svg"><path d="m453.332031 229.332031c-8.832031 0-16-7.167969-16-16 0-61.269531-23.847656-118.847656-67.15625-162.175781-6.25-6.25-6.25-16.382812 0-22.632812s16.382813-6.25 22.636719 0c49.34375 49.363281 76.519531 115.007812 76.519531 184.808593 0 8.832031-7.167969 16-16 16zm0 0"/><path d="m16 229.332031c-8.832031 0-16-7.167969-16-16 0-69.800781 27.179688-135.445312 76.542969-184.789062 6.25-6.25 16.386719-6.25 22.636719 0s6.25 16.386719 0 22.636719c-43.328126 43.304687-67.179688 100.882812-67.179688 162.152343 0 8.832031-7.167969 16-16 16zm0 0"/><path d="m234.667969 512c-44.117188 0-80-35.882812-80-80 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 26.476562 21.523437 48 48 48 26.472656 0 48-21.523438 48-48 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 44.117188-35.882813 80-80 80zm0 0"/><path d="m410.667969 448h-352c-20.589844 0-37.335938-16.746094-37.335938-37.332031 0-10.925781 4.757813-21.269531 13.058594-28.375 32.445313-27.414063 50.941406-67.261719 50.941406-109.480469v-59.480469c0-82.34375 66.988281-149.332031 149.335938-149.332031 82.34375 0 149.332031 66.988281 149.332031 149.332031v59.480469c0 42.21875 18.496094 82.066406 50.730469 109.332031 8.511719 7.253907 13.269531 17.597657 13.269531 28.523438 0 20.585937-16.746094 37.332031-37.332031 37.332031zm-176-352c-64.707031 0-117.335938 52.628906-117.335938 117.332031v59.480469c0 51.644531-22.632812 100.414062-62.078125 133.757812-.746094.640626-1.921875 1.964844-1.921875 4.097657 0 2.898437 2.433594 5.332031 5.335938 5.332031h352c2.898437 0 5.332031-2.433594 5.332031-5.332031 0-2.132813-1.171875-3.457031-1.878906-4.054688-39.488282-33.386719-62.121094-82.15625-62.121094-133.800781v-59.480469c0-64.703125-52.628906-117.332031-117.332031-117.332031zm0 0"/><path d="m234.667969 96c-8.832031 0-16-7.167969-16-16v-64c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v64c0 8.832031-7.167969 16-16 16zm0 0"/></svg>
            </a>
            <!-- <ul class="shadow-md dropdown-menu absolute right-0 mr-24 hidden text-gray-700 pt-1 left-0.1 z-10 w-52">
                <li class="cursor-pointer" v-for="(item, index) in alerts" :key="index">
                  <a class="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    <div class="text-sm py-2">
                      Change in {{item.abbrVslM}}
                    </div>
                  </a>
                </li>
              </ul> -->
          </div>
        </div>
        </div>
        
        <h1 class="text-3xl my-8">
            Your Watchlist
          </h1>
        <!-- <div class="flex z-0"> -->
          <div class="flex w-full overflow-x-auto max-w-screen-lg min-w-screen-lg">
            <subscribed-item
            @openDetailsModal="openDetailsModal"
            v-for="(item, index) in subscribedVessel" :key="index"
            :vessel_name='item.fullVslM'
            :berth_date='item.berthTime'
            :voyage_number='item.inVoyN'
            :status='item.status'
            :berth_no='item.berthNo'
            :abbrvslm='item.abbrvslm'
            >
            </subscribed-item>
          </div>
          <!-- </div> -->
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
     
  .h-nice{
    height: 16rem;
  }
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
        alerts:[],
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
      this.alerts = await this.$http.$post("http://localhost:8080/alert/get",{
        "username":username
      })
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