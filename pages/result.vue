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
        <div class="mt-24 text-4xl m-auto">
            <h2 class="text-center">＜こちらもおすすめ＞</h2>
            <ul class="flex justify-center mr-0 ">
                <li class="mx-10">
                   <img class="h-52"  src="~/assets/やばい話し方.jpg">
                    <p></p>
                </li>
                <li class="mx-10">
                    <img class="h-52" src="~/assets/やばい話し方.jpg">
                    <p></p>
                </li>
                <li class="mx-10">
                  <img class="h-52" src="~/assets/やばい話し方.jpg">
                    <p></p>
                </li>
                <li class="mx-10">
                    <img class="h-52" src="~/assets/やばい話し方.jpg">
                    <p></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  layout: "oftenuse",
}
</script>
