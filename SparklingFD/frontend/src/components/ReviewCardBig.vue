<template>
    <v-flex>
        <div class="d-none d-md-inline">
            <ReviewDialog :visible.sync="modalVisible" :review="review"></ReviewDialog>
            <v-card class="card korean mt-4 mb-4" @click.stop="modalOpen">
                <v-row class="pl-12 pa-5" wrap>
                    <v-col class="korean" cols="8">
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
                    <v-col cols="4">
                        <v-row wrap class="pl-3" justify="center">
                            <RadarChart v-bind:data="review.review.star"></RadarChart>
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

    import RadarChart from '../components/RadarChart';
    import ReviewDialog from "./ReviewDialog";

    export default {
        name: "ReviewCardBig",
        components: { RadarChart, ReviewDialog },
        props: {
          review: {
              type: Object,
              required: true
          }
        },
        data () {
            return {
                modalVisible: false,
            }
        },
        methods: {
            numbertoSeason(number){
                if (number===1){
                    return '봄';
                } else if (number===2){
                    return '여름';
                } else if (number===3){
                    return '가을';
                } else {
                    return '겨울';
                }
            },
            modalOpen() {
                this.modalVisible = true;
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