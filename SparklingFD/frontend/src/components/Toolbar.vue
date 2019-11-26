<template>
  <div>
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
            <SearchBar
                    :searchInput.sync="searchInput"
                    @keydown.enter.native="search"
            ></SearchBar>
            <v-btn @click="filterOpen=true" class="ml-5" small fab>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
        </v-row>
      </v-col>
    <v-spacer></v-spacer>



    <v-btn class="english" text>Sign in</v-btn>
    <v-btn class="english" text>Sign up</v-btn>

    </v-app-bar>

    <div v-show="filterOpen">
      <v-row wrap justify="center">
        <v-col cols="6" class="pa-0">
          <searchFilter
                  v-for="index in 5" :key="index"
                  :rating.sync="filterRating[index-1]"
                  :label.sync="filterLabel[index-1]"
                  :selected.sync="filterSelected[index-1]"
          ></searchFilter>
        </v-col>
      </v-row>


    </div>

  </div>


</template>

<script>
  import SearchBar from "./SearchBar";
  import SearchFilter from "./SearchFilter";
  export default {
    name: "Toolbar",
      components: { SearchBar, SearchFilter },
      data() {
        return {
          searchInput: '',
          filterOpen: false,
          filterLabel: ['업무 강도', '분위기', '급여', '배우는 것', '사내복지'],
          filterRating: [0,0,0,0,0],
          filterSelected: [false, false, false, false, false]
        }
    },
    methods: {
      search() {
        if (this.filterSelected[0]) {
          this.searchQuery['harness'] = this.filterRating[0]
        }
        if (this.filterSelected[1]) {
          this.searchQuery['atmosphere'] = this.filterRating[1]
        }
        if (this.filterSelected[2]) {
          this.searchQuery['salary'] = this.filterRating[2]
        }
        if (this.filterSelected[3]) {
          this.searchQuery['learn'] = this.filterRating[3]
        }
        if (this.filterSelected[4]) {
          this.searchQuery['welfare'] = this.filterRating[4]
        }

        if (this.searchInput == '') {
          this.$router.push({path: 'search/' + 'aa' + '/', query: this.searchQuery})

        } else {
          this.$router.push({path: 'search/' + this.searchInput + '/harness=' + this.searchQuery.harness + '&atmosphere=' + this.searchQuery.atmosphere + '&salary=' + this.searchQuery.salary + '&learn=' + this.searchQuery.learn + '&welfare=' + this.searchQuery.welfare})
        }
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