<template>
<!-- 診断結果表示ページ -->
    <div class="font-serif  py-28 ">
        <h2 class="text-center text-5xl pb-20">あなたへのおすすめの書籍は・・・</h2>
        <div class="flex justify-center">
            <div class="w-1/3">
                <img src="~/assets/やばい話し方.jpg">
            </div>
            <div class="w-1/3">
                <h2 class="text-4xl my-5">タイトル： やばい話し方</h2>
                <p class="my-7 text-3xl ">著者：Dr.ヒロ</p>
                <p class="text-xl tracking-wider leading-9">この本は、元マルチ商法のトップセールスマン・現在YouTuberであるDr.ヒロさんが書かれた本です。誰でもできるのに誰も教えてくれない「悪魔的に話し上手」になれる方法をDr.ヒロさんが伝授してくれます。この本をマスターすれば仕事・恋愛・人間関係、全てがうまくいきます。</p>
                <button class="border-2 border-blue-600 rounded-full h-14 w-64  items-center flex justify-center m-auto my-8 hover:bg-blue-200 duration-1000">Twitterで宣言する！</button>
            </div>
        </div>
        <!-- <p>〜似たような本、同著者等の出版本を外部APIで所得し表示させる〜</p> -->
        <div class="mt-24  text-4xl m-auto text-center">
            <h2 class="text-center mb-12">＜こちらもおすすめ＞</h2>
            <ul class="flex justify-center mr-0 bg-gray-100 py-6">
                <li class="mx-10">
                   <img class="h-52"  src="~/assets/やばい話し方.jpg">
                    <p class="text-lg pt-4">やばい話し方</p>
                </li>
                <li class="mx-10">
                    <img class="h-52" src="~/assets/やばい話し方.jpg">
                    <p class="text-lg pt-4">やばい話し方</p>
                </li>
                <li class="mx-10">
                  <img class="h-52" src="~/assets/やばい話し方.jpg">
                    <p class="text-lg pt-4">やばい話し方</p>
                </li>
                <li class="mx-10">
                    <img class="h-52" src="~/assets/やばい話し方.jpg">
                    <p class="text-lg pt-4">やばい話し方</p>
                </li>
            </ul>
        </div>
        <div class="text-center pt-16">
            <button class="py-3 w-48 text-2xl border-2 border-green-200 rounded-full hover:bg-green-100 duration-1000">
                TOPへ
            </button>
        </div>
    </div>
</template>

<script>
export default {
  layout: "oftenuse",
}
</script>
