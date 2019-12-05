<template>
    <v-dialog v-if="visible" max-width="500px" @click.self="handleWrapperClick">
        <header>
            <button @click="$emit('update:visible', false)">Close</button>
        </header>
        <v-card class="card korean mt-4 mb-4">
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
                            {{review.content}}
                        </v-flex>
                    </v-row>
                </v-col>
            </v-row>
            <v-row wrap justify="center">
                <v-col cols="4">
                    <v-row wrap class="pl-3" justify="center">
                        <RadarChart></RadarChart>
                    </v-row>
                </v-col>
                <v-col cols="7">
                    <v-row wrap class="pt-2" justify="center" align="baseline">
                        <v-col class="text-center">
                            <v-rating
                                    class="d-inline pa-3"
                                    background-color="#DDDDDD"
                                    readonly
                                    v-model="review.aggregate"
                                    color="#FFCF57"
                                    large
                                    dense
                            ></v-rating>
                            <span class="d-inline">{{review.aggregate}}</span>
                        </v-col>
                    </v-row>
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
                                        v-model="this.review.star[0]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{this.review.star[0]}}</span>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row wrap align="baseline">
                                <div class="sub-title-2-large pr-2">분위기</div>
                                <v-rating
                                        class="d-inline pr-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="this.review.star[1]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{this.review.star[1]}}</span>
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
                                        v-model="this.review.star[3]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{this.review.star[3]}}</span>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row wrap align="baseline">
                                <div class="sub-title-2-large pr-2">사내복지</div>
                                <v-rating
                                        class="d-inline pr-3"
                                        background-color="#DDDDDD"
                                        readonly
                                        v-model="this.review.star[4]"
                                        color="#FFCF57"
                                        medium
                                        dense
                                        half-increments
                                ></v-rating>
                                <span class="label d-inline">{{this.review.star[4]}}</span>
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
            },
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
        }
    }
</script>

<style scoped>

</style>