<template>
    <v-app>
        <Toolbar ref="ToolBar"
        @keydown.enter.native="search"
        ></Toolbar>
        <v-content>
            <v-row wrap class="pt-5" justify="center" align="center" >
                    <v-col cols="5">
                        <v-row wrap align="center">
                            <div class="korean sub-title-large d-none d-md-inline-block">회원 가입</div>
                            <div class="korean sub-title-small d-md-none">회원 가입</div>
                        </v-row>
                    </v-col>
            </v-row>
            <v-row wrap justify="center" align="center">
                <v-col cols="5">
                    <v-form ref="signUpForm" lazy-validation>
                        <v-row><small class="alert">( * ) 항목은 필수입니다.</small></v-row>
                        <v-row><small class="alert"> {{ errormsg }} </small></v-row> 
                        <v-row>

                            <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="username"
                                :rules="[rules.required]"
                                label="User ID*"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="nickname"
                                label="Nickname"
                                hint="공백으로 제출하면 임의로 정해드립니다 :)"
                                persistent-hint
                            ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                            <v-text-field
                                v-model="password"
                                :rules="[rules.required]"
                                label="Password*"
                                type="password"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                            <v-text-field
                                v-model="passwordConfirmation"
                                :rules="[rules.required]"
                                label="Password Confirmation*"
                                type="password"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                            <v-select
                                v-model="major"
                                :items="['전산', '기계', '전자', '산디', '생화공', '신소재', '기경', '수학']"
                                :rules="[rules.required]"
                                label="major*"
                                required
                            ></v-select>
                            </v-col>

                        </v-row>
                        <v-row>

                            <v-col cols="12">
                                <v-btn
                                color="#FFCF57"
                                class="korean"
                                @click="confirmSignUp"
                                depressed
                                rounded
                                large
                                block
                                >가입하기
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
    name: "SignUp",
    components: { Toolbar },
    data() {
        return{
            signUpOpen: false,
            username:'',
            password:'',
            passwordConfirmation:'',
            nickname:'',
            major: null,
            rules: {
                required: v => !!v || '필수 입력 항목입니다.',
            },
            errormsg: ''
        }
    },
    methods: {
        getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        confirmSignUp() {
            if (this.nickname == '') {
                var name1 = ['빨간','다홍색','주황','노란','초록','파란','보라색','검정','황금','은빛','반짝이는','꾀죄죄한','구겨진','말끔한','깔끔한','줄무늬','점박이','체크무늬','형광색','귀여운','멋있는','엄청난','큰','작은','굉장한','놀라운','아담한','뻣뻣한'];
                var name2 = ['넥타이','수트','조끼','셔츠','모자','슬랙스','목도리','구두','양말','후드티','명함','양복','단추','가방','백팩','지갑','추리닝','선글라스','스카프','장갑','명찰','폰케이스','스커트','턱시도','보타이','멜빵','와이셔츠','청바지','와이드진'];
                this.nickname = name1[this.getRandomInt(0, name1.length)] + ' ' + name2[this.getRandomInt(0, name2.length)];
            }
            this.$http.post('../../api/users/', {
                username: this.username,
                password: this.password,
                passwordConfirmation: this.passwordConfirmation,
                major: this.major,
                nickname: this.nickname
            })
            .then((response)=>{
                console.log(response);
                this.$store.dispatch('LOGIN', {
                username: this.username,
                password: this.password
            })
            .then((response) => {
                console.log(response);
                this.$router.push('../../users');
            }, error => {
                console.log(error);
            })});
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

    .v-btn {
        letter-spacing: -0.02px;
    }

    .alert {
        color: red;
    }

</style>