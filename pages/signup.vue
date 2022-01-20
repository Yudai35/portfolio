<template>
  <!-- 新規登録 -->
  <div class="py-6 bg-gray-100">
    <div
      class="
        w-xl
        py-6
        my-16
        mx-4
        text-center
        pb-4
        max-w-3xl
        md:m-auto
        bg-white
        font-serif
        md:my-20 md:px-8
      "
    >
      <h2
        class="
          text-3xl
          my-4
          border-b-2 border-green-300
          w-10/12
          pb-3
          pl-2
          m-auto
          text-left
        "
      >
        Sign up
      </h2>
      <form @submit.prevent class="" novalidate>
        <!--👇入力中はエラーメッセージを非表示にしている--->
        <input
          type="”email”"
          name="”email”"
          required="required"
          placeholder="E-mail"
          v-model="user.email"
          @input="isInput"
          class="text-base md:text-xl border-2 h-14 w-10/12 my-6 autofocus"
        />
        <p class="text-red-400">{{ emailErrorMassage }}</p>
        <input
          type="”password”"
          name="”passWord”"
          required="required"
          placeholder="Password"
          v-model="user.password"
          @input="isInput"
          class="text-base md:text-xl border-2 h-14 w-10/12 my-4"
        />
        <p class="text-red-400">{{ passwordErrorMassage }}</p>
        <button
          @click="register"
          class="
            text-base
            my-3
            md:text-xl
            h-14
            w-10/12
            bg-green-300
            text-center
          "
        >
          登録
        </button>
        <button
          @click="googleLogin"
          class="text-base my-3 md:text-xl h-14 w-10/12 bg-green-300"
        >
          Googleで登録
        </button>
      </form>
      <div class="my-4 items-center md:tracking-widest md:my-6">
        <nuxt-link to="login">
          <a class="text-base text-center md:text-xl text-blue-500"
            >登録済みの方</a
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
//https://note.com/aliz/n/nacc97fe7d019参照
export default {
  // computed: {
  //     user(){
  //         return this.$store.getters["user"];
  //     }
  // },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      emailErrorMassage: "",
      passwordErrorMassage: "",
      emailRegexp: /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i,
      passwordRegexp: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i,
    };
  },
  methods: {
    googleLogin() {
      this.$auth
        .signInWithPopup(new this.$firebase.auth.GoogleAuthProvider())
        .then(() => {
          alert("登録に成功しました");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        .catch((error) => {
          console.log(error);
          alert(
            "エラーが発生いたしました。間違い等がないか確認をし再度実施をお願いします"
          );
        });
    },
    register() {
      //emailにemailRegexpの正規表現の形ではないメールアドレスが入力されたら45行目が発火する
      if (!this.emailRegexp.test(this.user.email)) {
        this.emailErrorMassage =
          "このメールアドレスは無効です。正しく入力してください";
      }
      //passwordにpasswordRegexpの正規表現の形だはないパスワードが入力されたら49行目が発火する
      if (!this.passwordRegexp.test(this.user.password)) {
        this.passwordErrorMassage =
          "このパスワードは無効です。半角英数字を含んで8-20文字の範囲内で入力してください。";
      }
      //emailの入力欄に何も入力されていなかったら53行目が発火する
      if (this.user.email === "") {
        this.emailErrorMassage = "メールアドレスを入力してください";
      }
      //passwordの入力欄に何も入力されていなかったら57行目が発火する
      if (this.user.password === "") {
        this.passwordErrorMassage = "パスワードを入力してください";
      }
      //emailErrorMassage または passwordErrorMassage に何か当てはまっている時処理を返す
      if (this.emailErrorMassage !== "" || this.passwordErrorMassage !== "") {
        return;
      }
      //正常に登録できた時の処理
      this.$auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          alert("登録しました");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        //エラーが起きたときの処理
        .catch((error) => {
          console.log({ code: error.code, message: error.message });
          //👇 auth/invalid-emailの意味
          //Authに渡したメールアドレスが、メールアドレスの形をしていない場合に出るエラーです。 （例：email : aaaaa）
          if (error.code === "auth/invalid-email") {
            this.emailErrorMassage = "このメールアドレスは適切ではありません";
            //👇 auth/email-already-in-useの意味
            //メールアドレスが既に登録済みである場合に出るエラーです。
          } else if (error.code === "auth/email-already-in-use") {
            this.emailErrorMassage = "このメールアドレスは既に登録されています";
          } else {
            alert("エラーが発生いたしました。再度入力をお願いします。");
          }
        });
    },
    //👇入力中はエラーメッセージを非表示にしている
    isInput() {
      this.emailErrorMassage = "";
      this.passwordErrorMassage = "";
    },
  },
};
</script> 