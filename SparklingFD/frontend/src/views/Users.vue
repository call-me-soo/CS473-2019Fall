<template>
    <v-app>
        <Toolbar ref="ToolBar"
        @keydown.enter.native="search"
        ></Toolbar>
        <v-content>
            <v-row wrap class="pt-5 justify-center" align="center" >
                    <v-col cols="5">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">이 플랫폼을 이용하고 있는 사람들   ٩( ᐛ )و</div>
                            <div class="korean sub-title-small d-md-none">이 플랫폼을 이용하고 있는 사람들  ٩( ᐛ )و</div>
                        </v-row>
                    </v-col>
            </v-row>
            <v-row wrap class="justify-center" align="center">
                <v-col cols="5">
                    <v-btn
                        v-for="user in (users.length > 0 ? users : placeholder)" 
                        :key="users.indexOf(user)"
                        rounded
                        class="grey lighten-2"
                        depressed
                        style="margin: 3px; letter-spacing: -0.05px"
                    >
                    {{user.nickname}}
                    </v-btn>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
import Toolbar from "../components/Toolbar";
export default {
    name: "Users",
    components: { Toolbar },
    created() {
        this.$http.get('../../api/users')
        .then((response) => {
            this.users = response.data;
        })
    },
    data() {
        return{
            placeholder: [{id: 1}],
            users: []
        }
    },
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