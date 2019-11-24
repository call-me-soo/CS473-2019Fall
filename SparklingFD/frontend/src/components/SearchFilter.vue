<template>

  <div>
    <v-row wrap
           class="d-none d-md-block"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="dialog1=true" class="filterbutton korean mt-2 ml-1 mr-1 grey lighten-2 grey--text text--darken-1" depressed rounded>업무 강도</v-btn>
              <v-btn class="filterbutton korean mt-2 ml-1 mr-1 grey lighten-2 grey--text text--darken-1" depressed rounded>분위기</v-btn>
              <v-btn class="filterbutton korean mt-2 ml-1 mr-1 grey lighten-2 grey--text text--darken-1" depressed rounded>급여</v-btn>
              <v-btn class="filterbutton korean mt-2 ml-1 mr-1 grey lighten-2 grey--text text--darken-1" depressed rounded>배우는 것</v-btn>
              <v-btn class="filterbutton korean mt-2 ml-1 mr-1 grey lighten-2 grey--text text--darken-1" depressed rounded>사내복지</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-row wrap
           class="d-md-none"
           justify="center"
    >
      <v-flex style="justify-content: space-between">
            <div class="text-center">
              <v-btn @click="dialog1=true" class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>업무 강도</v-btn>
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>분위기</v-btn>
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>급여</v-btn>
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" small depressed rounded>배우는 것</v-btn>
              <v-btn x-small class="korean grey lighten-2 grey--text text--darken-1" small depressed rounded>사내복지</v-btn>
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

  .filterbutton {
    letter-spacing: -0.05rem;
  }

</style>