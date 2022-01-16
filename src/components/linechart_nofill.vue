<script>
import {Line } from "vue-chartjs";

var dates = [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11];

export default {
  data() {
    return {
      dates: dates,
    //   newdata: this.newdata
    };
  },

  props: {
      newdata: {
          type: Array,    
      },
      labels: {
          type: Array,    
      }
  },

  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Data One",

               fill: false,
   borderColor: "green",
   borderDash: [0, 0],
   backgroundColor: "green",
   pointBackgroundColor: "green",
   pointBorderColor: "green",
   pointHoverBackgroundColor: "lightgreen",
   pointHoverBorderColor: "#55bae7",
   data: this.newdata
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
