<template>
    <v-dialog v-model="visible" max-width="1000px" @click:outside="handleWrapperClick" @keydown.esc="handleWrapperClick">
        <v-card class="card korean">
            <v-row wrap>
                <v-spacer></v-spacer>
                <button class="pr-5 pt-3" @click="close"><v-icon>mdi-close</v-icon></button>
            </v-row>
            <v-row class="pl-12 pa-5" wrap>
                <v-col class="korean" cols="11">
                    <v-row wrap
                           align="baseline"
                           class="d-inline-flex pb-4">
                        <v-flex class="card-title-large pr-2" @click="routeToCompany">{{review.company.name}}</v-flex>
                        <v-flex class="card-subtitle pr-1 text--darken-1 grey--text">{{review.user.major}} {{review.user.nickname}} | {{review.semester.year}} {{review.semester.season}}</v-flex>
                        <v-btn-toggle
                            :v-model="likeClicked"
                            class="ml-2"
                            color="#FFCF57"
                            group
                            rounded
                        >
                            <v-btn
                                :disabled="!isAuthenticated"
                                small
                                outlined
                                rounded
                                text
                                @click="updateLike"
                            >
                                <v-icon
                                    class="mr-1"
                                    small   
                                >
                                    mdi-thumb-up
                                </v-icon>
                                {{review.like}}
                            </v-btn>
                        </v-btn-toggle>
                    </v-row>
                    <v-row wrap>
                        <v-flex class="card-content-large">
                            {{review.review.content}}
                        </v-flex>
                    </v-row>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="11">
                    <v-divider></v-divider>
                </v-col>
            </v-row>


            <v-row wrap class="pt-5 d-none d-md-flex">
                <v-col cols="4">
                    <v-row wrap class="pl-3" justify="center">
                        <RadarChart ref="radarLarge" v-bind:data="review.review.star" style="width:200px"></RadarChart>
                    </v-row>
                    <v-row wrap class="pt-2" justify="center" align="baseline">
                        <v-col class="text-center">
                            <v-rating
                                    half-increments
                                    class="d-inline pa-3"
                                    background-color="#DDDDDD"
                                    readonly
                                    v-model="review.review.aggregate"
                                    color="#FFCF57"
                                    medium
                                    dense
                            ></v-rating>
                            <span class="d-inline">{{review.review.aggregate}}</span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="8">
                    <v-row class="pb-3">
                        <div class="sub-title-2-large pr-2">급여</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{review.review.salary}}만원 ( 상위 {{review.review.salaryPercent}}% )</div>
                    </v-row>
                    <v-row wrap align="baseline">
                        <v-col cols="6">
                            <v-row wrap align="baseline">
                                <div class="sub-title-2-large pr-2">업무강도</div>
                                <v-rating
                                        class="d-inline pr-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="review.review.star[0]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{review.review.star[0]}}</span>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row wrap align="baseline">
                                <div class="sub-title-2-large pr-2">분위기</div>
                                <v-rating
                                        class="d-inline pr-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="review.review.star[1]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{review.review.star[1]}}</span>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row wrap align="baseline">
                        <v-col cols="6">
                            <v-row wrap align="baseline">
                                <div class="sub-title-2-large pr-2">배우는 것</div>
                                <v-rating
                                        class="d-inline pr-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="review.review.star[3]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{review.review.star[3]}}</span>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row wrap align="baseline">
                                <div class="sub-title-2-large pr-2">사내복지</div>
                                <v-rating
                                        class="d-inline pr-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="review.review.star[4]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{review.review.star[4]}}</span>
                            </v-row>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>

            <v-row wrap class="pt-5 d-md-none d-inline">
                <v-col>
                    <v-row wrap justify="center">
                        <RadarChart ref="radarSmall" v-bind:data="review.review.star" style="width:200px"></RadarChart>
                    </v-row>
                    <v-row wrap class="pt-2" justify="center" align="baseline">
                        <v-col class="text-center">
                            <v-rating
                                    half-increments
                                    class="d-inline pa-3"
                                    background-color="#DDDDDD"
                                    readonly
                                    v-model="review.review.aggregate"
                                    color="#FFCF57"
                                    small
                                    dense
                            ></v-rating>
                            <span class="d-inline">{{review.review.aggregate}}</span>
                        </v-col>
                    </v-row>
                    <v-row class="pa-3 pl-10">
                        <div class="sub-title-2-large pr-2">급여</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{review.review.salary}}만원 ( 상위 {{review.review.salaryPercent}}% )</div>
                    </v-row>
                    <v-row wrap class="pl-10" align="baseline">
                        <div class="sub-title-2-large pr-2">업무강도</div>
                        <v-rating
                                class="d-inline pr-3"
                                background-color="#DDDDDD"
                                readonly
                                v-model="review.review.star[0]"
                                color="#FFCF57"
                                small
                                dense
                                half-increments
                        ></v-rating>
                        <span class="label d-inline">{{review.review.star[0]}}</span>
                    </v-row>
                    <v-row wrap class="pl-10" align="baseline">
                        <div class="sub-title-2-large pr-2">분위기</div>
                        <v-rating
                                class="d-inline pr-3"
                                background-color="#DDDDDD"
                                readonly
                                v-model="review.review.star[1]"
                                color="#FFCF57"
                                small
                                dense
                                half-increments
                        ></v-rating>
                        <span class="label d-inline">{{review.review.star[1]}}</span>
                    </v-row>
                    <v-row wrap class="pl-10" align="baseline">
                        <div class="sub-title-2-large pr-2">배우는 것</div>
                        <v-rating
                                class="d-inline pr-3"
                                background-color="#DDDDDD"
                                readonly
                                v-model="review.review.star[3]"
                                color="#FFCF57"
                                small
                                dense
                                half-increments
                        ></v-rating>
                        <span class="label d-inline">{{review.review.star[3]}}</span>
                    </v-row>
                    <v-row wrap class="pl-10" align="baseline">
                        <div class="sub-title-2-large pr-2">사내복지</div>
                        <v-rating
                                class="d-inline pr-3"
                                background-color="#DDDDDD"
                                readonly
                                v-model="review.review.star[4]"
                                color="#FFCF57"
                                small
                                dense
                                half-increments
                        ></v-rating>
                        <span class="label d-inline">{{review.review.star[4]}}</span>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
    import RadarChart from "./RadarChart";
    export default {
        name: "ReviewDialog",
        components: {RadarChart},
        props: {
            visible: {
                type: Boolean,
                required: true
            },
            review: {
                type: Object,
                required: true
            }
        },
        computed: {
            isAuthenticated() {
                if (this.$store.state._id) {
                    return true
                }
                return false
            },
            likeClicked() {
                return this.like;
            }
        },
        data() {
            return {
                like: true
            }
        },
        methods: {
            handleWrapperClick() {
                this.$emit('update:visible', false)
            },
            close() {
                this.$emit('update:visible', false)
            },
            routeToCompany() {
                this.$router.push({path: '../../company/' + this.review.company.id})
            },
            updateLike() {
                if(this.like == true){
                    this.$http.put('../../api/reviews/like/' + this.review.id);
                    this.review.like += 1;
                    this.like = false;
                    console.log(this.like);
                }else{
                    this.$http.put('../../api/reviews/likedown/' + this.review.id);
                    this.review.like += -1;
                    this.like = true;
                    console.log(this.like);
                }
            },
            updateData() {
                this.$refs.radarLarge.renderRadarChart()
                this.$refs.radarSmall.renderRadarChart()

            }
        },
    }
</script>

<style scoped>

    .card {
        background-color: white;
        border-radius: 10px !important;
        box-shadow: 0 4px 10px rgba(0,0,0, 0.08) !important;
    }

    .card-title-large {
        font-weight: bold;
        font-size: larger;
    }

    .card-subtitle {
        font-size: small;
    }

    .card-content-large {
        font-size: 11.5pt;
        line-height: 18pt;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .label {
        font-size: 9pt;
        font-weight: bold;
        color: #676767
    }

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