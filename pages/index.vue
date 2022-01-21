<template>
  <!-- ログイン前TOPページ -->
  <!-- 未画像挿入 -->
  <section>
    <div class="font-serif">
      <img src="~/assets/AdobeStock_229144311.jpeg" />
      <h1 class="mt-20 mb-12 text-center">
        <p class="text-4xl md:text-4xl">NewSelfとは</p>
      </h1>
      <div
        class="px-4 text-sm text-center leading-6 mb-20 md:text-lg md:leading-8"
      >
        <p>
          「自分を変えたいけど何すればいいかわからない」<br />「やりたいことはあるがなかなか１歩踏み出せない」
          <br />そんなあなたの背中を押してくれる「書籍紹介診断アプリ」です。
          <br />質問を通してあなたにぴったりな本を紹介します。
          <br />読書を通して、きっとあなたの中の「何か」を変えてくれる事でしょう。
        </p>
      </div>

      <div class="px-4 bg-green-200 bg-opacity-75">
        <h1 class="text-center pt-12">
          <p class="text-4xl">対象ユーザー</p>
        </h1>
        <div class="px-8 mx-4 py-12 text-center md:flex md:px-0 md:mx-6">
          <div class="text-center mx-2 md:flex-1 md:w-1/3">
            <div class="text-center border-4 border-white rounded-full">
              <p class="text-lg py-2 md:text-xl">何がやりたいか分からない</p>
            </div>
            <p class="my-4">
              何がやりたいか分からないのは「視野が広がっていない」が原因と考えます。本を通して様々な価値観に触れ新しい自分を見つけましょう。NewSelfはそのきっかけを作ってくれます。
            </p>
          </div>
          <div class="mt-8 md:flex-1 text-center md:w-1/3 md:mx-6 md:mt-0">
            <div class="border-4 border-white rounded-full">
              <p class="text-lg py-2 md:text-xl">自分を変えたい</p>
            </div>
            <p class="my-4">
              自分を変えようと行動するが、継続できずに諦めてしまう方が多い印象があります。それは「マインド」が変わっていないからです。私自身読書から多くのことを学びました。NewSelfではあなたの「マインド」を変える第１歩をサポートします。
            </p>
          </div>
          <div class="mt-8 md:flex-1 text-center md:w-1/3 md:mx-6 md:mt-0">
            <div class="border-4 border-white rounded-full">
              <p class="text-lg py-2 md:text-xl">何の本を読むか悩む</p>
            </div>
            <p class="my-4">
              読書したいが何を読めば良いか分からないことも多いと思います。NewSelfでは診断を通してあなたにピッタリであろう書籍を紹介してくれます。
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 bg-white">
        <h1 class="text-center pt-12">
          <p class="text-4xl">NewSelfの機能</p>
        </h1>
        <div class="px-8 mx-4 pt-12 pb-12 text-center md:flex md:px-0 md:mx-6">
          <div class="text-center mx-2 md:flex-1 md:w-1/3">
            <div class="text-center border-4 border-green-200 rounded-full">
              <p class="text-lg py-2 md:text-xl">診断/書籍紹介</p>
            </div>
            <p class="my-4">
              あなたに投げかける質問を通して、今あなたに必要な書籍を紹介します。その書籍を通して自分と向き合う時間を作りましょう。
            </p>
          </div>
          <div class="mt-8 md:flex-1 text-center md:w-1/3 md:mx-6 md:mt-0">
            <div class="border-4 border-green-200 rounded-full">
              <p class="text-lg py-2 md:text-xl">Twitter共有</p>
            </div>
            <p class="my-4">
              「診断して終わり」、「本を買ったけれど読まない」とよくありがちです。Twiiterに「感想をツイートします！」と宣言しましょう！NewSelfなやらざるをえない「環境づくり」をサポートします。
            </p>
          </div>
          <div class="mt-8 md:flex-1 text-center md:w-1/3 md:mx-6 md:mt-0">
            <div class="border-4 border-green-200 rounded-full">
              <p class="text-lg py-2 md:text-xl">メモ機能</p>
            </div>
            <p class="my-4">
              読書をしてもアウトプットしなければ効果は薄いです。読んで印象に残った部分、勉強になった部分を忘れずに記録しましょう。後から見返すことも可能です。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "default",
};
</script>
