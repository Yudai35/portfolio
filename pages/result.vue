<template>
  <!-- 診断結果表示ページ -->
  <!-- 未レスポンシブ -->

  <div class="font-serif py-28">
    <h2 class="text-center text-5xl pb-20">あなたへのおすすめの書籍は・・・</h2>
    <div class="flex justify-center">
      <div class="w-1/3">
        <img :src="book.image.url" class="w-80" />
      </div>
      <div class="w-2/5">
        <h2 class="text-4xl my-5">タイトル:{{ book.title }}</h2>
        <p class="my-7 text-3xl">著者:{{ book.author }}</p>
        <p class="text-xl tracking-wider leading-9">{{ book.description }}</p>
        <div class="twitter_share">
          <button
            @click="twitterShare"
            class="
              border-2 border-blue-600
              rounded-full
              h-14
              w-64
              items-center
              flex
              justify-center
              m-auto
              my-8
              hover:bg-blue-200
              duration-1000
            "
          >
            Twitterで宣言する！
          </button>
        </div>
      </div>
    </div>
    <!-- <p>〜似たような本、同著者等の出版本を外部APIで所得し表示させる〜</p> -->
    <!-- <div class="mt-24 text-4xl m-auto text-center">
      <h2 class="text-center mb-12">＜こちらもおすすめ＞</h2>
      <ul class="flex justify-center mr-0 bg-gray-100 py-6">
        <li class="mx-10">
          <img class="h-52" src="~/assets/やばい話し方.jpg" />
          <p class="text-lg pt-4">やばい話し方</p>
        </li>
        <li class="mx-10">
          <img class="h-52" src="~/assets/やばい話し方.jpg" />
          <p class="text-lg pt-4">やばい話し方</p>
        </li>
        <li class="mx-10">
          <img class="h-52" src="~/assets/やばい話し方.jpg" />
          <p class="text-lg pt-4">やばい話し方</p>
        </li>
        <li class="mx-10">
          <img class="h-52" src="~/assets/やばい話し方.jpg" />
          <p class="text-lg pt-4">やばい話し方</p>
        </li>
      </ul>
    </div> -->
    <div class="text-center pt-16">
      <button
        class="
          py-3
          w-48
          text-2xl
          border-2 border-green-200
          rounded-full
          hover:bg-green-100
          duration-1000
        "
      >
        TOPへ
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
      const formatDate = moment(after2Week).format("MM月DD日"); //2週間後の日にちを"MM月DD日"で表示
      console.log(formatDate);
      //シェアする画面を設定
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        `${formatDate}までに「${this.book.title}」を読み、感想をツイートします！` +
        "%20%23NewSelf" +
        "%20%23書籍診断アプリ" +
        "&url=" +
        "https://www.google.com/?hl=ja"; //アプリURL
      //シェアようの画面へ移行
      location.href = shareURL;
    },
  },
};
</script>
