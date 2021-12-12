<template>
<!-- 診断結果表示ページ -->
    <div class="font-serif  py-28 ">
        <h2 class="text-center text-5xl pb-20">あなたへのおすすめの書籍は・・・</h2>
        <div class="flex justify-center">
            <div class="w-1/3">
                <img :src="book.image.url" class="w-80">
            </div>
            <div class="w-1/3">
                <h2 class="text-4xl my-5">タイトル：{{ book.title }}</h2>
                <p class="my-7 text-3xl ">著者：{{book.author}}</p>
                <p class="text-xl tracking-wider leading-9">{{book.description}}</p>
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
  async asyncData({ query, $microcms }) {
    const id = query.id;
    console.log(id)
    const book = await $microcms.get({
      endpoint: "books",
      contentId: id
    });
        console.log(book)
    return {
     book
    };
  },
  data(){
      return{
          book:''
      }
  }
}

</script>
