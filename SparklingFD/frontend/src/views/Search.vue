<template>
    <v-app>
        <v-content>
            <Toolbar ref="toolbar"
                     @keydown.enter.native="search"
            ></Toolbar>
            <v-container>
                <v-row wrap class="pt-5" justify="center" align="center" >
                    <v-col cols="9">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">검색 결과</div>
                            <div class="korean sub-title-small d-md-none">검색 결과</div>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-overflow-btn
                                    class=""
                                    style="width: 30px"
                                    :items="filters"
                                    label="필터"
                                    target="#dropdown-example"
                                    color="#FFCF57"
                            ></v-overflow-btn>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row wrap justify="center">
                    <v-col cols="9">
                        <CompanyCard v-for="company in companyInfo"
                                     :key="companyInfo.indexOf(company)"
                                     :companyInfo.sync="company"
                                     >
                            
                        </CompanyCard>
                        
                    </v-col>
                </v-row>
            </v-container>
        </v-content>


    </v-app>
</template>

<script>
    import Toolbar from "../components/Toolbar";
    import CompanyCard from "../components/CompanyCard";

    export default {
        name: "Search",
        components: {Toolbar, CompanyCard },
        created() {
            console.log(this.$route.params.userInput)
            this.$http.get('../../api/searchQuery/userinput?input='
                + this.$route.params.userInput + '&'
                + this.$route.params.query)
                .then((response) => {
                    this.companyInfo = response.data;
                    console.log(this.companyInfo);
                })
        },
        data () {
            return {
                filters: ['전체 평점', '업무 강도', '분위기', '급여', '배우는 것', '사내 복지'],
                companyInfo: [],
            }
        },
        methods: {
            search() {
            }
        }
    }
</script>

<style scoped>

    .sub-title-large {
        font-size: 18pt;
        font-weight: bold;
        height: 50px;
    }

    .sub-title-small {
        font-size: 14pt;
        font-weight: bold;
        height: 30px;
    }