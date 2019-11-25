<template>
  <v-app-bar
      app
      color="#FFCF57"
      flat
    >
      <v-toolbar-title>
        <router-link to="/" class="cracker">CRACKER</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-col cols="7">
        <v-row align="center">
          <SearchBar></SearchBar>
          <v-speed-dial
                  v-model="filter"
                  direction="bottom"
                  transition="slide-y-transition"
          >
            <template v-slot:activator>
              <v-btn v-model="filter" class="ml-5" small fab>
                <v-icon v-if="filter">mdi-close</v-icon>
                <v-icon v-else>mdi-filter-variant</v-icon>
              </v-btn>
            </template>
              <searchFilter v-for="index in 5" :key="index"
                            :rating.sync="filterRating[index-1]"
                            :label.sync="fiterLabel[index-1]"
              ></searchFilter>
          </v-speed-dial>


        </v-row>
      </v-col>
    <v-spacer></v-spacer>



    <v-btn class="english" text>Sign in</v-btn>
    <v-btn class="english" text>Sign up</v-btn>

    </v-app-bar>
</template>

<script>
  import SearchBar from "./SearchBar";
  import SearchFilter from "./SearchFilter";
  export default {
    name: "Toolbar",
      components: { SearchBar, SearchFilter },
      data() {
        return {
          filter: false,
          fiterLabel: ['업무 강도', '분위기', '급여', '배우는 것', '사내복지'],
          filterRating: [[0,5], [0,5], [0,5], [0,5], [0,5]]
        }
    }
  }
</script>

<style scoped>

  .cracker{
    color: black;
    text-decoration: none;
  }

</style>