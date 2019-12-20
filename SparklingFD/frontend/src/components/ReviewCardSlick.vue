<template>

  <v-flex>
    <div class="d-none d-md-inline text-left">
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
      <ReviewDialog
              v-if="modalVisible"
              ref="modal"
              v-bind:visible.sync="modalVisible"
              v-bind:review="this.review">
      </ReviewDialog>
    </div>

<!--    <div class="d-md-none">-->
<!--      <v-row justify="center">-->
<!--          <v-col cols="12">-->
<!--            <slick-->
<!--                      ref="slick"-->
<!--                      :options="slickOptions"-->
<!--              >-->
<!--                <v-card class="card" v-for="review in (bestReviews.length > 0 ? bestReviews : placeholder)" :key="bestReviews.indexOf(review)">-->
<!--                  <v-row wrap-->
<!--                         justify="center"-->
<!--                         align="baseline"-->
<!--                         class="pl-8 pt-7">-->
<!--                    <v-flex class="korean card-title-small pr-2">{{review.company.name}}</v-flex>-->
<!--                  </v-row>-->
<!--                  <v-row wrap-->
<!--                         justify="center"-->
<!--                         align="baseline"-->
<!--                         class="pl-8"-->
<!--                  >-->
<!--                    <v-flex class="korean card-subtitle pr-1 text&#45;&#45;darken-1 grey&#45;&#45;text">-->
<!--                      {{review.user.major}} {{review.user.nickname}} | {{review.semester}}-->
<!--                      <v-btn class="korean ml-1" rounded x-small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>-->
<!--                    </v-flex>-->
<!--                  </v-row>-->
<!--                  <v-row wrap-->
<!--                         class="pl-5"-->
<!--                  >-->
<!--                    <v-col cols="11">-->
<!--                      <v-flex class="korean card-content-small">{{review.review.content}}</v-flex>-->
<!--                    </v-col>-->
<!--                  </v-row>-->
<!--                </v-card>-->

<!--              </slick>-->
<!--          </v-col>-->
<!--      </v-row>-->
<!--    </div>-->
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
      computed: {
        isAuthenticated() {
          if(this.$store.state._id){
            return true
          }
          return false
        }
      },
      data() {
        return {
          like: 1,
          modalVisible: false,
          slickOptions: {
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            prevArrow: '<button class="custom-prev"><</button>',
            nextArrow: '<button class="custom-next">></button>',
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
          this.$nextTick(function(){
            this.$refs.modal.updateData()
          });
        },
        updateLike() {
          this.$http.put('../../api/reviews/like/' + this.review.id);
          this.review.like += 1;
        }
      }
    }
</script>

<style scoped>

  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";

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