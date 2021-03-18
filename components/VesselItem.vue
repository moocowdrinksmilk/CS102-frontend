<template>
  <div>
    <div
      class="grid grid-cols-5 border-b-2 border-gray-400 text-sm items-center border-b-1 py-2"
    >
      <div class="my-5">
        {{ vessel_name }}
      </div>
      <div class="">
        <div v-if="status == 'BERTHING'" class="flex items-center">
          <div class="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
          <div>{{ status }}</div>
        </div>
        <div v-if="status == 'ALONGSIDE'" class="flex items-center">
          <div class="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
          <div>{{ status }}</div>
        </div>
        <div v-if="status == 'UNBERTHED'" class="flex items-center">
          <div class="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
          <div>{{ status }}</div>
        </div>
      </div>
      <div class="">
        {{ voyage_number }}
      </div>
      <div>
        {{
          berth_time.split("T")[1].split(":")[0] +
          ":" +
          berth_time.split("T")[1].split(":")[1] +
          " Hrs"
        }}
      </div>
      <div class="">
        {{ berth_number }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    vessel_name: String,
    voyage_number: String,
    berth_time: String,
    berth_number: String,
    status: String,
  },
  mounted() {
    // this.berth_time = this.berth_time.split("T")[1]
  },
};
</script>