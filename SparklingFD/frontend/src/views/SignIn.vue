<template>
    <v-app>
        <Toolbar ref="ToolBar"
        @keydown.enter.native="search"
        ></Toolbar>
        <v-content>
            <v-row wrap class="pt-5" justify="center" align="center" >
                    <v-col cols="5">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">로그인</div>
                            <div class="korean sub-title-small d-md-none">로그인</div>
                        </v-row>
                    </v-col>
            </v-row>
            <v-row wrap justify="center" align="center">
                <v-col cols="5">
                    <v-form ref="signInForm" lazy-validation>  
                        <v-row>

                            <v-col cols="12">
                                <v-text-field
                                    v-model="username"
                                    :rules="[rules.required]"
                                    label="username"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    v-model="password"
                                    :rules="[rules.required]"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>

                        </v-row>
                        <v-row>

                            <v-col cols="12">
                                <v-btn
                                color="#fafafa"
                                class="korean"
                                @click="signUpOpen"
                                depressed
                                small
                                block
                                >아이디가 없어요!
                                </v-btn>
                            </v-col>

                            <v-col cols="12">
                                <v-btn
                                color="#FFCF57"
                                class="korean"
                                @click="confirmSignIn"
                                depressed
                                rounded
                                large
                                block
                                >로그인
                                </v-btn>
                            </v-col>

                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-content>
    </v-app>              
</template>

<script>
import Toolbar from "../components/Toolbar";
export default {
    name: "SignIn",
    components: { Toolbar },
    data() {
        return{
            username:'',
            password:'',
            rules: {
                required: v => !!v || '필수 입력 항목입니다.',
            }
        }
    },
    methods: {
        signUpOpen () {
            this.$router.push('../../signup');
        },
        confirmSignIn() {
            this.$http.post('../../api/users/signin', {
                username: this.username,
                password: this.password
            })
            .then((response) => {
                console.log(this.$http.isAuthenticated);
                this.$router.go(-1);
                console.log(response);
            }, error => {
                console.log(error);
            });
        },
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

    .v-btn {
        letter-spacing: -0.02px;
    }

</style>