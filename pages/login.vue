<template>
  <!-- ログインページ -->
  <div class="py-6 bg-gray-100 md: py-20">
    <div
      class="
        w-xl
        py-5
        my-auto
        text-center
        px-8
        md:text-center
        px-2
        pb-4
        my-24
        max-w-3xl
        m-auto
        bg-white
        font-serif
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
        Login
      </h2>
      <form @submit.prevent class="justify-center" novalidate>
        <input
          type="”email”"
          name="”email”"
          required="required"
          placeholder="E-mail"
          v-model="user.email"
          @input="isInput"
          class="text-base h-12 my-3 md:text-xl border-2 h-14 w-10/12 my-6"
        />
        <p class="text-red-400">{{ emailErrorMassage }}</p>
        <input
          type="”password”"
          name="”password”"
          placeholder="Password"
          v-model="user.password"
          @input="isInput"
          class="text-base h-12 my-3 md:text-xl border-2 h-14 w-10/12 my-4"
        />
        <p class="text-red-400">{{ passwordErrorMassage }}</p>
        <button
          @click="login"
          value="ログイン"
          class="
            text-base
            h-12
            my-3
            md:text-xl
            h-14
            w-10/12
            my-6
            bg-green-300
            text-center
          "
        >
          ログイン
        </button>
        <button
          @click="googleLogin"
          class="text-base h-12 my-3 md:text-xl h-14 w-10/12 my-6 bg-green-300"
        >
          Googleでログイン
        </button>
      </form>
      <div class="mt-6 mb-4 md:tracking-widest items-center mt-8 mb-4">
        <nuxt-link to="signup">
          <a class="text-base text-center md:text-xl text-blue-500"
            >ユーザー登録お済みでない方</a
          >
        </nuxt-link>
      </div>
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
          alert("ログインに成功しました");
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
