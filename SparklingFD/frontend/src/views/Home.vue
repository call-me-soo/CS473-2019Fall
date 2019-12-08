<template>
  <v-app>
    <ToolBar @keydown.enter.native="search"></ToolBar>
    <v-content>
      <v-container
              fluid
              :style="{background :'#f5f5f5'}"
      >
        <logo id="logo"></logo>

        <v-row wrap
               id="main-title"
               justify="center"
               align="center"
        >
          <div style="text-align: center">
            <div class="english main-title-large d-none d-md-inline-block">Crack Your Internship with</div><div class="cracker main-title-large d-none d-md-inline-block"> CRACKER!</div>
            <div class="english main-title-small d-md-none">Crack Your Internship with</div><br><div class="cracker main-title-small d-md-none"> CRACKER!</div>
          </div>
        </v-row>

        <v-row class="mt-10" justify="center">
          <v-col class="pa-2" cols="8">
            <searchBar
                    :searchInput.sync="searchInput"
                    @keydown.enter.native="search"
            ></searchBar>
          </v-col>
        </v-row>

        <v-row wrap dense class="pb-5" justify="center">
          <div style="text-align: center">
            <searchFilter v-for="index in 5" :key="index"
                          :rating.sync="filterRating[index-1]"
                          :label.sync="filterLabel[index-1]"
                          :selected.sync="filterSelected[index-1]"
            ></searchFilter>
          </div>
        </v-row>

        <v-row justify="center" align="center" >
          <v-col cols="11">
            <div class="korean sub-title-large d-none d-md-inline-block">사랑받은 리뷰</div>
            <div class="korean sub-title-small d-md-none">사랑받은 리뷰</div>
          </v-col>
        </v-row>

        <ReviewCardSlick :bestReviews.sync="bestReviews"></ReviewCardSlick>

        <v-row justify="center" align="center" class="mt-10">
          <v-col cols="11">
            <div class="korean sub-title-large d-none d-md-inline-block">따끈따끈한 리뷰</div>
            <div class="korean sub-title-small d-md-none">따끈따끈 리뷰</div>
          </v-col>
        </v-row>

        <v-row wrap justify="center">
          <v-col cols="10">
            <v-row wrap>
              <reviewCardSmall v-for="review in recentReviews" :key="recentReviews.indexOf(review)"
                      :review="review"
              ></reviewCardSmall>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
  import ToolBar from "../components/Toolbar";
  import logo from "../components/Logo";
  import searchBar from "../components/SearchBar";
  import searchFilter from "../components/SearchFilter"
  import ReviewCardSlick from "../components/ReviewCardSlick";
  import reviewCardSmall from "../components/ReviewCardSmall";

  import "../assets/css/style.css";

export default {
  name: 'home',
  components: {ToolBar, ReviewCardSlick, logo, searchBar, searchFilter, reviewCardSmall },
  mounted() {
      this.$http.get('../../api/cards')
      .then((response) => {
              this.bestReviews = response.data;
          });

      this.$http.get('../../api/getReview')
          .then((response) => {
              this.recentReviews = response.data;
          });
  },
  data() {
        return {
            searchInput: '',
            bestReviews: [],
            recentReviews: [],
            filterLabel: ['업무 강도', '분위기', '급여', '배우는 것', '사내복지'],
            filterRating: [0,0,0,0,0],
            filterSelected: [false, false, false, false, false],
            searchQuery: {},
    }
  },
  methods: {
    search () {
      console.log(this.searchInput)
      if (this.filterSelected[0]) {
        this.searchQuery['harness'] = this.filterRating[0]
      }
      if(this.searchQuery.harness == undefined){
        this.searchQuery.harness = 0
      }
      if (this.filterSelected[1]) {
        this.searchQuery['atmosphere'] = this.filterRating[1]
      }
      if(this.searchQuery.atmosphere == undefined){
        this.searchQuery.atmosphere = 0
      }
      if (this.filterSelected[2]) {
        this.searchQuery['salary'] = this.filterRating[2]
      }
      if(this.searchQuery.salary == undefined){
        this.searchQuery.salary = 0
      }
      if (this.filterSelected[3]) {
        this.searchQuery['learn'] = this.filterRating[3]
      }
      if(this.searchQuery.learn == undefined){
        this.searchQuery.learn = 0
      }
      if (this.filterSelected[4]) {
        this.searchQuery['welfare'] = this.filterRating[4]
      }
      if(this.searchQuery.welfare == undefined){
        this.searchQuery.welfare = 0
      }
      if(this.searchInput == '' || this.searchInput == undefined){
        this.$router.push({path: 'search/' + 'aa' + '/harness=' + this.searchQuery.harness + '&atmosphere=' + this.searchQuery.atmosphere + '&salary=' + this.searchQuery.salary + '&learn=' + this.searchQuery.learn + '&welfare=' + this.searchQuery.welfare})
      }else {
        this.$router.push({path: 'search/' + this.searchInput + '/harness=' + this.searchQuery.harness + '&atmosphere=' + this.searchQuery.atmosphere + '&salary=' + this.searchQuery.salary + '&learn=' + this.searchQuery.learn + '&welfare=' + this.searchQuery.welfare})
      }
    }

  }
};
</script>

<style scoped>


  .main-title-large {
    display: inline;
    font-size: 20pt;
    margin-right: 10px;
  }

  .main-title-small {
    display: inline;
    font-size: 15pt;
  }

  #main-title {
    height: 15px;
  }

  .sub-title-large {
    font-size: 18pt;
    font-weight: bold;
    height: 60px;
  }

  .sub-title-small {
    font-size: 14pt;
    font-weight: bold;
    height: 30px;
  }


</style>
