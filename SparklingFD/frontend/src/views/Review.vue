<template>
    <div>
        parameter: {{param}}
    </div>

</template>

<script>
    export default {
        name: "Review",
        mounted() {
            this.$http.get('api/getCompanyInfo/' + this.$route.params.id)
                .then((response) => {
                    this.companyInfo = response.data;
            })
        },
        computed: {
            param: function () {
                return this.$route.params;
            }
        }
    }
</script>

<style scoped>

</style>