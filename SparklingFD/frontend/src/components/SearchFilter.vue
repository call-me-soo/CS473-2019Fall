<template>

  <v-flex class="d-inline">
    <div wrap
           class="d-none d-md-inline"
    >
      <v-btn @click="showModal=true"
             class="filterbutton korean mt-2 ml-1 mr-1 lighten-2"
             :class="isFilterOn ? 'button-on' : 'grey grey--text text--darken-1'"
             rounded
             medium
      >
        {{label}} {{isFilterOn ? rating.join('-') : ''}}
      </v-btn>
    </div>
    <v-row wrap
           class="d-md-none"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="showModal=true" class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>{{rating.toString()}}</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-dialog v-model="showModal" max-width="500px">
      <v-card>
        <v-card-title
                class="korean headline grey lighten-2"
                primary-title
        >
          분위기
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
        type: Array,
        required: true
      },

    },
    data () {
      return {
        showModal: false,
        input: [0, 5],
        range: [0, 1, 2, 3, 4, 5],
        isFilterOn: false
      }
    },
    methods: {
      onCallBack(rating){
        this.$emit('update: rating', rating);
      },
      confirmModal() {
        this.rating = this.input;
        this.onCallBack();
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
  
  .filterbutton {
    letter-spacing: -0.05rem;
  }

</style>