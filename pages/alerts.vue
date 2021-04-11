<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <SideBar />

    <div class="w-full bg-white ml-56 px-20">
      <div class="text-5xl my-8">Alerts</div>
      <div class="grid grid-cols-7 my-6 text-center">
        <div>Vessel Name</div>
        <div>Berthing Time</div>
        <div>Berth Number</div>
        <div>Status</div>
        <div>Average Speed</div>
        <div>Distance To Go</div>
        <div>Max Speed</div>
      </div>
      <alert-item
        v-for="(item, index) in alerts"
        :key="index"
        :abbrvslm="item.abbrVslM"
        :invoyn="item.inVoyN"
      >
      </alert-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alerts: [],
    };
  },
  async beforeMount() {
    let username = "";

    if (process.client) {
      username = JSON.parse(await localStorage.getItem("vuex")).auth.user_name;
    }
    this.alerts = await this.$http.$post("http://localhost:8080/alert/get", {
      username: username,
    });
    let res = [];
    for (let i = 0; i < this.alerts.length; i++) {
      let abbr = this.alerts[i].abbrVslM;
      let invoy = this.alerts[i].inVoyN;
      let bo = true;
      for (let j = 0; j < res.length; j++) {
        if (res[j].abbrVslM == abbr && res[j].inVoyN == invoy) {
          bo = false;
          break;
        }
      }
      if (bo) {
        res.push(this.alerts[i]);
      }
    }
    this.alerts = res;
  },
};
</script>