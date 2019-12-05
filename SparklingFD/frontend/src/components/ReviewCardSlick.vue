<template>

  <v-flex>
    <div class="d-none d-md-inline">
      <v-row justify="center">
          <v-col cols="11">
            <slick
                    ref="slick"
                    :options="slickOptions"
              >
              <v-row wrap
                     class="d-inline-flex justify-center card-wrapper"
                     v-for="review in (bestReviews.length > 0 ? bestReviews : placeholder)"
                     :key="bestReviews.indexOf(review)"
              >
                <ReviewDialog ref="modal"
                              :review="review"
                              :visible="showModal"
                ></ReviewDialog>
                <v-col class="card">
                  <v-row wrap
                         class="korean pl-9 pt-3 pa-3"
                  >
                    <v-col cols="8">
                      <v-row wrap
                             align="baseline"
                             class="d-inline-flex pb-4">
                        <v-flex class="card-title-large pr-2" v-on:click="routeToCompany">{{review.company.name}}</v-flex>
                        <v-flex class="card-subtitle pr-1 text--darken-1 grey--text">{{review.user.major}} {{review.user.nickname}} | {{review.semester.year}} {{numbertoSeason(review.semester.season)}}</v-flex>
                        <v-btn class="ml-2" rounded small outlined color="grey"><v-icon class="mr-1" small>mdi-thumb-up</v-icon>{{review.like}}</v-btn>
                      </v-row>
                      <v-row wrap>
                        <v-flex class="card-content-large" @click="showModal=true">
                          {{review.review.content}}
                        </v-flex>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row wrap class="pl-3" justify="center">
                        <radarChart :star="review.review.star"></radarChart>
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
                <v-card class="card" v-for="review in (bestReviews.length > 0 ? bestReviews : placeholder)" :key="review.id">
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
            showModal: false,
            placeholder: [{id: 1}],
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
        onCallBack(bestReviews){
          this.$emit('update: bestReviews', bestReviews);
        },
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
        routeToCompany() {
          this.$router.push({path: '../../company/' + this.$parent.id})
        }
      },
      computed: {
      },
      mounted() {

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