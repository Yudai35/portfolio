<template>
  <!-- 診断結果表示ページ -->

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

  // async,awaitはPromiseの処理をより簡潔に書いたもの。意味は同じ。
  // asyncは非同期関数を定義する関数宣言であり、関数の頭につけることで、Promiseオブジェクトを返す関数にすることができます。そのような関数をasync functionといいます
  async asyncData({ query, $microcms }) {
    const id = query.id; //定数idにquery.idを代入。
    console.log(id); //コンソールにidを出力
    const book = await $microcms.get({
      //定数bookを指定し、bookが返されるまで{}内の処理は実行されずに停止している。（61~63行目でデータを返している）
      //データが返されたらmicrocmsからAPIデータが取得され、[51行目]第二引数microcmsに渡している
      //awaitは非同期処理の結果がでるまでコードを停止します。
      //awaitはasyncキーワードが付加された関数内でのみ使用可能です。
      endpoint: "books", //microCMSのエンドポイントを記述。
      contentId: id, //microCMSの書籍情報contentID。（58行目の処理で52行目に返しており、代入されたqueryを[51行目]第一引数queryに渡している）
    });
    console.log(book); //定数bookをコンソールで出力している。
    return {
      book, //定数bookをreturnで54行目に返している
    };
  },

  //⏬ dataに取得したbookのAPIデータを返している
  data() {
    return {
      book: "",
      // moment: ``,
    };
  },
  // filters: {
  //   moment: function (date) {
  //     return moment(date).format("MM月DD日");
  //   },
  // },
  methods: {
    twitterShare() {
      //👇アウトプット
      const today = new Date(); //今日この瞬間の情報を取得
      const date_today = today.getDate(); //日
      const after2Week = today.setDate(date_today + 14); //今日の日＋14日
      const formatDate = moment(after2Week).format("YYYY年MM月DD日"); //2週間後の日にちを"MM月DD日"で表示
      console.log(formatDate);
      //シェアする画面を設定
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        `${formatDate}までに「${this.book.title}」を読み、感想＆行動することをツイートします！` +
        "%20%23NewSelf" +
        "%20%23書籍診断アプリ" +
        "&url=" +
        "https://newself-80137.web.app/"; //アプリURL
      //シェアようの画面へ移行
      location.href = shareURL;
    },
  },
};
</script>
