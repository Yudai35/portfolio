<template>
  <div class="py-6 bg-gray-100 md:py-8">
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
        Login
      </h2>

      <button
        @click="guestsLogin"
        class="
          text-base
          my-8
          md:text-xl
          h-16
          w-10/12
          bg-green-400
          hover:bg-green-500
          duration-1000
        "
      >
        ゲストログイン
      </button>

      <form @submit.prevent class="justify-center" novalidate>
        <input
          type="”email”"
          name="”email”"
          required="required"
          placeholder="E-mail"
          v-model="user.email"
          @input="isInput"
          class="text-base my-3 md:text-xl border-2 h-14 w-10/12"
        />
        <p class="text-red-400">{{ emailErrorMassage }}</p>
        <input
          type="”password”"
          name="”password”"
          placeholder="Password"
          v-model="user.password"
          @input="isInput"
          class="text-base my-3 md:text-xl border-2 h-14 w-10/12"
        />
        <p class="text-red-400 text-sm md:text-base">
          {{ passwordErrorMassage }}
        </p>
        <button
          @click="login"
          value="ログイン"
          class="
            text-base
            my-3
            md:text-xl
            h-14
            w-10/12
            bg-green-300
            hover:bg-green-200
            duration-1000
            text-center
          "
        >
          ログイン
        </button>
        <button
          @click="googleLogin"
          class="
            text-base
            my-3
            md:text-xl
            h-14
            w-10/12
            bg-green-300
            hover:bg-green-200
            duration-1000
          "
        >
          Googleでログイン
        </button>
      </form>
      <div class="my-4 items-center md:tracking-widest md:my-6">
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
    guestsLogin() {
      this.$auth
        .signInAnonymously()
        .then(() => {
          alert("ログイン成功しました！");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        .catch((error) => {
          console.log(error);
          alert("ログインに失敗しました");
        });
    },
    isInput() {
      this.emailErrorMassage = "";
      this.passwordErrorMassage = "";
    },
  },
};
</script>
