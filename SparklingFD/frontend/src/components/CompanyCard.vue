<template>
    <v-flex>
        <div class="d-none d-md-inline">
            <v-card class="card korean mt-4 mb-4">
                <v-row class="pl-12 pa-5" wrap>
                    <v-col class="korean" cols="8">
                        <v-row wrap
                               align="baseline"
                               class="d-inline-flex pb-4">
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
    export default {
        name: "CompanyCard",
        props: {
            company: {
                type: Object,
                required: true
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