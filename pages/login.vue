<template>
  <!-- ログインページ -->
  <div
    class="text-center px-2 pb-4 my-24 max-w-xl m-auto bg-gray-200 font-serif"
  >
    <h2
      class="
        text-2xl
        my-10
        border-b-2 border-green-300
        w-10/12
        pt-6
        pb-3
        pl-3
        m-auto
        text-left
      "
    >
      Login
    </h2>
    <form @submit.prevent class="" novalidate>
      <input
        type="”email”"
        name="”email”"
        required="required"
        placeholder="E-mail"
        v-model="user.email"
        @input="isInput"
        class="border-2 h-12 w-10/12 mb-5"
      />
      <p class="text-red-400">{{ emailErrorMassage }}</p>
      <input
        type="”password”"
        name="”password”"
        placeholder="password"
        v-model="user.password"
        @input="isInput"
        class="border-2 h-12 w-10/12 mb-5"
      />
      <p class="text-red-400">{{ passwordErrorMassage }}</p>
      <button
        @click="login"
        value="ログイン"
        class="h-12 w-10/12 my-4 bg-green-300 text-center"
      >
        ログイン
      </button>
      <button @click="googleLogin" class="h-12 w-10/12 my-4 bg-green-300">
        Googleでログイン
      </button>
    </form>
    <div class="tracking-widest items-center my-4">
      <a href="/singup" class="h-12 text-blue-500"
        >ユーザー登録お済みでない方</a
      >
    </div>
  </div>
</template>

<script>
export default {
  // computed: {
  //     user(){
  //         return this.$store.getterts["user"];
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
          alert("エラーが発生いたしました。再度入力をお願いします");
        });
    },
    login() {
      if (this.user.email === "") {
        this.emailErrorMassage = "メールアドレスを入力してください";
      }
      if (this.user.password === "") {
        this.passwordErrorMassage = "パスワードを入力してください";
      }
      if (this.emailErrorMassage !== "" || this.passwordErrorMassage !== "") {
        return;
      }
      this.$auth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          alert("ログイン成功しました！");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        .catch((error) => {
          console.log(error);
          alert("メールアドレスもしくはパスワードが異なります");
        });
    },
    isInput() {
      this.emailErrorMassage = "";
      this.passwordErrorMassage = "";
    },
  },
};
</script>
