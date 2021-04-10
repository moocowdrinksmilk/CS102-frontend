<script>
import { Line} from 'vue-chartjs'
export default {
  extends: Line,
  // props: ['data', 'options'],
  mounted() {
    console.log("CHARTTT");
    this.renderChart(this.barChartData, this.barChartOptions)
  },
  beforeDestroy(){
    this._data._chart.destroy();
  },
  watch: {
    barChartData: function() {
      this._data._chart.destroy();
      this.renderChart(this.barChartData, this.barChartOptions);
      this.renderLineChart();
    }
  },
  data() {
    return {
      barChartData: {
        labels: this.$store.state.speed.vesselTime,
        datasets: [
          {
            label: "miles/hr",
            data: this.$store.state.speed.vesselSpeed,
            backgroundColor: "rgb(75, 192, 192)", 
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
          text: "History of Vessel Speed",
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
    }
  }
}
}

</script>