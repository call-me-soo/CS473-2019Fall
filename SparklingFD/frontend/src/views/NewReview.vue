<template>
    <v-app>
        <Toolbar></Toolbar>
        <v-content>
            <div>
                <v-row wrap class="korean pt-5" justify="center" align="center">
                    <v-col cols="9">
                        <v-row wrap class="pb-5" align="baseline">
                            <div class="sub-title-large pr-5 d-none d-md-inline-block">리뷰 작성하기</div>
                            <div class="sub-title-small d-md-none">리뷰 작성하기</div>

                            <div class="sub-title-2-large text--darken-1 grey--text">{{companyInfo.name}}</div>
                        </v-row>

                        <v-container class="pa-10" style="background-color: #ffffff">
                            <v-row style="height: 70px" align="center">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        기간
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>인턴십을 수행한 학기를 입력해 주세요.</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-overflow-btn
                                        class="mr-10"
                                        :items="yearOption"
                                        v-model="review.semester.year"
                                        label="년도"
                                        editable
                                        item-value="text"
                                        style="width: 30px"
                                ></v-overflow-btn>
                                <v-overflow-btn
                                        class="mr-5"
                                        :items="seasonOption"
                                        v-model="review.semester.season"
                                        label="학기"
                                        editable
                                        item-value="text"
                                        style="width: 30px"
                                ></v-overflow-btn>
                            </v-row>
                            <v-row style="height: 70px" align="center">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        급여
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>정확한 급여 금액을 입력해 주시면, 자동으로 별점이 산출됩니다.</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-text-field
                                        v-model="review.review.salary"
                                        class="korean pr-5"
                                        solo
                                        hide-details
                                        label="180"
                                        background-color="grey lighten-3"
                                >
                                </v-text-field>
                                <div class="sub-title-2-large">만원</div>
                            </v-row>
                            <v-row style="height: 70px" align="center">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        업무 강도
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>업무 강도가 적절했으면 5, 과도했으면 1</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-rating
                                        class="d-inline"
                                        background-color="#DDDDDD"
                                        v-model="review.review.star[0]"
                                        color="#FFCF57"
                                        large
                                        dense
                                        half-increments
                                ></v-rating>
                            </v-row>
                            <v-row style="height: 70px" align="center">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        분위기
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>분위기가 좋았으면 5, 나빴으면 1</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-rating
                                        class="d-inline"
                                        background-color="#DDDDDD"
                                        v-model="review.review.star[1]"
                                        color="#FFCF57"
                                        large
                                        dense
                                        half-increments
                                ></v-rating>
                            </v-row>
                            <v-row style="height: 70px" align="center">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        배우는 것
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>배우는 것이 많았으면 5, 적었으면 1</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-rating
                                        class="d-inline"
                                        background-color="#DDDDDD"
                                        v-model="review.review.star[3]"
                                        color="#FFCF57"
                                        large
                                        dense
                                        half-increments
                                ></v-rating>
                            </v-row>
                            <v-row style="height: 70px" align="center">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        사내 복지
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>사내 복지가 많았으면 5, 적었으면 1</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-rating
                                        class="d-inline"
                                        background-color="#DDDDDD"
                                        v-model="review.review.star[4]"
                                        color="#FFCF57"
                                        large
                                        dense
                                        half-increments
                                ></v-rating>
                            </v-row>
                            <v-row class="pt-5" align="top">
                                <v-col cols="3">
                                    <div class="sub-title-2-large">
                                        내용
                                        <v-tooltip right>
                                            <template v-slot:activator="{ on }">
                                                <v-icon v-on="on" small>mdi-help-circle-outline</v-icon>
                                            </template>
                                            <span>자유롭게 작성해 주세요! (ex. 사내 식당은 맛있었나요?)</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                                <v-col cols="9">
                                    <v-textarea
                                            filled
                                            v-model="review.review.content"
                                    >
                                    </v-textarea>
                                </v-col>

                            </v-row>
                            <v-row wrap justify="center">
                                <v-btn rounded large @click="postPost" :disabled="!isAuthenticated">
                                    제출하기
                                </v-btn>
                            </v-row>
                        </v-container>

                    </v-col>
                </v-row>
            </div>
        </v-content>

    </v-app>

</template>

<script>
    import Toolbar from "../components/Toolbar";
    export default {
        name: "Review",
        components: { Toolbar },
        mounted() {
            this.$http.get('../../api/getCompanyInfo/' + this.$route.params.companyId)
                .then((response) => {
                    this.companyInfo = response.data;
                })
        },
        computed: {
            param: function () {
                return this.$route.params;
            },
            // {{ nickname }}으로 참조하면 됩니당!
            nickname() {
                return this.$store.state.nickname;
            },

            // {{ major }}로 참조하면 됩니당!
            major() {
                return this.$store.state.major;

            },
            isAuthenticated() {
                if(this.$store.state._id){
                    return true
                }
                return false
            }
        },
        methods: {
            routeToCompany() {
                this.$router.push({path: '../../company/' + this.companyInfo.ID})
            },
            postPost() {
                this.review.company.id = this.companyInfo.ID;
                this.review.company.name = this.companyInfo.name;
                this.review.company.logosrc = this.companyInfo.logosrc;
                this.review.user = this.$store.state;
                this.$http.post('../../api/reviews/', this.review)
                .then(response => {
                    console.log(response);
                    this.$http.put('../../api/getCompanyInfo/' + this.companyInfo.ID)
                    .then(response => {
                        console.log(response);
                        this.$http.put('../../api/getCompanyInfo/', {})
                        .then(response => {
                            console.log(response);
                            this.$router.go(-1);
                        }).catch(err => {
                            console.log(err);
                        })
                    }).catch(error=>{
                        console.log(error);
                    })
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        data() {
            return {
                companyInfo: {},
                yearOption: [2019, 2018, 2017],
                seasonOption: ['봄', '여름', '가을', '겨울'],
                review: {
                    id: 0,
                    company: {
                        id: 0,
                        name: '',
                        logosrc: ''
                    },
                    user: {
                        _id: '',
                        major: '',
                        nickname: '',
                    },
                    semester: {
                        year: 0,
                        season: ''
                    },
                    like: 0,
                    review: {
                        aggregate: 0,
                        salary: '',
                        salaryPercent : 0,
                        star: [0, 0, 0, 0, 0],
                        content: ''
                    }
                }
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
        width: 200px;
    }

    .sub-title-2-small {
        font-size: small;
    }

</style>