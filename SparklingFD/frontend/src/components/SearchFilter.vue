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


  </div>

</template>

<script>



  export default {
    name: "SearchFilter",
    components: {  },
    data () {
      return {
        dialog1: false,

      }
    }
  }
</script>

<style>


  /* process style */
  .vue-slider-process {
    background-color: #FFCF57;
    border-radius: 15px;
    transition: background-color 0.3s;
  }
  .vue-slider:hover .vue-slider-process {
    background-color: #FFCF57;
  }

  /* mark style */
  .vue-slider-mark-step {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #e8e8e8;
    background-color: #ffffff;
  }
  .vue-slider-mark-step-active {
    box-shadow: 0 0 0 2px #FFCF57;
  }
  .vue-slider:hover .vue-slider-mark-step-active {
    box-shadow: 0 0 0 2px #FFCF57;
  }

  .vue-slider-dot:hover .vue-slider-dot-tooltip, .vue-slider-dot-tooltip-show {
    opacity: 1;
    visibility: visible;
  }
  .vue-slider-dot:hover .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner, .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
     transform: scale(1);
   }

  .vue-slider-dot-tooltip-inner {
    font-size: 14px;
    white-space: nowrap;
    padding: 6px 8px;
    color: #fff;
    border-radius: 5px;
    border-color: rgba(0, 0, 0, 0.75);
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transform: scale(0.9);
    transition: transform 0.3s;
  }

</style>