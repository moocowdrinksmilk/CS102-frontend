<template>
  <div
    class="block grid grid-cols-9 grid-flow-col gap-2 border-b-2 border-gray-500 text-base py-4 items-center"
  >
    <div>{{ vessel_name }}</div>
    <div>{{ voyage_name }}</div>
    <div>{{ speed }}</div>
    <div>{{ distance_to_go }}</div>
    <div>
      {{
        berth_time.split("T")[1].split(":")[0] +
        ":" +
        berth_time.split("T")[1].split(":")[1] +
        " Hrs"
      }}
    </div>
    <div>{{ unberth_time }}</div>
    <div>{{ berth_number }}</div>
    <div>{{ status }}</div>
    <div>
        <button type="b button" class="bg-blue-300 p-2 rounded-lg">
            Subscribe
        </button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{

    },
  props: {
    vessel_name: String,
    voyage_name: String,
    speed: String,
    distance_to_go: String,
    berth_time: String,
    unberth_time: String,
    berth_number: String,
    status: String,
  },
};
</script>