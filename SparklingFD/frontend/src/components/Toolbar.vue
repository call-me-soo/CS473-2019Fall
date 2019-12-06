<template>
  <div>
  <v-app-bar app color="#FFCF57" flat>
      <v-toolbar-title>
        <router-link to="/" class="cracker">CRACKER</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col cols="7" v-show="!isHome">
        <v-row align="center">
          <v-flex class="d-none d-md-flex">
            <v-text-field
                    class="search korean"
                    solo
                    flat
                    rounded
                    hide-details
                    label="회사명 또는 지역을 입력해주세요 :)"
                    background-color="white"
                    prepend-inner-icon="mdi-magnify"
                    @change="onCallBack"
            >
            </v-text-field>
          </v-flex>
            <v-btn @click="filterOpen=!filterOpen" class="ml-5" color="white" small fab depressed>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
        </v-row>
      </v-col>

    <v-spacer></v-spacer>

    <v-btn @click="usersOpen" class="english" text>Users</v-btn>
    <v-btn v-show="this.$http.isAuthenticated" @click="logout" class="english" text>Log Out</v-btn>
    <v-btn v-show="!this.$http.isAuthenticated" @click="signInOpen" class="english" text>Sign in</v-btn>
    <v-btn v-show="!this.$http.isAuthenticated" @click="signUpOpen" class="english" text>Sign up</v-btn>
    
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

// import SearchBar from "./SearchBar";
import searchFilter from "./SearchFilter";
import "../assets/css/style.css";
export default {
  name: "Toolbar",
  components: { searchFilter },
  created() {
    if (this.$route.path == '/') this.isHome = true;
    else this.isHome = false;
    // console.log(this.$route.params.userInput)
      this.$http.get('../../api/searchQuery/userinput?input='
        + this.$route.params.userInput + '&'
        + this.$route.params.query)
        .then((response) => {
          this.companyInfo = response.data;
      })
  },
  data() {
    return {
      isHome: false,
      searchInput: '',
      filterOpen: false,
      filterLabel: ['업무 강도', '분위기', '급여', '배우는 것', '사내복지'],
      filterRating: [0,0,0,0,0],
      filterSelected: [false, false, false, false, false],
      showFilter: false
    }
  },
  methods: {
    onCallBack(searchInput){
      this.$emit('update:searchInput', searchInput);
    },
    logout(){
      this.$http.get('../../logout');
    },
    usersOpen() {
      this.$router.push('../../users');
    },
    signInOpen(){
      this.$router.push('../../signin');
    },
    signUpOpen () {
      this.$router.push('../../signup');
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