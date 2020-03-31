<script>
    //Importing Bar and mixins class from the vue-chartjs wrapper
    import { Bar, mixins } from 'vue-chartjs'
    //Getting the reactiveProp mixin from the mixins module.
    const { reactiveProp } = mixins

    export default({
        extends: Bar,
        mixins: [ reactiveProp ],
        data () {
            return {
                //Chart.js options that control the appearance of the chart
                options: {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted () {
            // this.chartData is created in the mixin.
            // If you want to pass options please create a local options object
            // this.chartData is created in the mixin and contains all the data needed to build the chart.
            this.renderChart(this.chartData, this.options)
        }
    })
</script>