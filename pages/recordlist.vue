<template>
  <!-- メモ一覧ページ -->

  <div class="font-serif mx-40 my-20">
    <div class="flex flex-wrap">
      <div v-for="memo in memos" class="border-4 rounded-md w-1/4 mx-10 my-8">
        <p class="border-b-2 text-xl mx-4 my-6">{{ memo.title }}</p>
        <p class="border-b-2 text-xl mx-4 my-6">
          {{ memo.createdAt }}
        </p>
        <div class="text-center my-6">
          <button
            class="
              py-2
              w-40
              text-lg
              border-2 border-green-200
              rounded-full
              hover:bg-green-100
              duration-1000
            "
          >
            メモを見る
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-20">
      <button
        class="
          mx-10
          py-3
          w-48
          text-2xl
          border-2 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
        "
      >
        <nuxt-link to="/record"> メモする </nuxt-link>
      </button>
      <button
        class="
          mx-10
          py-3
          w-48
          text-2xl
          border-2 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
        "
      >
        <nuxt-link to="/top"> TOPへ </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  async mounted() {
    const memosRef = await this.$firestore
      .collection("memos")
      .where("userId", "==", this.$store.state.user.userId)
      .get();
    this.memos = memosRef.docs.map((doc) => {
      return doc.data();
    });
    console.log(this.memos);
  },
  data() {
    return {
      memos: [],
    };
  },
};
</script>