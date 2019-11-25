<template>
    <v-app>
        <v-content>
            <Toolbar></Toolbar>
            <v-container>
                <v-row wrap class="pt-5" justify="center" align="center">
                    <v-col class="korean d-none d-md-flex" cols="9">
                        <v-row
                                wrap
                                class="d-inline-flex"
                                align="baseline">
                            <div>
                                <v-avatar class="pr-5 pb-2" size="40">
                                    <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                    >
                                </v-avatar>
                            </div>
                            <div class="sub-title-large pr-5">{{company.name}}</div>
                            <div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{company.field.toString()}} | {{company.location}}</div>
                            <div class="sub-title-2-large pr-2">기업리뷰</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{company.reviews.length}}</div>
                            <div class="sub-title-2-large pr-2">추천학과</div><div class="sub-title-2-large pr-1 text--darken-1 grey--text">{{company.recommend.toString()}}</div>
                            <v-spacer></v-spacer>
                            <v-btn rounded>
                                리뷰 작성
                            </v-btn>
                        </v-row>
                    </v-col>
                    <v-col class="korean d-md-none" cols="10">
                        <v-row
                                wrap
                                class="d-inline-flex"
                                align="baseline">
                            <div>
                                <v-avatar class="pr-5 pb-2" size="30">
                                    <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                    >
                                </v-avatar>
                            </div>
                            <div class="sub-title-small pr-3">{{company.name}}</div>
                        </v-row>
                        <v-row class="sub-title-2-small">
                            <div class="pr-5 text--darken-1 grey--text">{{company.field.toString()}} | {{company.location}}</div>
                            <div class="pr-2">기업리뷰</div><div class="pr-5 text--darken-1 grey--text">{{company.reviews.length}}</div>
                            <div class="pr-2">추천학과</div><div class="pr-1 text--darken-1 grey--text">{{company.recommend.toString()}}</div>
                        </v-row>

                    </v-col>
                </v-row>

                <v-row wrap class="pa-3" justify="center">
                    <v-col cols="9">
                        <vue-slider
                                ref="slider"
                                v-model="value"
                                :adsorb="true"
                                :interval="1"
                                :data="range"
                                :marks="true"
                                :process-dragable="true"
                                :height="5"
                        >
                        </vue-slider>
                    </v-col>
                </v-row>

                <v-row wrap class="pt-3" justify="center" align="center">
                    <v-col cols="6">
                        <LineChart></LineChart>
                    </v-col>
                    <v-col cols="3">
                        <RadarChart></RadarChart>
                    </v-col>
                </v-row>

                <v-row wrap class="pt-5" justify="center" align="center" >
                    <v-col cols="9">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">리뷰</div>
                            <div class="korean sub-title-small d-md-none">리뷰</div>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-btn-toggle
                                    dense
                                    rounded
                                    class="button-toggle"
                                    v-model="toggle_exclusive"
                                    mandatory
                            >
                                <v-btn>최신순</v-btn>
                                <v-btn>추천순</v-btn>
                            </v-btn-toggle>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row wrap justify="center">
                    <v-col cols="9">
                        <ReviewCardBig></ReviewCardBig>
                        <ReviewCardBig></ReviewCardBig>
                        <ReviewCardBig></ReviewCardBig>
                    </v-col>
                </v-row>

            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Toolbar from "../components/Toolbar";
    import VueSlider from "vue-slider-component";
    import LineChart from "../components/LineChart";
    import RadarChart from "../components/RadarChart";
    import ReviewCardBig from "../components/ReviewCardBig";
    export default {
        name: "Company",
        components: { Toolbar, LineChart, VueSlider, RadarChart, ReviewCardBig },
        data () {
            return {
                company: {
                    id: 1,
                    name: 'SK하이닉스',
                    field: ['IT', '반도체'],
                    location: '이천',
                    recommend: ['CS', 'EE'],
                    reviews: [{
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
                    },
                        {
                            id: 2,
                            company: {id: 1, name: 'SK하이닉스', src: '/'},
                            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                            semester: '2019 여름',
                            like: 57,
                            review: {
                                aggregate: 4.5,
                                star: [3, 5, 4, 5, 3],
                                content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만,급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 '
                            }
                        }]
                    },
                value: [0,5],
                range: [0,1,2,3,4,5],
                toggle_exclusive: undefined
                }
            }
        }
</script>

<style scoped>

    .sub-title-large {
        font-size: 18pt;
        font-weight: bold;
        height: 50px;
    }

    .sub-title-small {
        font-size: 14pt;
        font-weight: bold;
        height: 30px;
    }

    .sub-title-2-large {
        font-weight: bolder;
    }

    .sub-title-2-small {
        font-size: small;
    }

    .button-toggle {
        font-size:

    }

</style>