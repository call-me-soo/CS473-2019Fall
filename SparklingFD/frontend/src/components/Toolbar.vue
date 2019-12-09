<template>
  <div>
  <v-app-bar app color="#FFCF57" flat>
      <v-toolbar-title>
        <router-link to="/" class="cracker">CRACKER</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col cols="7" v-show="!isHome">
        <v-row align="center">
          <searchBar
                  :searchInput.sync="searchInput"
                  @keydown.enter.native="search"
          ></searchBar>
            <v-btn @click="filterOpen=!filterOpen" class="ml-5" color="white" small fab depressed>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
        </v-row>
      </v-col>

    <v-spacer></v-spacer>

    <v-btn v-show="isAuthenticated" text style="letter-spacing: -0.05px">안녕, '{{nickname}}'님!</v-btn>
    <v-btn v-show="isAuthenticated" @click="logout" class="english" text>Log Out</v-btn>
    <v-btn v-show="!isAuthenticated" @click="signInOpen" class="english" text>Sign in</v-btn>
    <v-btn v-show="!isAuthenticated" @click="signUpOpen" class="english" text>Sign up</v-btn>
    <v-btn @click="usersOpen" class="english" text>Users</v-btn>
    
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
import searchFilter from "./SearchFilter";
import "../assets/css/style.css";
export default {
  name: "Toolbar",
  components: { searchFilter, SearchBar },
  created() {
    if (this.$route.path == '/') this.isHome = true;
    else this.isHome = false;
    
    // console.log(this.$route.params.userInput)
    this.$http.get('../../api/searchQuery/userinput?input='
      + this.$route.params.userInput + '&'
      + this.$route.params.query)
      .then((response) => {
        this.companyInfo = response.data;
    });
  },
  computed: {
    // only show when v-show="isAuthenticated"
    isAuthenticated() {
      if(this.$store.state._id){
        return true
      }
      return false
    },

    // reference as {{ nickname }}
    nickname() {
      return this.$store.state.nickname;
    },

    // reference as {{ major }}
    major() {
      return this.$store.state.major;
    }
    
  },
  data() {
    return {
      isHome: false,
      searchInput: '',
      filterOpen: false,
      filterLabel: ['업무 강도', '분위기', '급여', '배우는 것', '사내복지'],
      filterRating: [0,0,0,0,0],
      filterSelected: [false, false, false, false, false],
      showFilter: false,
      searchQuery: {},
    }
  },
  methods: {
    onCallBack(searchInput){
      this.$emit('update:searchInput', searchInput);
    },
    logout(){
      this.$store.dispatch('LOGOUT')
    },
    usersOpen() {
      this.$router.push('../../users');
    },
    signInOpen(){
      this.$router.push('../../signin');
    },
    signUpOpen () {
      this.$router.push('../../signup');
    },
    search () {

      var filter = ['harness', 'atmosphere', 'salary', 'learn', 'welfare'];

      for (var i=0; i<5; i++){
        if (this.filterSelected[i]){
          this.searchQuery[filter[i]] = this.filterRating[i]
        }
        if (this.searchQuery[filter[i]] === undefined) {
          this.searchQuery[filter[i]] = 0
        }
      }

      if (this.searchInput === '' || this.searchInput === undefined) {
        this.$router.push({path: 'search/' + 'all' + '/harness=' + this.searchQuery.harness + '&atmosphere=' + this.searchQuery.atmosphere + '&salary=' + this.searchQuery.salary + '&learn=' + this.searchQuery.learn + '&welfare=' + this.searchQuery.welfare})
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