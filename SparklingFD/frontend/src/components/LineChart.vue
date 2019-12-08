<script>

    import { Line } from 'vue-chartjs';

    export default {
        extends: Line,
        props: {
            height: {
                default: 200
            },
            labels: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                required: true
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
                            label: '종합 점수',
                            borderWidth: 1,
                            pointRadius: 1,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#EB6161',
                            borderColor: '#EB6161',
                            //Data to be represented on y-axis
                            data: [4,5,2,1,2,4,5,3,2,4,5,3.5]
                        },
                        {
                            label: '업무강도',
                            borderWidth: 1,
                            pointRadius: 1,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#F0BC8C',
                            borderColor: '#F0BC8C',
                            //Data to be represented on y-axis
                            data: [4,5,3.5,1,2,4,5,3,2,4,5,2,]
                        },
                        {
                            label: '분위기',
                            borderWidth: 1,
                            pointRadius: 1,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#4CE789',
                            borderColor: '#4CE789',
                            //Data to be represented on y-axis
                            data: [1,2,4,5,4,5,2,3.5,3,2,4,5]
                        },
                        {
                            label: '급여',
                            borderWidth: 1,
                            pointRadius: 1,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#61B1EB',
                            borderColor: '#61B1EB',
                            //Data to be represented on y-axis
                            data: [2,4,5,3,2,4,5,2,1,4,5,3.5]
                        },
                        {
                            label: '배우는 것',
                            borderWidth: 1,
                            pointRadius: 1,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#C684EF',
                            borderColor: '#C684EF',
                            //Data to be represented on y-axis
                            data: [4,4,5,2,2,2,4,5,1,5,3,3.5]
                        },
                        {
                            label: '사내 복지',
                            borderWidth: 1,
                            pointRadius: 1,
                            lineTension: 0,
                            fill: false,
                            pointBorderColor: '#2717DB',
                            borderColor: '#2717DB',
                            //Data to be represented on y-axis
                            data: [4,4,5,2,2,4,5,3,2,1,5,3.5]
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
                            },
                            ticks: {
                                fontSize: 9
                            }

                        }]
                    },
                    legend: {
                        display: true,
                        labels: {
                            boxWidth: 20
                        }

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