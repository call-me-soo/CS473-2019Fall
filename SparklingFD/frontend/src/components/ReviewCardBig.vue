<template>
    <v-flex>
        <div class="d-none d-md-inline">
            <v-card class="card korean ma-4">
                <v-row class="pl-10 pa-5" wrap>
                    <v-col class="korean" cols="8">
                        <v-row wrap
                               align="baseline"
                               class="d-inline-flex pb-4">
                            <v-flex class="card-title-large pr-2">{{review.company.name}}</v-flex>
                            <v-flex class="card-subtitle pr-1 text--darken-1 grey--text">{{review.user.department}} {{review.user.nickname}} | {{review.semester}}</v-flex>
                            <v-btn class="ml-2" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
                        </v-row>
                        <v-row wrap>
                            <v-flex class="card-content-large">
                                {{review.review.content}}
                            </v-flex>
                        </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-row wrap class="pl-3" justify="center">
                            <radarChart></radarChart>
                        </v-row>
                        <v-row wrap class="pt-2" justify="center" align="baseline">
                            <v-col class="text-center">
                                <v-rating
                                        class="d-inline pa-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="review.review.aggregate"
                                        color="#FFCF57"
                                        medium
                                        dense
                                ></v-rating>
                                <span class="label d-inline">{{review.review.aggregate}}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

            </v-card>
        </div>
    </v-flex>

</template>

<script>

    import radarChart from '../components/RadarChart';

    export default {
        name: "ReviewCardBig",
        components: { radarChart },
        data () {
            return {
                review: {
                    id: 1,
                    company: {id: 1, name: 'SK하이닉스', src: '/'},
                    user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                    semester: '2019 여름',
                    like: 57,
                    review: {
                        aggregate: 4.5,
                        star: [3, 5, 4, 5, 3],
                        content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만,급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 '
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        height: 260px;
        background-color: white;
    }

    .card-title-large {
        font-weight: bold;
        font-size: larger;
    }

    .card-title-small {
        font-weight: bold;
    }

    .card-subtitle {
        font-size: small;
    }

    .card-content-large {
        font-size: 11.5pt;
        line-height: 18pt;
        overflow: hidden;
        display: block;
        display: -webkit-box;
        height: 145px;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }

    .card-content-small {
        font-size: 9pt;
        line-height: 15pt;
        overflow: hidden;
        display: block;
        display: -webkit-box;
        height: 160px;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
    }

    .label {
        font-size: 9pt;
        font-weight: bold;
        color: #676767
    }

</style>