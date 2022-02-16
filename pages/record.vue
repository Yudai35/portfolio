<template>
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
    <!-- <div class="my-12 md:mt-12 md:mb-20 text-center m-auto">
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
    </div> -->

    <div class="mt-12 md:mt-20 mb-12 text-center justify-center">
      <button
        class="
          text-center
          mx-14
          mb-12
          border-4 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
          py-3
          text-lg
          w-52
          md:text-2xl
        "
        @click="save"
      >
        保存
      </button>
      <button
        class="
          mx-14
          border-4 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
          py-3
          text-lg
          w-52
          md:text-2xl
        "
      >
        <nuxt-link to="/recordlist">メモ一覧</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  async asyncData({ query }) {
    const id = query.id;
    console.log(id);
    return {
      id,
    };
  },
  async mounted() {
    if (this.id) {
      const memoRef = await this.$firestore
        .collection("memos")
        .doc(this.id)
        .get();
      this.memo = memoRef.data();
      this.title = this.memo.title;
      this.text = this.memo.text;
      this.todo = this.memo.todo;
    }
  },
  data() {
    return {
      id: "",
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
      if (this.titleErrorMassage !== "") {
        return;
      }
      if (this.id) {
        await this.$firestore
          .collection("memos")
          .doc(this.id)
          .update({
            createdAt: new Date().getTime(),
            title: this.title,
            text: this.text,
            todo: this.todo,
          })
          .then(() => {
            alert("メモを更新しました！");
            this.$router.push("/recordlist");
          });
      } else {
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
            this.$router.push("/recordlist");
          });
      }
    },
    isInput() {
      this.titleErrorMassage = "";
      this.textErrorMassage = "";
      this.todoErrorMassage = "";
    },
  },
};
</script>