<template>

  <v-content>
    <v-row wrap
           justify="center"
           class="d-none d-md-flex"
    >
      <v-col cols="8" class="pa-1 pb-3" id="search-bar" align="center">
        <v-text-field
                class="korean pb-3"
                solo-inverted
                clearlable
                rounded
                hide-details
                label="회사명 또는 지역을 입력해주세요 :)"
                background-color="white"
                prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row wrap
           justify="center"
           class="d-md-none"
    >
      <v-col cols="12" id="search-bar" align="center">
        <v-text-field
                class="korean"
                solo-inverted
                clearlable
                rounded
                hide-details
                label="회사명 또는 지역"
                background-color="white"
                prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-content>


</template>

<script>


  export default {
		name: "SearchBar",
    data() {
			return {

			}
		}
	}



</script>

<style scoped>

  #search-bar {
    align-items: center;

  }



  .card {
    display: flex;
    min-width: 100%;
    min-height: 200px;
    overflow-x: auto;
  }



</style>