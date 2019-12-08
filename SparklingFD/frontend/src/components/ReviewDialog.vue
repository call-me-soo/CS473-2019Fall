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
                        <v-flex class="card-title-large pr-2">{{review.company.name}}</v-flex>
                        <v-flex class="card-subtitle pr-1 text--darken-1 grey--text">{{review.user.major}} {{review.user.nickname}} | {{review.semester.year}} {{numbertoSeason(review.semester.season)}}</v-flex>
                        <v-btn class="ml-2" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
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

            <v-row wrap class="pt-5">
                <v-col cols="4">
                    <v-row wrap class="pl-3" justify="center">
                        <RadarChart :data="review.review.star" style="width:200px"></RadarChart>
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
                        <div class="sub-title-2-large pr-2">급여</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">200만원, 상위 25%</div>
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
        data () {
            return {
            }
        },
        methods: {
            numbertoSeason(number){
                if (number==1){
                    return '봄';
                } else if (number==2){
                    return '여름';
                } else if (number==3){
                    return '가을';
                } else {
                    return '겨울';
                }
            },
            handleWrapperClick(){
                this.$emit('update:visible', false)
            },
            close() {
                this.$emit('update:visible', false)
            }
        }
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