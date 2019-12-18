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
          <v-col cols="10" class="text-center">
            <v-row wrap justify="center" align="center">
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
      this.$http.get('../../api/reviews/best')
      .then((response) => {
              this.bestReviews = response.data;
          });

      this.$http.get('../../api/reviews/')
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

      var filter = ['harness', 'atmosphere', 'salary', 'learn', 'welfare'];

      for (var i=0; i<5; i++){
        if (this.filterSelected[i]){
          this.searchQuery[filter[i]] = this.filterRating[i]
        }
        if (this.searchQuery[filter[i]] === undefined) {
          this.searchQuery[filter[i]] = 0
        }
      }

      if(this.searchInput === '' || this.searchInput === undefined){
        this.$router.push({path: 'search/' + 'all' + '/harness=' + this.searchQuery.harness + '&atmosphere=' + this.searchQuery.atmosphere + '&salary=' + this.searchQuery.salary + '&learn=' + this.searchQuery.learn + '&welfare=' + this.searchQuery.welfare})
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
