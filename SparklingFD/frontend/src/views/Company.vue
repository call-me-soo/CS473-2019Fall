<template>
    <v-app>
        <v-content>
            <Toolbar></Toolbar>
            <v-container v-if="Object.keys(this.companyInfo).length !== 0">
                <v-row wrap class="pt-5" justify="center" align="center">
                    <v-col class="korean d-none d-md-flex" cols="9">
                        <v-row
                                wrap
                                class="d-inline-flex"
                                align="baseline">
                            <div>
                                <v-avatar class="pr-5 pb-2" size="40">
                                    <img
                                            v-bind:src="this.companyInfo.logosrc"
                                            alt="img"
                                    >
                                </v-avatar>
                            </div>
                            <div class="sub-title-large pr-5">{{companyInfo.name}}</div>
                            <div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{companyInfo.field.toString()}} | {{companyInfo.location}}</div>
                            <div class="sub-title-2-large pr-2">기업리뷰</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{companyInfo.reviews.length}}</div>
                            <div class="sub-title-2-large pr-2">추천학과</div><div class="sub-title-2-large pr-1 text--darken-1 grey--text">{{companyInfo.recommend.toString()}}</div>
                            <v-spacer></v-spacer>
                            <v-btn rounded @click="routeToReview" :disabled="!isAuthenticated" color="#FFCF57" depressed large>
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
                                            v-bind:src="this.companyInfo.logosrc"
                                            alt="img"
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

                <v-row v-show="isReviewsEmpty" wrap class="pt-5 justify-center" align="center" >
                    <v-col cols="9">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">
                                아직 리뷰가 없네요.<br/> 당신의 소중한 경험을 공유해주세요~ ( ᐛ )و 
                            </div>
                            <div class="korean sub-title-small d-md-none">
                                아직 리뷰가 없네요.<br/> 당신의 소중한 경험을 공유해주세요~ ( ᐛ )و 
                            </div>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row v-show="!isReviewsEmpty" wrap class="pa-3" justify="center">
                    <v-col cols="9">
                        <vue-slider
                                ref="slider"
                                v-model="inputRange"
                                :adsorb="true"
                                :interval="1"
                                :data="range"
                                :marks="true"
                                :process-dragable="true"
                                :height="5"
                                @change="processData"
                        >
                        </vue-slider>
                    </v-col>
                </v-row>

                <v-row v-show="!isReviewsEmpty" wrap class="pt-3 pb-3" justify="center" align="center">
                    <v-col cols="6">
                        <LineChart v-bind:data="this.processed" :label="this.label"></LineChart>
                    </v-col>
                    <v-col cols="3">
                        <RadarChart ref="radar" v-bind:data="this.star"></RadarChart>
                    </v-col>
                </v-row>


                <v-row v-show="!isReviewsEmpty" wrap justify="center">
                    <v-col cols="10">
                        <v-divider></v-divider>
                    </v-col>
                </v-row>


                <v-row v-show="!isReviewsEmpty" wrap class="pt-5" justify="center" align="center" >
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
                                    v-model="sortCards"
                                    mandatory
                                    @change="toggleSort"
                            >
                                <v-btn value="date">최신순</v-btn>
                                <v-btn value="recommend">추천순</v-btn>
                            </v-btn-toggle>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row v-show="!isReviewsEmpty" wrap justify="center">
                    <v-col cols="9">
                        <ReviewCardBig v-for="review in sortedReview"
                                       :key="sortedReview.indexOf(review)"
                                       v-bind:review="review"
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
        created () {
            this.$http.get('../../api/getCompanyInfo/' + this.$route.params.companyId)
            .then((response) => {
                this.companyInfo = response.data;

                this.$http.get('../../api/reviews/company/' + this.$route.params.companyId)
                .then((response) => {
                    this.companyInfo.reviews = response.data;
                    this.toggleSort('date');
                    this.companyInfo.reviews.map(
                        review => {
                            this.range.push(review.semester)
                        }
                    );

                    let reducer = (accumulator, value) => {
                        if (accumulator.every( x => { return (this.compareSeason(x, value) !== 0) } )) {
                            console.log(value);
                            console.log('every');
                            accumulator.unshift(value);
                        }
                        return accumulator;
                    };

                    this.range = this.range.reduce(reducer, []);
                    console.log(this.range);


                    this.range.sort((a, b) => {
                        this.compareSeason(a, b)
                    });
                    this.range = this.range.map(function (element) {
                        return this.formatSemester(element)
                    }.bind(this));
                    this.inputRange = [this.range[0], this.range[this.range.length-1]];
                    this.label = this.range;
                    this.processData();
                });
            });
        },
        computed: {
            isReviewsEmpty() {
                return this.companyInfo.reviews.length === 0;

            },
            isAuthenticated() {
                return !!this.$store.state._id;

            }
        },
        methods: {
            routeToReview() {
                this.$router.push({path: '../../newreview/company/' + this.companyInfo.ID})
            },
            compareSeason(a, b) {
                let seasons = ['봄', '여름', '가을', '겨울'];
                if (a['year'] < b['year']){
                    return -1;
                } else if (a['year'] > b['year']){
                    return 1;
                } else {
                    if (seasons.indexOf(a['season']) < seasons.indexOf(b['season'])){
                        return -1;
                    } else if (seasons.indexOf(a['season']) > seasons.indexOf(b['season'])){
                        return 1;
                    } else {
                        return 0;
                    }
                }

            },
            toggleSort() {
                if (this.sortCards === 'date'){
                    this.sortedReview = this.companyInfo.reviews.sort((b, a) => {
                        this.compareSeason(a['semester'], b['semester']);
                    })
                } else {
                    this.sortedReview = this.companyInfo.reviews.sort((b, a) => {
                        return a['like'] - b['like']
                    })
                }
            },
            processData() {

                const temp = [];
                const items = ['hardness', 'atmosphere', 'salary', 'learning', 'welfare'];

                //initialize
                this.processed['aggregate'] = [];
                items.forEach(
                    label => this.processed[label] = []
                );

                this.label = this.range.slice(this.range.indexOf(this.inputRange[0]), this.range.indexOf(this.inputRange[1]) + 1);

                for (let i = 0; i < this.label.length; i++) {
                    temp.push(0);
                    this.processed['aggregate'].push(0);
                    items.forEach(
                        label => this.processed[label].push(0)

                    )
                }

                this.companyInfo.reviews.map(
                    element => {
                        const index = this.label.indexOf(this.formatSemester(element.semester));
                        temp[index] += 1;
                        items.forEach(
                            (label, id) => {
                                this.processed[label][index] += element.review.star[id]
                            }
                        )
                    }
                );

                items.forEach(
                    label => {
                        this.processed[label] = this.processed[label].map(function (element, index) {
                            return element / temp[index];
                        })
                    }
                );


                for (let i = 0; i < this.range.length; i++){
                    items.forEach(
                        element => {
                            this.processed['aggregate'][i] += this.processed[element][i]
                        }
                    );
                    this.processed['aggregate'][i] = this.processed['aggregate'][i]/5
                }

                items.forEach(
                    (element, index) => {
                        this.star[index] = this.processed[element].reduce((a,b) => a + b, 0) / this.processed[element].length;

                    }
                );
                
                this.$refs.radar.renderRadarChart()
            },
            formatSemester(semester){
                return semester.year + ' ' + semester.season
            },
        },
        data () {
            return {
                companyInfo: {},
                processed: {
                    aggregate: [],
                    hardness: [],
                    atmosphere: [],
                    salary: [],
                    learning: [],
                    welfare: []
                },
                inputRange: [], //user input about semester range
                label: [], //sliced range for line chart
                range: [], //review exist range
                star: [1,1,1,1,1], //star for radar chart
                sortCards: 'date',
                sortedReview: {},
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