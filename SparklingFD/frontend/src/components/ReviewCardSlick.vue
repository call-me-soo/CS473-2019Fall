<template>

  <v-flex>
    <div class="d-none d-md-inline">
      <v-row justify="center">
          <v-col cols="11">
            <slick
                      ref="slick"
                      :options="slickOptions"
              >
              <v-row wrap class="d-inline-flex justify-center card-wrapper" v-for="review in bestReviews" :key="review.id">
                <v-col class="card">
                  <v-row wrap
                         class="korean pl-9 pt-3 pa-3"
                  >
                    <v-col cols="8">
                      <v-row wrap
                             align="baseline"
                             class="d-inline-flex pb-4">
                        <v-flex class="korean card-title-large pr-2">{{review.company.name}}</v-flex>
                        <v-flex class="korean card-subtitle pr-1 text--darken-1 grey--text">{{review.user.department}} {{review.user.nickname}} | {{review.semester}}</v-flex>
                        <v-btn class="korean ml-2" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
                      </v-row>
                      <v-row wrap>
                        <v-flex class="card-content-large">
                          {{review.review.content}}
                        </v-flex>
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
              </v-col>
              </v-row>
              </slick>
          </v-col>
      </v-row>
    </div>
    <div class="d-md-none">
      <v-row justify="center">
          <v-col cols="12">
            <slick
                      ref="slick"
                      :options="slickOptions"
              >
                <v-card class="card" v-for="review in bestReviews" :key="review.id">
                  <v-row wrap
                         justify="center"
                         align="baseline"
                         class="pl-8 pt-7">
                    <v-flex class="korean card-title-small pr-2">{{review.company.name}}</v-flex>
                  </v-row>
                  <v-row wrap
                         justify="center"
                         align="baseline"
                         class="pl-8"
                  >
                    <v-flex class="korean card-subtitle pr-1 text--darken-1 grey--text">
                      {{review.user.department}} {{review.user.nickname}} | {{review.semester}}
                      <v-btn class="korean ml-1" rounded x-small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
                    </v-flex>
                  </v-row>
                  <v-row wrap
                         class="pl-5"
                  >
                    <v-col cols="11">
                      <v-flex class="korean card-content-small">{{review.review.content}}</v-flex>
                    </v-col>

                  </v-row>

                </v-card>

              </slick>
          </v-col>
      </v-row>
    </div>
  </v-flex>


</template>

<script>

  import slick from 'vue-slick';
  import radarChart from "./RadarChart";
	export default {
		name: "ReviewCardSlick",
		components: {
			slick, radarChart
		},
		data() {
			return {
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
                },

              ],
              slickOptions: {
                accessibility: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '10%',
                draggable: true,
                responsive: [
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                      centerMode: false,
                    }
                  }
                ]
              }
            }
		},
		methods: {

    },
      computed: {
        myStyles() {
          return {
            height: '50px',
            width: '50px',
            position: 'relative'
          }
        }
      }
	}
</script>

<style scoped>

  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";

  .card-wrapper{
    width: 98% !important;
  }

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

  .slick-dots{
    padding: 24px !important;
  }


</style>