<template>

  <v-flex>

    <slick
            ref="slick"
            :options="slickOptions"
    >
    </slick>

    <div class="d-none d-md-inline">
      <v-row justify="center">
          <v-col cols="11">
            <slick
                      ref="slick"
                      :options="slickOptions"
              >
                <v-card class="card" v-for="review in bestReviews" :key="review.id">
                  <v-row wrap
                         justify="center"
                         align="baseline"
                         class="d-inline-flex pl-9 pt-7 pa-3">
                    <v-flex class="korean card-title pr-2">{{review.company.name}}</v-flex>
                    <v-flex class="korean card-subtitle pr-1 text--darken-1 grey--text">{{review.user.department}} {{review.user.nickname}} | {{review.semester}}</v-flex>
                    <v-btn class="korean ml-2" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
                  </v-row>
                  <v-row wrap
                         class="pl-6"
                  >
                    <v-col class="korean card-content" cols="8">
                      {{review.review.content}}
                    </v-col>
                    <v-col >

                    </v-col>
                  </v-row>

                  <v-card-text>

                  </v-card-text>
                </v-card>
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
                <v-card class="card">asdfadsfasdfadsfadfadsfdsafasdfasdfadfadsf</v-card>
                <v-card class="card">asdfadsfasdfadsfadfadsfdsafasdfasdfadfadsf</v-card>
                <v-card class="card">asdfadsfasdfadsfadfadsfdsafasdfasdfadfadsf</v-card>
                <v-card class="card">asdfadsfasdfadsfadfadsfdsafasdfasdfadfadsf</v-card>
                <v-card class="card">asdfadsfasdfadsfadfadsfdsafasdfasdfadfadsf</v-card>

              </slick>
          </v-col>
      </v-row>
    </div>
  </v-flex>


</template>

<script>

  import slick from 'vue-slick';

	export default {
		name: "ReviewCardBig",
		components: {
			slick
		},
		data() {
			return {
				bestReviews: [
          { id: 1,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 2,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 3,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 4,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 5,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 6,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 7,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 8,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 9,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
          },
          { id: 10,
            company: {id: 1, name: 'SK하이닉스', src: '/'},
            user: {id: 1, department: '전산학부', nickname: '빨간 넥타이'},
            semester: '2019 여름',
            like: 57,
            review: {aggregate: 4.0, star: [3, 5, 4, 5, 3], content: '급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다. 덕분에 분위기도 좋고 복지도 좋은 회사에서 뜻깊은 경험 했습니다! 급여는 딱 평균인데 분위기가 너무 좋았어요. 원래 지도 관련 평가가 낮은 인턴쉽이라 걱정했었지만, 올해부터 인턴십 프로그램을 크게 개선해서 요즘은 담당 사수님이 1대1로 꼼꼼하게 잘 챙겨줍니다.'}
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
			next() {
				this.$refs.slick.next();
      },
      prev() {
				this.$refs.slick.prev();
      },
      reInit() {
				// Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
          this.$refs.slick.reSlick();
        });
        }
    }
	}
</script>

<style scoped>

  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";

  .card {
    height: 250px;
    padding: 0 9px;
  }

  .card-title {
    font-weight: bold !important;
    font-size: larger;
  }

  .card-subtitle {
    font-size: small;
  }

  .card-content {
    font-size: 11.5pt;
    line-height: 18pt
  }

  .slick-prev {

  }

</style>