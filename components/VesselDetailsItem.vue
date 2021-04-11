<template>
  <div
    class="block grid grid-cols-9 grid-flow-col gap-2 border-b-2 border-gray-200 text-base py-4 items-center"
  >
    <div class="cursor-pointer hover:text-blue-500" @click="openDetailsModal">{{ vessel_name }}</div>
    <div class="text-gray-600">{{ voyage_name }}</div>
    <div class="text-gray-600">{{ speed == 0 ? '-' : speed }} 
      <span v-if="isIncreasing">
        <i class="arrow up"></i>
      </span> 
    </div>
    <div class="text-gray-600">{{ distance_to_go == 0 ? '-' : distance_to_go }}</div>
    <div class="text-gray-600">
      {{
        berth_time.split("T")[1].split(":")[0] +
        ":" +
        berth_time.split("T")[1].split(":")[1] +
        " Hrs"
      }}
    </div>
    <div class="text-gray-600">{{ 
        unberth_time.split("T")[0] +
        " \n" +
        unberth_time.split("T")[1].split(":")[0] +
        ':' + 
        unberth_time.split("T")[1].split(":")[1] +
        " Hrs"
        }}</div>
    <div class="text-center pr-6 text-gray-600">{{ berth_number }}</div>
    <div class="text-gray-600">{{ status }}</div>
    <div>
      <form action="">
        <button type="submit" class="bg-indigo-500 p-2 rounded-lg text-white w-24" @click="addSubscribed" v-if="subscribed == false">
            Subscribe
        </button>
        <button type="b button" class="bg-gray-500 cursor-default p-2 rounded-lg text-white w-24" v-else disabled>
            Subscribed
        </button>
        </form>
    </div>
  </div>
</template>

<style>
.arrow {
  border: solid rgb(62, 177, 110);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
  .up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
</style>

<script>
export default {
    methods:{
         async addSubscribed(){
           let username = ""
          if(process.client){ 
                username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name
            }
             await this.$http.$post("http://localhost:8080/user/add-subscribed", {
                    "username" : username,
                    "abbrVslM" : this.abbrvslm,
                    "inVoyN" : this.voyage_name
             })
        },
        openDetailsModal(){
          this.$emit("openDetailsModal", this.abbrvslm, this.voyage_name)
        }
    },
  props: {
    vessel_name: String,
    abbrvslm:String,
    voyage_name: String,
    speed: Number,
    distance_to_go: Number,
    berth_time: String,
    unberth_time: String,
    berth_number: String,
    status: String,
    subscribed: Boolean,
    isIncreasing: Boolean,
  },
};
</script>