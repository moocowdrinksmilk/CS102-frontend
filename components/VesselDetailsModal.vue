<template>
  <div>
    <div
      class="absolute h-full w-full opacity-25 bg-gray-200 z-40 flex justify-center -top-0"
    ></div>

    <div class="absolute h-1/2 w-screen z-50 flex justify-center">
      <div
        class="text-sm text-black bg-blue-300 mt-48 px-12 py-12 w-2/5 rounded-lg"
      >
        <bar-chart
          :data="barChartData"
          :options="barChartOptions"
          :height="200"
        />
      </div>
    </div>
  </div>
</template>

<script>
const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

export default {
  prop: {
    abbrvslm: String,
    voyageName: String,
  },
  data() {
    return {
      vessel: {},
      speed: [],
      speedTime: [],
      speedNum: [],
      barChartData: {
        labels: [],
        datasets: [
          {
            label: "Visits",
            data: [],
            backgroundColor: "#003f5c", 
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
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
    this.speed = await this.$http.$post(
      "http://localhost:8080/vessel/get-vessel-speed-history",
      {
        vsl_voy:
          this.$store.state.vessel.abbrvslm.replace(/\s/g, "") +
          this.$store.state.vessel.voyageName,
      }
    );
    for (let i = 0; i < this.speed.length; i++) {
      this.speedTime.push(this.speed[i]["Average Speed"]);
      this.speedNum.push(this.speed[i].Time);
    }
    this.barChartData.datasets[0].data = this.speedTime;
    this.barChartData.labels = this.speedNum; 
    console.log(this.barChartData.labels);
  },
};
</script>
