<template>

  <div class="d-inline">
    <v-flex class="d-inline">
      <div wrap class="d-none d-md-inline">
        <v-btn @click="showModal=true"
             class="filter-button korean mt-2 ml-1 mr-1 lighten-2"
             :class="isFilterOn ? 'button-on' : 'grey grey--text text--darken-1'"
             rounded
             medium
             depressed
        >{{label}} {{isFilterOn ? ((label === '급여')? ' ( ' + rating + '만원이상 )': ' ( ' + rating + '이상 )' ): ''}}
        </v-btn>
      </div>
      <div wrap class="d-md-none d-inline">
        <v-btn @click="showModal=true"
               class="filter-button korean mt-2 ml-1 mr-1 lighten-2"
               :class="isFilterOn ? 'button-on' : 'grey grey--text text--darken-1'"
               rounded
               small
               depressed
        >{{label}} {{isFilterOn ? ((label === '급여')? ' ( ' + rating + '만원이상 )': ' ( ' + rating + '이상 )' ): ''}}
        </v-btn>
      </div>

      <v-dialog v-model="showModal" max-width="500px">
        <v-card>
          <v-card-title
                  class="korean font-weight-bold grey lighten-2"
                  primary-title
          >
            {{this.label}}
          </v-card-title>

          <v-card-text  v-if="label === '급여'">
            <v-row wrap style="height: 100px" align="center">
              <v-text-field
                      v-model="input"
                      class="korean pr-5"
                      solo
                      hide-details
                      label="0"
                      background-color="grey lighten-3"
                      flat
                      clearable
              >
              </v-text-field>
              <div class="sub-title-2-large" style="width: 200px">만원 이상</div>
            </v-row>
          </v-card-text>

          <v-card-text  v-else>
              <v-row wrap justify="center" align="center" class="sub-title-2-large" style="height: 50px">{{input}} 점 이상</v-row>
              <v-row wrap style="height: 70px" align="center" justify="center">
                <vue-slider
                        ref="slider"
                        v-model="input"
                        width="90%"
                        :adsorb="true"
                        :interval="1"
                        :data="range"
                        :marks="true"
                        :process-dragable="true"
                        :height="5"
                        direction="rtl"
                ></vue-slider>
              </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="red"
                    text
                    @click="cancelModal"
            >
              Cancel
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="confirmModal"
            >
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </div>


</template>

<script>
  import VueSlider from "vue-slider-component";

  export default {
    name: "SearchFilter",
    components: { VueSlider },
    props: {
      label: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      selected: {
        type: Boolean,
        required: true
      }

    },
    data () {
      return {
        showModal: false,
        input: 0,
        range: [5,4,3,2,1,0],
        isFilterOn: false
      }
    },
    methods: {
      onCallBack(rating, selected){
        this.$emit('update:rating', rating);
        this.$emit('update:selected', selected);
      },
      confirmModal() {
        this.onCallBack(parseInt(this.input), true);
        this.showModal = false;
        this.isFilterOn = true;
      },
      cancelModal() {
        this.input = this.rating;
        this.showModal = false;
      }
    }
  }
</script>

<style scoped>

  .button-on {
    background-color: #FFCF57 !important;
    color: #000000 !important;
  }
  
  .filter-button {
    letter-spacing: -0.05rem;
  }

  .sub-title-2-large {
    font-weight: bolder;
    font-size: larger;
  }

  .sub-title-2-small {
    font-size: small;
  }

</style>