<script>
    import { Radar } from 'vue-chartjs';

    export default {
        extends: Radar,
        props: {
            height: {
                default: 150
            },
            width : {
                default: 250
            }
        },
        name: "RadarChart",
        data (){
            return {
                labels: ['업무강도','분위기', '급여', '배우는 것', '사내복지'],
                datasets: [{
                    backgroundColor: '#FFCF57',
                    borderColor: '#FFCF57',
                    pointRadius: 0,
                    lineTension: 0,
                    data: [4, 5, 3, 3, 4]
                }],
                options: {
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

                }
            }
        },
        mounted(){
            this.renderChart({labels: this.labels, datasets: this.datasets}, this.options)},
    }
</script>

<style scoped>

</style>