<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-200">
    <VesselDetailsModal @closeModal="closeModal" v-if="vesselDetailsModal" />
    <SideBar />
    <div class="w-full bg-white ml-56 bg-white p-5">
      <div class="h-20 grid grid-cols-6 grid-flow-col items-center">
        <div class="col-span-2">
          <h1 class="text-xl font-medium">Vessel View</h1>
        </div>

        <!-- Dropdown date -->
        <div class="col-start-5 col-span-1">
          <div class="dropdown inline-block relative">
            <button
              class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span class="">Date: {{ date }}</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </button>
            <ul
              class="dropdown-menu absolute hidden text-gray-700 pt-1 right-0 z-20"
            >
              <li class="cursor-pointer">
                <a
                  class="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(0)"
                  >{{ displayDate(0) }}</a
                >
              </li>
              <li class="cursor-pointer">
                <a
                  class="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(1)"
                  >{{ displayDate(1) }}</a
                >
              </li>
              <li class="cursor-pointer">
                <a
                  class="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(2)"
                  >{{ displayDate(2) }}</a
                >
              </li>
              <li class="cursor-pointer">
                <a
                  class="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(3)"
                  >{{ displayDate(3) }}</a
                >
              </li>
              <li class="cursor-pointer">
                <a
                  class="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(4)"
                  >{{ displayDate(4) }}</a
                >
              </li>
              <li class="cursor-pointer">
                <a
                  class="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(5)"
                  >{{ displayDate(5) }}</a
                >
              </li>
              <li class="cursor-pointer">
                <a
                  class="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  @click="filterByDate(6)"
                  >{{ displayDate(6) }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-start-6 col-span-1">
          <input
            type="search"
            v-model="searchterm"
            v-on:input="searchVessel"
            class="border-2 border-gray-500"
            placeholder="Search"
          />
        </div>
        <div class="col-start-6 align-center"></div>
      </div>

      <div
        class="block h-10 grid grid-cols-9 grid-flow-col gap-2 border-b-2 border-gray-500 h-20 sticky top-0 text-sm py-3 text-gray-700 bg-white items-end z-30"
      >
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
        @openDetailsModal="openDetailsModal"
        class="mb-2"
        v-for="(vessel, index) in filteredVesselList"
        :key="index"
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

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

<script>

import VesselDetailsItem from "../components/VesselDetailsItem.vue";
import VesselItem from "../components/VesselItem.vue";
import moment from "moment";
export default {
  middleware: "authenticated",
  components: { VesselItem },
  data() {
    return {
      vesselList: [],
      filteredVesselList: [],
      searchterm: "",
      subscribedVessel: [],
      date: moment().add(0, "days").format().substring(0, 10),
      days: 0,
      vesselDetailsModal:false,
      modalAbbrvslm:"",
      modalVoyageName:"",
      speed : [],
    };
  },
  methods: {
    closeModal(){
      this.vesselDetailsModal = false
    },  
    // Filter the vessels by date by calling an api
    async filterByDate(num) {
      this.date = moment().add(num, "days").format().substring(0, 10);
      this.$http.setHeader("Accept", "application/json");
      this.$http.setHeader("Content-Type", "application/json");
      this.vesselList = await this.$http.$post(
        "http://localhost:8080/vessel/getvesselsbydate",
        {
          date: moment().add(num, "days").format().substring(0, 19),
        }
      );
      let username = "";
      if (process.client) {
        username = JSON.parse(localStorage.getItem("vuex")).auth.user_name;
      }
      // console.log(username);
      this.subscribedVessel = await this.$http.$post(
        "http://localhost:8080/user/get-subscribed",
        {
          username: username,
          sort_by: "name",
          order: "asc",
        }
      );
      this.indicateSubscribed();
    },

    // Display date on the dropdown menu
    displayDate(num) {
      return moment().add(num, "days").format().substring(0, 10);
    },

    // Search for vessels using an api
    async searchVessel() {
      console.log(this.searchterm);
      this.vesselList = await this.$http.$post(
        "http://localhost:8080/vessel/get-vessel-by-shortAbbrVslM",
        {
          abbrVslM: this.searchterm,
          date:this.date
        }
      );
      this.indicateSubscribed();
      // console.log(this.searchterm);
    },

    // Indicating ships that are subscribed
    indicateSubscribed() {
      if (this.subscribedVessel.length == 0) {
        for (let i = 0; i < this.vesselList.length; i++) {
          this.vesselList[i].subscribed = false;
        }
        this.filteredVesselList = this.vesselList;
        return;
      }
      for (let i = 0; i < this.subscribedVessel.length; i++) {
        for (let j = 0; j < this.vesselList.length; j++) {
          if (this.subscribedVessel[i].inVoyN === this.vesselList[j].inVoyN) {
            this.vesselList[j].subscribed = true;
            // console.log(this.vesselList[j]);
          } else if (this.vesselList[j].subscribed != true) {
            this.vesselList[j].subscribed = false;
          }
        }
      }
      this.filteredVesselList = this.vesselList;
    },

    // Opening Modal
    async openDetailsModal(abbrvslm, voyageName){
      console.log("Hello");
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

    this.vesselDetailsModal = true
    }
  },
  async beforeMount() {
    // this.indicateSubscribed()
    this.$http.setHeader("Accept", "application/json");
    this.$http.setHeader("Content-Type", "application/json");
    this.vesselList = await this.$http.$post(
      "http://localhost:8080/vessel/getvesselsbydate",
      {
        date: moment().format().substring(0, 19),
      }
    );
    let username = "";
    if (process.client) {
      username = JSON.parse(localStorage.getItem("vuex")).auth.user_name;
    }
    this.subscribedVessel = await this.$http.$post(
      "http://localhost:8080/user/get-subscribed",
      {
        username: username,
        sort_by: "name",
        order: "asc",
      }
    );
    this.indicateSubscribed();
  },
};
</script>