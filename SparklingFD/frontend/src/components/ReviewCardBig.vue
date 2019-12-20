<template>
    <v-flex>
        <div class="d-none d-md-inline">
            <ReviewDialog v-bind:visible.sync="modalVisible" v-bind:review="review"></ReviewDialog>
            <v-card class="card korean mt-4 mb-4" @click.stop="modalOpen">
                <v-row class="pl-12 pa-5" wrap>
                    <v-col class="korean" cols="8">
                        <v-row wrap
                               align="baseline"
                               class="d-inline-flex pb-4">
                            <v-flex class="card-title-large pr-2">{{review.company.name}}</v-flex>
                            <v-flex class="card-subtitle pr-1 text--darken-1 grey--text">{{review.user.major}} {{review.user.nickname}} | {{review.semester.year}} {{review.semester.season}}</v-flex>
                            <v-btn-toggle
                                    v-model="like"
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
        computed: {
            isAuthenticated() {
                if(this.$store.state._id){
                    return true
                }
                return false
            }
        },
        data () {
            return {
                modalVisible: false,
                like: true
            }
        },
        methods: {
            modalOpen() {
                this.modalVisible = true;
            },
            updateLike() {
                if(this.like){
                    this.$http.put('../../api/reviews/like/' + this.review.id);
                    this.review.like += 1;
                    this.like = false;
                }else{
                    this.$http.put('../../api/reviews/likedown/' + this.review.id);
                    this.review.like += -1;
                    this.like = true;
                }
            },
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

</style>