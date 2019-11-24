<template>
  <v-flex class="flex-grow-1">
    <v-flex class="d-none d-md-flex">
      <v-text-field
              class="search korean"
              solo-inverted
              flat
              rounded
              hide-details
              label="회사명 또는 지역을 입력해주세요 :)"
              background-color="white"
              prepend-inner-icon="mdi-magnify"
      >
      </v-text-field>
    </v-flex>
    <v-flex class="d-md-none">
      <v-text-field
              class="search korean"
              solo-inverted
              flat
              rounded
              hide-details
              label="회사명 또는 지역"
              background-color="white"
              prepend-inner-icon="mdi-magnify"
      >
      </v-text-field>
    </v-flex>
  </v-flex>

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

.search {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08) !important;
}

</style>