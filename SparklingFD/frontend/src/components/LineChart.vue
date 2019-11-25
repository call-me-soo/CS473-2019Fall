<script>

    import { Line } from 'vue-chartjs';

    export default {
        extends: Line,
        props: {
            height: {
                default: 200
            },
            width : {
                default: 250
            }
        },
        name: "LineChart",
        data () {
            return {
                datacollection: {
                    //Data to be represented on x-axis
                    labels: ['이전', '2017 봄', '2017 여름', '2017 가을', '2017 겨울', '2018 봄', '2018 여름',
                        '2018 가을', '2018 겨울', '2019 봄', '2019 여름', '2019 가을'],
                    datasets: [
                        {
                            label: 'Data One',
                            borderWidth: 3,
                            pointRadius: 2,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#ff0000',
                            borderColor: '#ff0000',
                            //Data to be represented on y-axis
                            data: [1,2,4,5,3,2,4,5,3.5,4,5,2]
                        }
                    ]
                },
                //Chart.js options that controls the appearance of the chart
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                                stepSize: 1,
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [ {
                            gridLines: {
                                display: true
                            }
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
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>

<style scoped>

</style>