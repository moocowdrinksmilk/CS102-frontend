<template>
  <div class="fixed z-50">
    <div
      class="absolute h-screen w-screen opacity-25 bg-gray-500 flex justify-center"
    ></div>

    <div class="absolute h-1/2 w-screen z-50 flex justify-center">
      <div
        class="absolute bg-white mt-32 p-4 w-2/5 rounded-lg z-50"
      >
        <div class="flex justify-end">
          <div
            @click="closeModal"
            class="cursor-pointer font-normal text-gray-700 rounded-full text-3xl text-center flex items-center justify-center h-8 w-8"
          >
            &#10006;
          </div>
        </div>

        <div class="grid grid-cols-2 text-left text-xl">
          <div>
            <div class="text-sm text-gray-700">Vessel Name: </div>
            {{ this.vessel.fullVslM }}
          </div>
          <div>
            <div class="text-sm text-gray-700">Voyage Name: </div>
            {{ this.vessel.inVoyN }}
          </div>
          <div>
            <div class="text-sm text-gray-700">Outward Voyage Name: </div>
            {{ this.vessel.outVoyN}}
          </div>
          <div>
            <div class="text-sm text-gray-700">Berthing DateTime: </div>
            {{ this.vessel.berthTime}}
          </div>
          <div>
            <div class="text-sm text-gray-700">UnBerthing DateTime: </div>
            {{ this.vessel.unBerthTime}}
          </div>
          <div>
            <div class="text-sm text-gray-700">Berth no. </div>
            {{ this.vessel.berthNo}}
          </div>
          <div>
            <div class="text-sm text-gray-700">Status: </div>
            {{ this.vessel.status}}
          </div>
          <div>
            <div class="text-sm text-gray-700">Average Speed: </div>
            {{ this.vessel.avgSpeed }}
            </div>
          <div>
            <div class="text-sm text-gray-700">Max Speed: </div>
            {{ this.vessel.maxSpeed }}
            </div>
          <div></div>
        </div>

        <bar-chart class="m-4" :height="200" />

        <div>
          <form action="">
            <button
              type="submit"
              class="bg-blue-300 p-2 rounded-lg"
              @click="addSubscribed"
              v-if="!isSubscribed"
            >
              Subscribe
            </button>
            <button
              type="b button"
              class="bg-gray-500 cursor-pointer p-2 rounded-lg"
              v-else
              @click="unSubscribe"
            >
              Subscribed
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.h-nice {
  height: 35rem;
}
</style>

<script>
export default {
  prop: {
    abbrvslm: String,
    voyageName: String,
  },
  methods: {
    async unSubscribe(){
      let username = "";
      if (process.client) {
        username = JSON.parse(localStorage.getItem("vuex")).auth
          .user_name;
      }
      await this.$http.$post("http://localhost:8080/user/del-subscribed", {
        username: username,
        abbrVslM: this.$store.state.vessel.abbrvslm,
        inVoyN: this.$store.state.vessel.voyageName,
      });
    },
    closeModal() {
      this.$emit("closeModal");
    },
    async addSubscribed() {
      let username = "";
      if (process.client) {
        username = JSON.parse(await localStorage.getItem("vuex")).auth
          .user_name;
      }
      await this.$http.$post("http://localhost:8080/user/add-subscribed", {
        username: username,
        abbrVslM: this.$store.state.vessel.abbrvslm,
        inVoyN: this.$store.state.vessel.voyageName,
      });
    },
  },
  data() {
    return {
      vessel: {},
      speed: [],
      speedTime: [],
      speedNum: [],
      subscribedVessel: [],
      isSubscribed: false,
      newBerthTime : "",
      newUnBerthTime : ""
    };
  },
  async beforeMount() {
    this.vessel = await this.$http.$post(
      "http://localhost:8080/vessel/getvessel",
      {
        abbrVslM: this.$store.state.vessel.abbrvslm,
        inVoyN: this.$store.state.vessel.voyageName,
      }
    );
    // this.speed = await this.$http.$post(
    //   "http://localhost:8080/vessel/get-vessel-speed-history",
    //   {
    //     vsl_voy:
    //       this.$store.state.vessel.abbrvslm.replace(/\s/g, "") +
    //       this.$store.state.vessel.voyageName,
    //   }
    // );
    // for (let i = 0; i < this.speed.length; i++) {
    //   this.speedNum.push(this.speed[i]["Average Speed"]);
    //   this.speedTime.push(this.speed[i].Time.split(" ")[0]);
    // }
    // this.$store.dispatch("speed/GET_SPEED", {
    //   vesselSpeed: this.speedNum,
    //   vesselTime: this.speedTime,
    // });

    let username = "";
    if (process.client) {
      username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name;
    }
    this.subscribedVessel = await this.$http.$post(
      "http://localhost:8080/user/get-subscribed",
      {
        username: username,
        sort_by: "name",
        order: "asc",
      }
    );
    
    
    for(let i = 0; i<this.subscribedVessel.length; i++){
      if(this.$store.state.vessel.voyageName === this.subscribedVessel[i].inVoyN){
        console.log('HEIJE');
        this.isSubscribed = true
      }
    }
  },
};
</script>
