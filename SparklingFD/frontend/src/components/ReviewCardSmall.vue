<template>
    <v-card class="card korean mb-3 mr-3 ml-3 text-left" @click.stop="modalOpen">
        <ReviewDialog :visible.sync="modalVisible" :review="review"></ReviewDialog>
        <v-row wrap
               class="justify-center pt-5"
        >
            <v-col cols="10">
                <v-flex class="card-title pb-2">{{review.company.name}}</v-flex>
                <v-flex class="card-subtitle text--darken-1 grey--text">{{review.user.major}} {{review.user.nickname}} | {{review.semester.year}} {{review.semester.season}}</v-flex>
                <v-row class="card-content pt-5 pa-3">{{review.review.content}}</v-row>
                <v-row wrap class="pt-2 pl-1" align="baseline">
                    <v-flex>
                        <v-rating
                                class="pa-1"
                                background-color="#DDDDDD"
                                readonly
                                v-model="review.review.aggregate"
                                color="#FFCF57"
                                medium
                                dense
                                half-increments
                        ></v-rating>
                    </v-flex>
                    <v-flex class="label pr-1">{{review.review.aggregate}}</v-flex>
                    <v-spacer></v-spacer>
                    <v-flex>
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
                    </v-flex>
                </v-row>

            </v-col>

        </v-row>
    </v-card>

</template>

<script>
    import ReviewDialog from "./ReviewDialog";
    export default {
        name: "ReviewCardSmall",
        components: { ReviewDialog },
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
            // numbertoSeason(number){
            //     if (number==1){
            //         return '봄';
            //     } else if (number==2){
            //         return '여름';
            //     } else if (number==3){
            //         return '가을';
            //     } else {
            //         return '겨울';
            //     }
            // },
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
        height: 400px;
        background-color: white;
        width: 330px;
        border-radius: 10px !important;
        box-shadow: 0 4px 10px rgba(0,0,0, 0.08) !important;
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