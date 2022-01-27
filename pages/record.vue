<template>
  <!-- メモ記録ページ -->

  <div class="font-serif px-4">
    <div class="text-center my-12 md:mt-32 md:mb-24">
      <input
        v-model="title"
        @input="isInput"
        type="text"
        name="タイトル"
        placeholder="書籍名"
        class="border-b-2 h-12 w-11/12 md:w-1/2 text-sm md:text-2xl"
      />
      <p class="text-red-400 text-sm md:text-base">
        {{ titleErrorMassage }}
      </p>
    </div>
    <div class="text-center m-auto">
      <textarea
        v-model="text"
        @input="isInput"
        name="メモ欄"
        placeholder="印象に残ったところをアウトプットしよう！"
        id="div"
        cols="30"
        rows="10"
        class="border-2 p-4 text-sm md:text-lg w-11/12 md:w-3/5 md:h-screen"
      ></textarea>
      <p class="text-red-400 text-sm md:text-base">
        {{ textErrorMassage }}
      </p>
    </div>
    <div class="my-12 md:mt-12 md:mb-20 text-center m-auto">
      <textarea
        v-model="todo"
        @input="isInput"
        name="TODOリスト"
        placeholder="TODOリスト"
        id="todo"
        cols="30"
        rows="10"
        class="border-2 p-4 h-28 text-sm md:text-lg w-11/12 md:w-3/5"
      ></textarea>
      <p class="text-red-400 text-sm md:text-base">
        {{ todoErrorMassage }}
      </p>
    </div>
    <div class="mb-12 text-center justify-center">
      <button
        class="
          text-center
          mx-14
          mb-12
          border-4 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
        "
        @click="save"
      >
        <p class="py-3 text-lg w-52 md:text-2xl">保存</p>
      </button>
      <button
        class="
          mx-14
          border-4 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
        "
      >
        <p class="py-3 text-lg w-52 md:text-2xl">メモ一覧</p>
      </button>
    </div>
    <!-- <div class="mt-12 mb-32 text-center">
      <p class="text-xl text-blue-500">保存しました。</p>
    </div> -->
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  data() {
    return {
      title: "",
      text: "",
      todo: "",
      titleErrorMassage: "",
      textErrorMassage: "",
      todoErrorMassage: "",
    };
  },
  methods: {
    async save() {
      if (this.title === "") {
        this.titleErrorMassage = "書籍名を入力してください";
      }
      if (this.text === "") {
        this.textErrorMassage = "メモを入力してください";
      }
      if (this.todo === "") {
        this.todoErrorMassage = "TODOリストを入力してください";
      }
      if (
        this.titleErrorMassage !== "" ||
        this.textErrorMassage !== "" ||
        this.todoErrorMassage !== ""
      ) {
        return;
      }
      //保存ボタンを押したときの処理
      await this.$firestore
        .collection("memos")
        .add({
          createdAt: new Date().getTime(),
          title: this.title,
          text: this.text,
          todo: this.todo,
          userId: this.$store.state.user.userId,
        })
        .then(() => {
          alert("保存に成功しました！");
        });
    },
    isInput() {
      this.titleErrorMassage = "";
      this.textErrorMassage = "";
      this.todoErrorMassage = "";
    },
  },
};
</script>