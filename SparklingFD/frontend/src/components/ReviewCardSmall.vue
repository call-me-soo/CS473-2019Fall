<template>
    <v-card class="card korean mb-3 mr-3 ml-3">
        <v-row wrap
               class="justify-center pt-5"
        >
            <v-col cols="10">
                <v-flex class="card-title pb-2">{{review.company.name}}</v-flex>
                <v-flex class="card-subtitle text--darken-1 grey--text">{{review.user.department}} {{review.user.nickname}} | {{review.semester.year}} {{numbertoSeason(review.semester.season)}}</v-flex>
                <v-row class="card-content pt-5 pa-3" @click="$refs.modal.showModal=true">{{review.review.content}}</v-row>
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
                    <v-flex><v-btn rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn></v-flex>
                </v-row>

            </v-col>

        </v-row>
    </v-card>

    <ReviewDialog ref="modal"
                  :review.sync="review"
    ></ReviewDialog>

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
            }
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