<template>

  <div>
    <v-row wrap
           class="d-none d-md-block"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="dialog=true" class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>{{rating.toString()}}</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-row wrap
           class="d-md-none"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="dialog=true" class="korean mr-1 grey lighten-2 grey--text text--darken-1" x-small rounded>업무 강도</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title
                class="korean headline grey lighten-2"
                primary-title
        >
          분위기
        </v-card-title>
        <v-card-text>
          <v-row wrap align="center" justify="center">
            <vue-slider
                    ref="slider"
                    v-model="rating"
                    width="90%"
                    :adsorb="true"
                    :interval="1"
                    :data="range"
                    :marks="true"
                    :process-dragable="true"
                    :height="5"
                    @change="onCallBack"
            ></vue-slider>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  color="red"
                  text
                  @click="cancel"
          >
            Cancel
          </v-btn>

          <v-btn
                  color="primary"
                  text
                  @click="confirm"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>

</template>

<script>
  import VueSlider from "vue-slider-component";

  export default {
    name: "SearchFilter",
    components: { VueSlider },
    props: {
      value: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        dialog: false,
        rating: [0,5],
        range: [0,1,2,3,4,5]

      }
    },
    methods: {
      onCallBack(value){
        this.$emit('update: value', value)
      }
    }
  }
</script>

<style>


</style>