<template>
  <!-- メモ一覧ページ -->

  <div class="font-serif m-4 md:m-12 lg:m-16 xl:m-20 px-4">
    <div class="md:flex md:flex-wrap xl:justify-start justify-between">
      <div
        v-for="memo in memos"
        class="border-4 rounded-md md:w-1/3 xl:w-1/4 m-8 md:mx-12 md:my-8"
      >
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
      >
        <nuxt-link to="/record"> メモする </nuxt-link>
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