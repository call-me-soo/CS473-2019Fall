<template>

  <div>
    <v-row wrap
           class="d-none d-md-block"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="dialog1=true" class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>업무 강도</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>분위기</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>급여</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>배우는 것</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>사내복지</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-row wrap
           class="d-md-none"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="dialog1=true" class="korean mr-1 grey lighten-2 grey--text text--darken-1" x-small rounded>업무 강도</v-btn>
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" rounded>분위기</v-btn>
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" rounded>급여</v-btn>
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" rounded>배우는 것</v-btn>
              <v-btn x-small class="korean grey lighten-2 grey--text text--darken-1" rounded>사내복지</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-dialog v-model="dialog1" max-width="500px">
      <v-card>
        <v-card-title
                class="korean headline grey lighten-2"
                primary-title
        >
          업무 강도
        </v-card-title>

        <v-card-text>
          <v-row wrap style="height: 150px" align="center" justify="center">
            <vue-slider
                    ref="slider"
                    v-model="value"
                    width="90%"
                    :adsorb="true"
                    :interval="1"
                    :data="range"
                    :marks="true"
                    :process-dragable="true"
                    :height="10"
                    :tooltip="'always'"
            ></vue-slider>
          </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>



</template>

<script>

  import VueSlider from 'vue-slider-component';

  export default {
    name: "SearchFilter",
    components: { VueSlider },
    data () {
      return {
        dialog1: false,
        value: [0,5],
        range: [0,1,2,3,4,5],

      }
    }
  }
</script>

<style>
  @import '~vue-slider-component/theme/default.css';

</style>