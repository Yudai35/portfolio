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
    <div class="mt-12 mb-6 md:mt-20 md:mb-12 text-center">
      <input
        class="
          border-4
          duration-1000
          py-3
          text-lg
          mb-6
          sm:mb-0
          w-3/4
          sm:w-2/3
          md:w-2/5 md:text-2xl
        "
        type="text"
        name="TODOリスト"
        placeholder="TODO"
        v-model="todoText"
      />
      <button
        @click="addTodoList"
        class="
          border-4 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
          py-3
          text-lg
          w-52
          md:text-2xl md:ml-14
        "
      >
        TODOを作成
      </button>
    </div>
    <div
      v-for="(todo, n) in todos"
      :key="n"
      class="text-center text-lg md:text-3xl"
    >
      <div class="mb-2 md:mb-4">
        <input
          type="checkbox"
          :id="n"
          name="n"
          v-model="todo.checked"
          class="text-lg md:text-3xl"
        />
        <label for="n" class="text-lg md:text-3xl">{{ todo.text }}</label>
        <button
          @click="deleteTodoList(n)"
          class="ml-4 px-2 hover:bg-green-200 duration-1000 rounded"
        >
          ×
        </button>
      </div>
    </div>
    <p class="text-red-400 text-sm md:text-base">
      {{ todoErrorMassage }}
    </p>

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
      this.todos = this.memo.todos;
    }
  },
  data() {
    return {
      id: "",
      title: "",
      text: "",
      todos: [],
      todoText: "",
      titleErrorMassage: "",
      textErrorMassage: "",
      todoErrorMassage: "",
    };
  },
  methods: {
    addTodoList() {
      //TODOリストを作成する
      if (this.todoText === "") {
        alert("TODOの内容を入力してください。");
        return;
      }
      this.todos.push({
        text: this.todoText,
        checked: false,
      });
      this.todoText = "";
    },
    deleteTodoList(n) {
      if (confirm("このTODOを削除しますか？")) {
        this.todos.splice(n, 1);
      }
    },

    async save() {
      if (this.title === "") {
        this.titleErrorMassage = "書籍名を入力してください";
      }
      if (this.titleErrorMassage !== "") {
        return;
      }
      //保存ボタンを押したときの処理
      if (this.id) {
        //URLにIdがあるときは、既存のメモを更新する
        await this.$firestore
          .collection("memos")
          .doc(this.id)
          .update({
            createdAt: new Date().getTime(),
            title: this.title,
            text: this.text,
            todos: this.todos,
          })
          .then(() => {
            alert("メモを更新しました！");
            this.$router.push("/recordlist");
          });
      } else {
        //URLにIdがないときは、新規メモを作成する
        await this.$firestore
          .collection("memos")
          .add({
            createdAt: new Date().getTime(),
            title: this.title,
            text: this.text,
            todos: this.todos,
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
  watch: {
    todos() {
      console.log(this.todos);
    },
  },
};
</script>