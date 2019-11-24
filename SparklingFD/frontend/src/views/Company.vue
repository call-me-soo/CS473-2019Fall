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
                                    class=""
                                    style="width: 30px"
                                    :items="filters"
                                    label="필터"
                                    target="#dropdown-example"
                            ></v-overflow-btn>
                        </v-row>
                    </v-col>
                </v-row>


            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Toolbar from "../components/Toolbar";
    export default {
        name: "Company",
        components: { Toolbar }
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