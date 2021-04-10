<script>
import { Line} from 'vue-chartjs'
export default {
  extends: Line,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
  watch:{
    data: function (newData, oldData) {
      console.log('new data from watcher', newData)
      this.data.datasets[0].data = newData
      this.renderChart(this.data, this.options)
    }
  }
}

</script>