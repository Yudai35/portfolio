<template>
  <!-- お問い合わせページ -->
  <!-- 未レスポンシブ -->

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
        お問い合わせ
      </h2>
      <form @submit.prevent class="justify-center" novalidate>
        <input
          type="”text”"
          name="”名前”"
          placeholder="名前"
          v-model="form.name"
          @focus="isInput"
          @blur="isValidName"
          class="text-base h-12 my-3 md:text-xl border-2 h-14 w-10/12 my-6"
          autofocus
        />
        <p class="text-red-400">{{ error.nameMassage }}</p>
        <input
          type="”text”"
          name="”メールアドレス”"
          placeholder="メールアドレス"
          v-model="form.email"
          @focus="isInput"
          @blur="isValidEmail"
          class="text-base h-12 my-3 md:text-xl border-2 h-14 w-10/12 my-4"
        />
        <p class="text-red-400">{{ error.emailMassage }}</p>
        <textarea
          type="”text”"
          name="”お問い合わせ内容”"
          placeholder="お問い合わせ内容"
          cols="40"
          rows="4"
          v-model="form.content"
          @focus="isInput"
          @blur="isValidContent"
          class="text-base my-3 md:text-xl border-2 h-48 w-10/12 pt-2 my-4"
        ></textarea>
        <p class="text-red-400">{{ error.contentMassage }}</p>
        <div>
          <button
            type="submit"
            @click="sendMail"
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
            送信
          </button>
        </div>
        <div class="py-3">
          <a href="" class="h-12 my-4 text-blue-500"
            >お問い合わせありがとうございました。</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  data: function () {
    return {
      form: {
        name: "",
        email: "",
        content: "",
      },
      error: {
        nameMassage: "",
        emailMassage: "",
        contentMassage: "",
      },
      nameRegexp: /^[a-z\dぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]{3,20}$/i,
      emailRegexp: /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i,
      contentRegexp: /^[a-z\dぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]{10,1000}$/i,
    };
  },
  methods: {
    //sendMail 任意？強制？
    async sendMail() {
      const sendContents = await this.$firebase
        .app()
        //GCP東京リージョンを使用
        .functions("asia-northeast1")
        //???
        .httpsCallable("sendMail");
      sendContents({
        name: this.form.name,
        email: this.form.email,
        content: this.form.content,
      })
        //正常
        //res??  status??
        .then((res) => {
          if (res.data.status === 200) {
            alert("メールの送信が完了しました。");
            console.log(res.data);
            this.$router.push("/");
            //上記通りいかなかった場合
          } else {
            alert(
              "メールの送信に失敗しました。恐れ入りますが再度お試しください。"
            );
            console.log(res);
          }
        })
        .catch((error) => {
          console.log(error.name);
        });
    },
    //入力中はエラーメッセージ非表示
    isInput() {
      this.error.nameMassage = "";
      this.error.emailMassage = "";
      this.error.contentMassage = "";
    },
    isValidName() {
      //form.nameにnameRegexpの形通り入力されていない場合
      if (!this.nameRegexp.test(this.form.name)) {
        this.error.nameMassage = "3-20文字の範囲内で入力してください。";
      }
      //from.nameが空の場合
      if (this.form.name === "") {
        this.error.nameMassage = "お名前を入力してください。";
      } else {
        return;
      }
    },
    isValidEmail() {
      //form.emailがemailRegexpの形通り入力されていない場合
      if (!this.emailRegexp.test(this.form.email)) {
        this.error.emailMassage =
          "このメールアドレスは無効です。正しく入力してください。";
      }
      //from.emailが空の場合
      if (this.form.email === "") {
        this.error.emailMassage = "メールアドレスを入力してください。";
      } else {
        return;
      }
    },
    //form.contentがcontentRegexpの形通り入力されていない場合
    isValidContent() {
      if (!this.contentRegexp.test(this.form.content)) {
        this.error.contentMassage = "10-1000文字の範囲内で入力してください。";
      }
      //form.contentが空の場合
      if (this.form.content === "") {
        this.error.contentMassage = "お問い合わせ内容を入力してください。";
      } else {
        return;
      }
    },
  },
};
</script>