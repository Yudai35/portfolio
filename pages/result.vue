<template>
  <div class="font-serif py-28 px-4">
    <h2 class="text-center text-2xl md:text-5xl md:pb-20">
      あなたへオススメの書籍は…
    </h2>
    <div class="text-center md:flex justify-center md:text-left">
      <div class="mx-auto w-2/5 my-10 md:w-1/3 md:mx-0">
        <img :src="book.image.url" class="w-80 shadow-lg" />
      </div>
      <div class="align-middle md:w-2/5 mt-10">
        <h2 class="my-5 text-2xl md:text-4xl">タイトル:{{ book.title }}</h2>
        <p class="my-7 text-2xl md:text-3xl">著者:{{ book.author }}</p>
        <p
          class="
            tracking-tighter
            text-sm
            mb-8
            md:leading-9 md:tracking-wider md:text-xl
          "
        >
          {{ book.description }}
        </p>
        <div class="twitter_share">
          <button
            @click="twitterShare"
            class="
              border-2 border-blue-600
              rounded-full
              text-lg
              h-14
              w-64
              items-center
              flex
              justify-center
              m-auto
              my-10
              hover:bg-blue-100
              duration-1000
            "
          >
            Twitterで宣言する！
          </button>
        </div>
      </div>
    </div>

    <div class="text-center pt-4 md:pt-16">
      <button
        class="
          py-3
          w-48
          text-xl
          border-2 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
          md:text-2xl
        "
      >
        <nuxt-link to="/top"> TOPへ </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  layout: "oftenuse",

  async asyncData({ query, $microcms }) {
    const id = query.id;
    console.log(id);
    const book = await $microcms.get({
      endpoint: "books",
      contentId: id,
    });
    console.log(book);
    return {
      book,
    };
  },

  data() {
    return {
      book: "",
    };
  },
  methods: {
    twitterShare() {
      const today = new Date();
      const date_today = today.getDate();
      const after2Week = today.setDate(date_today + 14);
      const formatDate = moment(after2Week).format("YYYY年MM月DD日");
      console.log(formatDate);
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        `${formatDate}までに「${this.book.title}」を読み、感想＆行動することをツイートします！` +
        "%20%23NewSelf" +
        "%20%23書籍診断アプリ" +
        "&url=" +
        "https://newself-80137.web.app/";
      location.href = shareURL;
    },
  },
};
</script>
