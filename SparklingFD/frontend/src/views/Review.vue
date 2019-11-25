<template>
    <div>
        <v-row wrap class="pt-5" justify="center" align="center" >
            <v-col cols="9">
                <v-row wrap align="center">
                    <div class="korean sub-title-large d-none d-md-inline-block">리뷰 작성</div>
                    <div class="korean sub-title-small d-md-none">리뷰 작성</div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Review",
        mounted() {
            this.$http.get('../../api/getCompanyInfo/' + this.$route.params.id)
                .then((response) => {
                    this.companyInfo = response.data;
                })
        },
        computed: {
            param: function () {
                return this.$route.params;
            }
        },
        data() {
            return {
                companyInfo: {}
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