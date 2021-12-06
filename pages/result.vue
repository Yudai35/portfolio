<template>
<!-- 診断結果表示ページ -->
    <div class="font-serif  py-28 ">
        <h2 class="text-center text-4xl pb-16">あなたへのおすすめの書籍は・・・</h2>
        <div class="flex justify-center">
            <div class="w-1/3">
                <img src="~/assets/やばい話し方.jpg">
            </div>
            <div class="w-1/3">
                <h2 class="">タイトル： やばい話し方</h2>
                <p>著者：Dr.ヒロ</p>
                <p>この本は、元マルチ商法のトップセールスマン・現在YouTuberであるDr.ヒロさんが書かれた本です。誰でもできるのに誰も教えてくれない「悪魔的に話し上手」になれる方法をDr.ヒロさんが伝授してくれます。この本をマスターすれば仕事・恋愛・人間関係、全てがうまくいきます。</p>
                <button class="border-2 border-blue-600 rounded-full h-10 w-48 flex items-center justify-center">Twitterで宣言する！</button>
            </div>
        </div>
        <!-- <p>〜似たような本、同著者等の出版本を外部APIで所得し表示させる〜</p> -->
    </div>
</template>

<script>
export default {
  layout: "oftenuse",
}
</script>
