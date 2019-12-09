<template>
    <v-flex>
        <div class="d-none d-md-inline">
            <v-card class="card korean mt-4 mb-4" @click="routeToCompany">
                <v-row class="pl-12 pa-5" wrap>
                    <v-col class="korean" cols="8">
                        <v-row wrap
                               align="baseline"
                               class="d-inline-flex pt-2 pb-4">
                            <div>
                                <v-avatar class="pr-5 pb-2" size="40">
                                    <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                    >
                                </v-avatar>
                            </div>
                            <div class="card-title-large pr-5">{{companyInfo.name}}</div>
                            <div class="sub-title-2-large pr-7 text--darken-1 grey--text">{{companyInfo.field.toString()}} | {{companyInfo.location}}</div>
                            <div class="sub-title-2-large pr-2">기업리뷰</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{companyInfo.reviews.length}}</div>
                            <div class="sub-title-2-large pr-2">추천학과</div><div class="sub-title-2-large pr-1 text--darken-1 grey--text">{{companyInfo.recommend.toString()}}</div>
                        </v-row>
                        <v-row class="pt-2" style="height: 40px;">
                            <div class="sub-title-large pr-2">급여</div><div class="sub-title-2-large pr-5 text--darken-1 grey--text">{{companyInfo.salary}}만원, 상위 {{companyInfo.salarypercent}}</div>
                        </v-row>
                        <v-row wrap align="baseline" style="height: 40px">
                            <v-col cols="6">
                                <v-row wrap align="center">
                                    <div class="sub-title-large pr-2">업무강도</div>
                                    <v-rating
                                            class="d-inline pr-3"
                                            background-color="#DDDDDD"
                                            readonly
                                            v-model="this.companyInfo.star[0]"
                                            color="#FFCF57"
                                            medium
                                            dense
                                            half-increments
                                    ></v-rating>
                                    <span class="label d-inline">{{this.companyInfo.star[0]}}</span>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row wrap align="center">
                                    <div class="sub-title-large pr-2">분위기</div>
                                    <v-rating
                                            class="d-inline pr-3"
                                            background-color="#DDDDDD"
                                            readonly
                                            v-model="this.companyInfo.star[1]"
                                            color="#FFCF57"
                                            medium
                                            dense
                                            half-increments
                                    ></v-rating>
                                    <span class="label d-inline">{{this.companyInfo.star[1]}}</span>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row wrap align="baseline" style="height: 40px;">
                            <v-col cols="6">
                                <v-row wrap align="center">
                                    <div class="sub-title-large pr-2">배우는 것</div>
                                    <v-rating
                                            class="d-inline pr-3"
                                            background-color="#DDDDDD"
                                            readonly
                                            v-model="this.companyInfo.star[2]"
                                            color="#FFCF57"
                                            medium
                                            dense
                                            half-increments
                                    ></v-rating>
                                    <span class="label d-inline">{{this.companyInfo.star[2]}}</span>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row wrap align="center">
                                    <div class="sub-title-large pr-2">사내복지</div>
                                    <v-rating
                                            class="d-inline pr-3"
                                            background-color="#DDDDDD"
                                            readonly
                                            v-model="this.companyInfo.star[3]"
                                            color="#FFCF57"
                                            medium
                                            dense
                                            half-increments
                                    ></v-rating>
                                    <span class="label d-inline">{{this.companyInfo.star[3]}}</span>
                                </v-row>
                            </v-col>
                        </v-row>
                        
                    </v-col>
                    <v-col cols="4">
                        <v-row wrap class="pl-3" justify="center">
                            <RadarChart :data="this.companyInfo.star"></RadarChart>
                        </v-row>
                        <v-row wrap class="pt-2" justify="center" align="baseline">
                            <v-col class="text-center">
                                <v-rating
                                        class="d-inline pa-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="this.aggregate"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{this.aggregate}}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

            </v-card>
        </div>
    </v-flex>
</template>

<script>
    import RadarChart from "./RadarChart";
    export default {
        name: "CompanyCard",
        components: {RadarChart},
        props: {
            companyInfo: {
                type: Object,
                required: true
            }
        },
        computed: {
            aggregate() {
                var sum=0;
                for(var i=0; i<5; i++){
                    sum +=this.companyInfo.star[i]
                }
                return sum/5.0;
            }
        },
        methods: {
            routeToCompany() {
                this.$router.push({path: '../../company/' + this.companyInfo.ID})
            }

        }
    }
</script>

<style scoped>
    .card {
        height: 260px;
        background-color: white;
        border-radius: 10px !important;
        box-shadow: 0 4px 10px rgba(0,0,0, 0.08) !important;
        width: 98% !important;
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

    .sub-title-large {
        width: 80px;
        display: block;
        font-weight: bolder;
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