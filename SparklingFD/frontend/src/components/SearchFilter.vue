<template>

  <div>
    <v-row wrap
         justify="center"
    >
      <v-flex class="d-none d-md-block" style="justify-content: space-between">
            <div class="text-center">
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>업무 강도</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>분위기</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>급여</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>배우는 것</v-btn>
              <v-btn class="korean ma-2 grey lighten-2 grey--text text--darken-1" rounded>사내복지</v-btn>
            </div>
      </v-flex>
    </v-row>

    <v-row wrap
           justify="center"
    >
      <v-flex class="d-md-none" style="justify-content: space-between">
            <div class="text-center">
              <v-btn x-small class="korean mr-1 grey lighten-2 grey--text text--darken-1" rounded>업무 강도</v-btn>
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
		name: "SearchFilter"
	}
</script>

<style scoped>

</style>