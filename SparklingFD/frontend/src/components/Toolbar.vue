<template>
  <v-app-bar
      app
      color="#FFCF57"
      flat
    >
      <v-toolbar-title class="cracker">CRACKER</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-col cols="7">
        <v-row align="baseline">
          <SearchBar></SearchBar>
          <v-btn class="ml-5" small fab><v-icon>mdi-filter-variant</v-icon></v-btn>
        </v-row>
      </v-col>
    <v-spacer></v-spacer>



    <v-btn class="english" text>Sign in</v-btn>
    <v-btn class="english" text>Sign up</v-btn>

    </v-app-bar>
</template>

<script>
  import SearchBar from "./SearchBar";
	export default {
		name: "Toolbar",
        components: { SearchBar }
	}
</script>

<style scoped>

</style>