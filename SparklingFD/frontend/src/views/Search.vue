<template>
    <v-app>
        <v-content>
            <Toolbar></Toolbar>
            <v-container>
                <v-row wrap class="pt-5" justify="center" align="center" >
                    <v-col cols="9">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">검색 결과</div>
                            <div class="korean sub-title-small d-md-none">검색 결과</div>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-overflow-btn
                                    class=""
                                    style="width: 30px"
                                    :items="filters"
                                    label="필터"
                                    target="#dropdown-example"
                                    color="#FFCF57"
                            ></v-overflow-btn>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row wrap justify="center">
                    <v-col cols="9">
                        <ReviewCardBig></ReviewCardBig>
                        <ReviewCardBig></ReviewCardBig>
                        <ReviewCardBig></ReviewCardBig>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>


    </v-app>
</template>

<script>
    import Toolbar from "../components/Toolbar";
    import ReviewCardBig from "../components/ReviewCardBig";

    export default {
        name: "Search",
        components: {Toolbar, ReviewCardBig },
        created() {
            this.$http.get('../../api/searchQuery/userinput?input='
                + this.$route.params.userInput + '&'
                + this.$route.params.query)
                .then((response) => {
                    this.companyInfo = response.data[0];
                    console.log(this.companyInfo);
                })
        },
        data () {
            return {
                filters: ['전체 평점', '업무 강도', '분위기', '급여', '배우는 것', '사내 복지'],
                bestReviews: [
                    {
                        id: 1,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.5,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만,급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 '
                        }
                    },
                    {
                        id: 2,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만,급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 '
                        }
                    },
                    {
                        id: 3,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만,급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 '
                        }
                    },
                    {
                        id: 4,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    },
                    {
                        id: 5,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    },
                    {
                        id: 6,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    },
                    {
                        id: 7,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    },
                    {
                        id: 8,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    },
                    {
                        id: 9,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    },
                    {
                        id: 10,
                        company: {id: 1, name: 'SK하이닉스', src: '/'},
                        user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
                        semester: '2019 여름',
                        like: 57,
                        review: {
                            aggregate: 4.0,
                            star: [3, 5, 4, 5, 3],
                            content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'
                        }
                    }]
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

</style>