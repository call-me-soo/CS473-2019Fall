<template>
    <v-app>
        <v-content>
            <Toolbar></Toolbar>
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
                                    style="width: 30px"
                                    :items="filters"
                                    label="정렬"
                                    target="#dropdown-example"
                                    color="#FFCF57"
                                    v-model="sortFilter"
                                    @change="toggleSort"
                            ></v-overflow-btn>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row wrap justify="center">
                    <v-col cols="9">
                        <CompanyCard v-for="company in sortedCompany"
                                     :key="sortedCompany.indexOf(company)"
                                     :companyInfo.sync="company"
                                     >

                        </CompanyCard>
                        <h1>{{company}}</h1>
                        <h1>{{sortedCompany}}</h1>
                        <h1>{{companyInfo}}</h1>
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
            this.load();
            this.sortFilter = '전체 평점';
        },
        methods: {
            load: function(){
                this.$http.get('../../api/searchQuery/userinput?input='
                    + this.$route.params.userInput + '&'
                    + this.$route.params.query)
                    .then((response) => {
                        this.companyInfo = response.data;
                    });
            },
            toggleSort(){
                if (this.sortFilter === '전체 평점'){
                    this.sortedCompany = this.companyInfo.sort((b, a) => {
                        if (a['aggregate'] === b['aggregate']) {
                            return a['name'] - b['name']
                        } else {
                            return a['aggregate'] - b['aggregate']
                        }
                    })
                } else {
                    var index = this.filters.indexOf(this.sortFilter);
                    this.sortedCompany = this.companyInfo.sort((b, a) => {
                        if (a.star[index-1] === b.star[index-1]) {
                            return a['name'] - b['name']
                        } else {
                            return a.star[index-1] - b.star[index-1]
                        }
                    })
                }


            }

        },
        data () {
            return {
                filters: ['전체 평점', '업무 강도', '분위기', '급여', '배우는 것', '사내 복지'],
                sortFilter: '',
                companyInfo: [],
                sortedCompany: []

            }
        },
        watch: {
            '$route.params': function() {
                this.load()
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

</style>