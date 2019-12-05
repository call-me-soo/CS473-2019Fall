<template>
  <div>
  <v-app-bar app color="#FFCF57" flat>
      <v-toolbar-title>
        <router-link to="/" class="cracker">CRACKER</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col cols="7" v-show="!isHome">
        <v-row align="center">
          <v-flex class="d-none d-md-flex">
            <v-text-field
                    class="search korean"
                    solo
                    flat
                    rounded
                    hide-details
                    label="회사명 또는 지역을 입력해주세요 :)"
                    background-color="white"
                    prepend-inner-icon="mdi-magnify"
                    @change="onCallBack"
            >
            </v-text-field>
          </v-flex>
            <v-btn @click="filterOpen=!filterOpen" class="ml-5" color="white" small fab depressed>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
        </v-row>
      </v-col>

    <v-spacer></v-spacer>

    <v-btn v-show="isAuthenticated" @click="isAuthenticated=false" class="english" text>Log Out</v-btn>

    <v-btn v-show="!isAuthenticated" @click="signInOpen=true" class="english" text>Sign in</v-btn>
    <v-dialog v-model="signInOpen" max-width="600px">
      <v-form ref="signInForm" lazy-validation>
        <v-card>
          <v-card-title class="korean headline grey lighten-2" primary-title>
            <span>로그인</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.emailForm]"
                    label="Email"
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
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-btn
                  color="white"
                  class="korean"
                  @click="signInOpen=false; signUpOpen=true;"
                  depressed
                  small
                  block
                >아이디가 없어요!
                </v-btn>
              </v-col>
              <v-col cols="12">
                <!-- <v-btn
                  color="#FFCF57"
                  class="korean"
                  @click="signInOpen=false"
                  depressed
                  rounded
                  large
                >취소
                </v-btn> -->
                <v-btn
                  color="#FFCF57"
                  class="korean"
                  :disabled="!valid"
                  @click="confirmSignIn"
                  depressed
                  rounded
                  large
                  block
                >로그인하기
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>

    <v-btn v-show="!isAuthenticated" @click="signUpOpen=true" class="english" text>Sign up</v-btn>
    <v-dialog v-model="signUpOpen" max-width="600px">
      <v-form ref="signUpForm" lazy-validation>
        <v-card>
          <v-card-title class="korean headline grey lighten-2" primary-title>
            <span>회원 가입</span>
          </v-card-title>
          <v-card-text>
            <small>*항목은 필수입니다.</small>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required,rules.emailForm]"
                    label="Email*"
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
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="major"
                    :items="['전산과', '기계과', '전자과', '산디과', '기타']"
                    :rules="[rules.required]"
                    label="Major*"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-btn
                  color="white"
                  class="korean"
                  @click="signUpOpen=false; signInOpen=true;"
                  block
                  depressed
                  rounded
                  small
                >아이디가 이미 있어요!
                </v-btn>
              </v-col>
              <v-col cols="12">
                <!-- <v-btn
                  color="#FFCF57"
                  class="korean"
                  @click="signUpOpen=false"
                  depressed
                  rounded
                  large
                >취소
                </v-btn> -->
                <v-btn
                  color="#FFCF57"
                  class="korean"
                  :disabled="!valid"
                  @click="confirmSignUp"
                  depressed
                  rounded
                  large
                  block
                >가입하기
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>

    </v-app-bar>

    <div v-show="filterOpen">
      <v-row wrap justify="center">
        <v-col cols="6" class="pa-0">
          <searchFilter
            v-for="index in 5" :key="index"
            :rating.sync="filterRating[index-1]"
            :label.sync="filterLabel[index-1]"
            :selected.sync="filterSelected[index-1]"
          ></searchFilter>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

// import SearchBar from "./SearchBar";
import searchFilter from "./SearchFilter";
import "../assets/css/style.css";
export default {
  name: "Toolbar",
  components: { searchFilter },
  created() {
    if (this.$route.path == '/') this.isHome = true;
    else this.isHome = false;
    // console.log(this.$route.params.userInput)
      this.$http.get('../../api/searchQuery/userinput?input='
        + this.$route.params.userInput + '&'
        + this.$route.params.query)
        .then((response) => {
          this.companyInfo = response.data;
      })
  },
  data() {
    return {
      isHome: false,
      searchInput: '',
      filterOpen: false,
      filterLabel: ['업무 강도', '분위기', '급여', '배우는 것', '사내복지'],
      filterRating: [0,0,0,0,0],
      filterSelected: [false, false, false, false, false],
      showFilter: false,

      isAuthenticated: false,
      signInOpen: false,
      signUpOpen: false,
      valid: true,
      email:'',
      password:'',
      nickname:'',
      major: null,
      rules: {
        required: v => !!v || '필수 입력 항목입니다.',
        emailForm: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '이메일 형식을 올바르게 입력해주세요.'
      }
    }
  },
  methods: {
    onCallBack(searchInput){
      this.$emit('update:searchInput', searchInput);
    },

    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    confirmSignIn() {
      // if (this.$refs.signInForm.validate()) {
        this.$http.get('../../api/users/', {
          userid: this.email,
          pw: this.pw
        })
        .then((response) => {
          this.signInOpen = false;
          this.isAuthenticated = true;
          console.log(response);
        }, error => {
          console.log(error);
        });
      // }
    },
    confirmSignUp() {
      // if (this.$refs.singUpForm.validate()) {
        this.signInOpen = false;
        if (this.nickname == '') {
          var name1 = ['빨간','다홍색','주황','노란','초록','파란','보라색','검정','황금','은빛','반짝이는','꾀죄죄한','구겨진','말끔한','깔끔한','줄무늬','점박이','체크무늬','형광색','귀여운','멋있는','엄청난','큰','작은','굉장한','놀라운','아담한','뻣뻣한'];
          var name2 = ['넥타이','수트','조끼','셔츠','모자','슬랙스','목도리','구두','양말','후드티','명함','양복','단추','가방','백팩','지갑','추리닝','선글라스','스카프','장갑','명찰','폰케이스','스커트','턱시도','보타이','멜빵','와이셔츠','청바지','와이드진'];
          this.nickname = name1[this.getRandomInt(0, name1.length)] + ' ' + name2[this.getRandomInt(0, name2.length)];
        }
        this.$http.post('../../api/users/add', {
          userid: this.email,
          pw: this.password,
          major: this.major,
          nickname: this.nickname
        })
        .then((response) => {
          this.isAuthenticated=true;
          console.log(response);
        }, error => {
          console.log(error);
        });
      // }
    }
  }
}
</script>

<style scoped>

.cracker{
  color: black;
  text-decoration: none;
}

.v-btn {
  letter-spacing: -0.02px;
}

</style>