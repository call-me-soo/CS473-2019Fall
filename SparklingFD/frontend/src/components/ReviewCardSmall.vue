<template>
    <v-card class="card korean mb-3 mr-3 ml-3">
        <v-row wrap
               class="d-inline-flex justify-center pt-5"
        >
            <v-col cols="10">
                <v-flex class="card-title pb-2">{{review.company.name}}</v-flex>
                <v-flex class="card-subtitle text--darken-1 grey--text">{{review.user.department}} {{review.user.nickname}} | {{review.semester}}</v-flex>
                <v-row class="card-content pt-5 pa-3">{{review.review.content}}</v-row>
                <v-row wrap class="d-inline-flex pt-2" align="baseline">
                    <v-rating
                            class="pa-2"
                            background-color="#DDDDDD"
                            readonly
                            v-model="review.review.aggregate"
                            color="#FFCF57"
                            medium
                            dense
                    ></v-rating>
                    <v-flex class="label pr-1">{{review.review.aggregate}}</v-flex>
                    <v-btn class="ml-10" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
                </v-row>

            </v-col>

        </v-row>
    </v-card>

</template>

<script>
    export default {
        name: "ReviewCardSmall",
        data () {
            return {
                review: {
                    id: 1,
                    company: {id: 1, name: 'SK하이닉스', src: '/'},
                    user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                    semester: '2019 여름',
                    like: 57,
                    review: {aggregate: 4.2, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만,급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 '}
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        height: 400px;
        background-color: white;
        max-width: 330px;
        border-radius: 10px !important;
        box-shadow: 0 4px 10px rgba(0,0,0, 0.08) !important;
        margin: 12px !important;
    }

    .card-title {
        font-weight: bold;
        font-size: larger;
    }

    .card-subtitle {
        font-size: small;
    }

    .card-content {
        font-size: 11.5pt;
        line-height: 18pt;
        overflow: hidden;
        display: block;
        display: -webkit-box;
        height: 235px;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
    }

    .label {
        font-size: 9pt;
        font-weight: bold;
        color: #676767
    }


</style>