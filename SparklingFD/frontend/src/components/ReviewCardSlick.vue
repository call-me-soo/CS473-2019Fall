<template>

  <v-flex>
    <div class="d-none d-md-inline">
      <v-row justify="center">
          <v-col cols="12">
            <slick
                    ref="slick"
                    :options="slickOptions"
              >
              <v-row wrap
                     class="d-inline-flex justify-center"
                     v-for="review in (bestReviews.length > 0 ? bestReviews : placeholder)"
                     :key="bestReviews.indexOf(review)"
              >
                <v-card class="pa-3 card" @click.stop="modalOpen(review)">
                  <v-row wrap
                         class="korean pl-9 pt-3 pa-3"
                  >
                    <v-col cols="8">
                      <v-row wrap
                             align="baseline"
                             class="d-inline-flex pb-4">
                        <v-flex class="card-title-large pr-2">{{review.company.name}}</v-flex>
                        <v-flex class="card-subtitle pr-1 text--darken-1 grey--text">{{review.user.major}} {{review.user.nickname}} | {{review.semester.year}} {{numbertoSeason(review.semester.season)}}</v-flex>
                        <v-btn class="ml-2" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like[0]}}</v-btn>
                      </v-row>
                      <v-row wrap>
                        <v-flex class="card-content-large" @click="showModal=true">
                          {{review.review.content}}
                        </v-flex>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row wrap class="pl-3" justify="center">
                        <radarChart :data="review.review.star"></radarChart>
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
                                  half-increments
                          ></v-rating>
                          <span class="label d-inline">{{review.review.aggregate}}</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>
              </slick>
          </v-col>
      </v-row>
      <div v-if="modalVisible">
        <ReviewDialog :visible.sync="modalVisible" :review="this.review"></ReviewDialog>
      </div>

    </div>
    <div class="d-md-none">
      <v-row justify="center">
          <v-col cols="12">
            <slick
                      ref="slick"
                      :options="slickOptions"
              >
                <v-card class="card" v-for="review in (bestReviews.length > 0 ? bestReviews : placeholder)" :key="bestReviews.indexOf(review)">
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
                      {{review.user.major}} {{review.user.nickname}} | {{review.semester}}
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
  import ReviewDialog from "./ReviewDialog";
  import radarChart from "./RadarChart";
	export default {
      name: "ReviewCardSlick",
      props: {
        bestReviews: {
          type: Array,
          required: true
        },
      },
      components: {
        slick, radarChart, ReviewDialog
      },
      data() {
        return {
          placeholder: [{"_id":"5ddbf68bb326f312260693f8","id":1,"company":{"id":1,"name":"SK하이닉스","src":"/"},"user":{"id":1,"major":"전산학부","nickname":"빨간 넥타이"},"semester":{"year":2019,"season":1},"like":57,"review":{"aggregate":2.5,"star":[3,5,4,5,3],"content":"급여를 매우 잘 챙겨줍니다."}},{"_id":"5ddbf694b326f312260693f9","id":2,"company":{"id":2,"name":"삼성","src":"/"},"user":{"id":2,"major":"전산학부","nickname":"검은 호랑이"},"semester":{"year":2018,"season":2},"like":33,"review":{"aggregate":3.7,"star":[4,3,4,3,4],"content":"배고파요 도와주세요"}},{"_id":"5ddcb9a5ebf3b87ba7992483","id":3,"company":{"id":3,"name":"네이버","src":"/"},"user":{"id":2,"major":"전산학부","nickname":"검은 호랑이"},"semester":{"year":2018,"season":2},"like":17,"review":{"aggregate":5,"star":[5,5,5,5,5],"content":"최고의 기업이었습니다. 배우는 것도 많고 복지도 짱짱인데 돈도 많이 줬습니다. 교통도 편리하고 사옥도 제공됩니다."}},{"_id":"5ddcba0eebf3b87ba7992484","id":4,"company":{"id":3,"name":"네이버","src":"/"},"user":{"id":1,"major":"전산학부","nickname":"빨간 넥타이"},"semester":{"year":2019,"season":1},"like":8,"review":{"aggregate":5,"star":[5,5,3,5,5],"content":"좋긴한데 일을 많이 시켜요..."}},{"_id":"5dec8a95095e9bf8bdd51fde","id":0,"company":{"field":["IT"],"recommend":["CS"],"star":[5,5,4,5,5],"reviews":[{"id":3,"company":{"id":3,"name":"네이버","src":"/"},"user":{"id":2,"major":"전산학부","nickname":"검은 호랑이"},"semester":{"year":2018,"season":2},"like":17,"review":{"aggregate":5,"star":[5,5,5,5,5],"content":"최고의 기업이었습니다. 배우는 것도 많고 복지도 짱짱인데 돈도 많이 줬습니다. 교통도 편리하고 사옥도 제공됩니다."}},{"id":4,"company":{"id":3,"name":"네이버","src":"/"},"user":{"id":1,"major":"전산학부","nickname":"빨간 넥타이"},"semester":{"year":2019,"season":1},"like":8,"review":{"aggregate":5,"star":[5,5,3,5,5],"content":"좋긴한데 일을 많이 시켜요..."}}],"_id":"5ddcbb52ebf3b87ba7992485","ID":3,"name":"네이버","logosrc":"/","location":"판교","salary":"10%"},"semester":{"year":"","season":""},"like":0,"review":{"aggregate":0,"star":[0,0,0,0,0],"content":""},"__v":0}],
          modalVisible: false,
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
            centerPadding: '12.5%',
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
        modalOpen(review) {
          this.modalVisible = true;
          this.review = review;
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

</style>