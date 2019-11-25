<template>

  <v-flex>
    <div class="d-none d-md-inline">
      <v-row justify="center">
          <v-col cols="11">
            <slick
                      ref="slick"
                      :options="slickOptions"
              >
              <v-row wrap class="d-inline-flex justify-center" v-for="review in bestReviews" :key="review.id">
                <v-col cols="11" class="card">
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
    created () {
      this.$http.get('/api/cards')
        .then((response) => {
          this.bestReviews = response.data
        })
    },
		data() {
			return {
              bestReviews: [],
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


  .card {
    height: 260px;
    background-color: white;
    border-radius: 10px !important;
    box-shadow: 0 4px 10px rgba(0,0,0, 0.08) !important;
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