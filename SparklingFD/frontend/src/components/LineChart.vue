<script>

    import { Line } from 'vue-chartjs';

    export default {
        extends: Line,
        props: {
            height: {
                default: 200
            },
            data: {
                type: Object,
                required: true
            },
            label: {
                type: Array,
                required: true
            }
        },
        name: "LineChart",
        methods: {
            renderLineChart() {
                this.renderChart(
                    {
                        labels: this.chartLabel,
                        datasets: [
                            {
                                label: '종합 점수',
                                borderWidth: 1,
                                pointRadius: 1,
                                lineTension: 0,
                                fill: false,
                                pointBorderColor: '#EB6161',
                                borderColor: '#EB6161',
                                data: this.chartData['aggregate']
                            },
                            {
                                label: '업무강도',
                                borderWidth: 1,
                                pointRadius: 1,
                                lineTension: 0,
                                fill: false,
                                pointBorderColor: '#F0BC8C',
                                borderColor: '#F0BC8C',
                                data: this.chartData['hardness']
                            },
                            {
                                label: '분위기',
                                borderWidth: 1,
                                pointRadius: 1,
                                lineTension: 0,
                                fill: false,
                                pointBorderColor: '#4CE789',
                                borderColor: '#4CE789',
                                data: this.chartData['atmosphere']
                            },
                            {
                                label: '급여',
                                borderWidth: 1,
                                pointRadius: 1,
                                lineTension: 0,
                                fill: false,
                                pointBorderColor: '#61B1EB',
                                borderColor: '#61B1EB',
                                data: this.chartData['salary']
                            },
                            {
                                label: '배우는 것',
                                borderWidth: 1,
                                pointRadius: 1,
                                lineTension: 0,
                                fill: false,
                                pointBorderColor: '#C684EF',
                                borderColor: '#C684EF',
                                data: this.chartData['learning']
                            },
                            {
                                label: '사내 복지',
                                borderWidth: 1,
                                pointRadius: 1,
                                lineTension: 0,
                                fill: false,
                                pointBorderColor: '#2717DB',
                                borderColor: '#2717DB',
                                data: this.chartData['welfare']
                            }
                        ]
                    },
                    {
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
                    })
            }
        },
        computed: {
            chartData () {
                return this.data
            },
            chartLabel () {
                return this.label
            }
        },
        mounted () {
            this.renderLineChart()
        },
        watch: {
            data: {
                deep: true,
                handler() {
                    this.renderLineChart();
                }
            }
        }

    }
</script>

<style scoped>

</style>