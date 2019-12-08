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
                            <div class="sub-title-large pr-5">{{companyInfo.name}}</div>
                            <div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{companyInfo.field.toString()}} | {{companyInfo.location}}</div>
                            <div class="sub-title-2-large pr-2">기업리뷰</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{companyInfo.reviews.length}}</div>
                            <div class="sub-title-2-large pr-2">추천학과</div><div class="sub-title-2-large pr-1 text--darken-1 grey--text">{{companyInfo.recommend.toString()}}</div>
                            <v-spacer></v-spacer>
                            <v-btn rounded @click="routeToReview">
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
                                <v-avatar class="mr-5 mb-2" size="40">
                                    <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                    >
                                </v-avatar>
                            </div>
                            <div class="sub-title-small pr-3">{{companyInfo.name}}</div>
                        </v-row>
                        <v-row class="sub-title-2-small">
                            <div class="pr-5 text--darken-1 grey--text">{{companyInfo.field.toString()}} | {{companyInfo.location}}</div>
                            <div class="pr-2">기업리뷰</div><div class="pr-5 text--darken-1 grey--text">{{companyInfo.reviews.length}}</div>
                            <div class="pr-2">추천학과</div><div class="pr-1 text--darken-1 grey--text">{{companyInfo.recommend.toString()}}</div>
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

                <v-row wrap class="pt-3 pb-3" justify="center" align="center">
                    <v-col cols="6">
                        <LineChart></LineChart>
                    </v-col>
                    <v-col cols="3">
                        <RadarChart></RadarChart>
                    </v-col>
                </v-row>

                <v-row wrap justify="center">
                    <v-col cols="10">
                        <v-divider></v-divider>
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
                        <ReviewCardBig v-for="review in companyInfo.reviews"
                                       :key="companyInfo.reviews.indexOf(review)"
                                       :review="review"
                        >
                        </ReviewCardBig>

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
        methods: {
            routeToReview() {
                this.$router.push({path: '../../review/' + this.companyInfo.ID})
            }
        },
        created () {
            this.$http.get('../../api/getCompanyInfo/' + this.$route.params.companyId)
                .then((response) => {
                    console.log(response.data);
                    this.companyInfo = response.data;
                })
        },
        data () {
            return {
                companyInfo: {},
                value: ['이전', '2019 가을'],
                range: ['이전', '2017 봄', '2017 여름', '2017 가을', '2017 겨울', '2018 봄', '2018 여름', '2018 가을', '2018 겨울', '2019 봄', '2019 여름', '2019 가을'],
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


</style>