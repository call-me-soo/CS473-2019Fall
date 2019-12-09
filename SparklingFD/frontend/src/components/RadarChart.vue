<script>
    import { Radar } from 'vue-chartjs';

    export default {
        extends: Radar,
        props: {
            data: {
              required: true
            },
            height: {
                default: 150
            }
        },
        name: "RadarChart",
        mounted(){
            this.renderRadarChart()
        },
        computed: {
            chartData () {
                return this.data
            }
        },
        methods: {
            renderRadarChart () {
                this.renderChart(
                    {
                        labels: ['업무강도','분위기', '급여', '배우는 것', '사내복지'],
                        datasets: [
                            {
                                backgroundColor: '#FFCF57',
                                borderColor: '#FFCF57',
                                pointRadius: 0,
                                lineTension: 0,
                                data: this.chartData
                            }
                        ]
                    },
                    {
                        legend: {
                            display: false
                    },
                        scale: {
                            ticks: {
                                beginAtZero: true,
                                    min: 0,
                                    max: 5,
                                    stepSize: 1
                            },
                        },
                        responsive: true,
                            maintainAspectRatio: false
                })
            }

        },
        watch: {
            data: function() {
                this.renderRadarChart();
            }
        }

    }
</script>

<style scoped>

</style>