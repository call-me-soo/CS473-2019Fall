<template>
  <v-app>
    <v-content>
      <toolBar></toolBar>
      <v-container
              fluid
              v-bind:style="{background :'#f0f0f0'}"
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
        <v-flex>
              <searchBar></searchBar>
              <searchFilter></searchFilter>
        </v-flex>


        <v-row justify="center" align="center" style="height: 70px">
          <v-col cols="11">
            <div class="korean sub-title-large">사랑받은 리뷰</div>
          </v-col>
        </v-row>

        <reviewCardBig></reviewCardBig>



      </v-container>
    </v-content>
  </v-app>
</template>


<script>

  import toolBar from "./components/Toolbar";
  import logo from "./components/Logo";
	import searchBar from "./components/SearchBar";
	import searchFilter from "./components/SearchFilter"
	import reviewCardBig from "./components/ReviewCardBig";

	import "./assets/css/style.css";

export default {
  name: 'home',
  components: {toolBar, logo, searchBar, searchFilter, reviewCardBig},
  data: () => ({

  }),
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
    font-size: 15pt;
    font-weight: bold;
  }


</style>
