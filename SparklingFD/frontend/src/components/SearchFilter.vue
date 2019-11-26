<template>

  <v-flex class="d-inline">
    <div v-if="label === '급여'">
      <div wrap
           class="d-none d-md-inline"
      >
        <v-btn @click="showModal=true"
               class="filter-button korean mt-2 ml-1 mr-1 lighten-2"
               :class="isFilterOn ? 'button-on' : 'grey grey--text text--darken-1'"
               rounded
               medium
        >
          {{label}} {{isFilterOn ? rating : ''}}
        </v-btn>
      </div>
      <v-row wrap
             class="d-md-none"
             justify="center"
      >
        <v-flex style="justify-content: space-between">
          <div class="text-center">
            <v-btn @click="showModal=true" class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>{{rating}}</v-btn>
          </div>
        </v-flex>
      </v-row>

      <v-dialog v-model="showModal" max-width="500px">
        <v-card>
          <v-card-title
                  class="korean headline grey lighten-2"
                  primary-title
          >
            {{this.label}}
          </v-card-title>
          <v-card-text>
            <v-row wrap style="height: 100px" align="center" justify="center">
              <v-text-field
                      v-model="input"
                      class="korean pr-5"
                      solo
                      hide-details
                      label="180"
                      background-color="grey lighten-3"
              >
              </v-text-field>
              <div class="sub-title-2-large">만원</div>
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
    </div>
    <div v-else>
      <div wrap
           class="d-none d-md-inline"
      >
        <v-btn @click="showModal=true"
               class="filter-button korean mt-2 ml-1 mr-1 lighten-2"
               :class="isFilterOn ? 'button-on' : 'grey grey--text text--darken-1'"
               rounded
               medium
        >
          {{label}} {{isFilterOn ? rating : ''}}
        </v-btn>
      </div>
      <v-row wrap
             class="d-md-none"
             justify="center"
      >
        <v-flex style="justify-content: space-between">
          <div class="text-center">
            <v-btn @click="showModal=true" class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>{{rating}}</v-btn>
          </div>
        </v-flex>
      </v-row>

      <v-dialog v-model="showModal" max-width="500px">
        <v-card>
          <v-card-title
                  class="korean headline grey lighten-2"
                  primary-title
          >
            {{this.label}}
          </v-card-title>
          <v-card-text>
            <v-row wrap style="height: 100px" align="center" justify="center">
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
    </div>
  </v-flex>


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
        this.rating = this.input;
        this.selected = true;
        this.onCallBack(this.input, true);
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

<style>

  .button-on {
    background-color: #FFCF57 !important;
    color: #000000 !important;
  }
  
  .filter-button {
    letter-spacing: -0.05rem;
  }

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