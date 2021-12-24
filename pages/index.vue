<template>
  <!-- ログイン前TOPページ -->
  <section>
    <div class="font-serif">
      <img src="~/assets/AdobeStock_229144311.jpeg" />
      <h1 class="mt-20 mb-12 text-center">
        <p class="text-4xl">NewSelfとは</p>
      </h1>
      <div class="text-center mb-20">
        <p>
          「自分を変えたいけど何すればいいかわからない」、「やりたいことはあるがなかなか１歩踏み出せない」
        </p>
        <br />
        <p>そんなあなたの背中を押してくれる「書籍紹介診断アプリ」です。</p>
        <br />
        <p>複数の質問を通してあなたにぴったりな本を紹介してくれます。</p>
        <br />
        <p>きっとあなたの「何か」を変えてくれる事でしょう。</p>
      </div>

      <div class="bg-green-200 bg-opacity-75">
        <h1 class="text-center pt-12">
          <p class="text-4xl">対象ユーザー</p>
        </h1>
        <div class="pt-12 pb-12 flex">
          <div class="flex-1 text-center w-1/3 mx-8">
            <div class="border-4 border-white rounded-full">
              <p class="py-2 text-lg">自分が何をやりたいのか分からない</p>
            </div>
            <p class="my-4">
              何がやりたいか分からないのは「視野が広がっていない」が原因と考えます。本を通して様々な価値観に触れ新しい自分を見つけましょう。NewSelfはそのきっかけを作ってくれます。
            </p>
          </div>
          <div class="flex-1 text-center w-1/3 mx-8">
            <div class="border-4 border-white rounded-full">
              <p class="py-2 text-lg">自分を変えたい</p>
            </div>
            <p class="my-4">
              自分を変えようと行動するが、継続できずに諦めてしまう方が多い印象があります。それは「マインド」が変わっていないからです。私自身本から多くのことを学びました。NewSelfではあなたの「マインド」を変える第１歩をサポートします。
            </p>
          </div>
          <div class="flex-1 text-center w-1/3 mx-8">
            <div class="border-4 border-white rounded-full">
              <p class="py-2 text-lg">読書したいが読んだら良いか分からない</p>
            </div>
            <p class="my-4">
              読書したいが何を読めば良いか分からないことも多いと思います。NewSelfでは診断を通してあなたにピッタリであろう書籍を紹介してくれます。
            </p>
          </div>
        </div>
      </div>

      <div class="">
        <h1 class="text-center pt-12">
          <p class="text-4xl">NewSelfの機能</p>
        </h1>
        <div class="pt-12 pb-12 flex">
          <div class="flex-1 text-center w-1/3 mx-8">
            <div class="border-4 border-green-200 rounded-full">
              <p class="py-2 text-lg">診断/書籍紹介</p>
            </div>
            <p class="my-4">
              あなたに投げかける質問を通して、今あなたに必要な書籍を紹介します。その書籍を通して自分と向き合う時間を作りましょう。
            </p>
          </div>
          <div class="flex-1 text-center w-1/3 mx-8">
            <div class="border-4 border-green-200 rounded-full">
              <p class="py-2 text-lg">Twitter共有</p>
            </div>
            <p class="my-4">
              「診断して終わり」、「本を買ったけれど読まない」とよくありがちです。Twiiterに「〇月〇日までに読み終え、感想をツイートします！」と投げかましょう！NewSelfなやらざるをえない「環境づくり」をサポートします。
            </p>
          </div>
          <div class="flex-1 text-center w-1/3 mx-8">
            <div class="border-4 border-green-200 rounded-full">
              <p class="py-2 text-lg">メモ機能</p>
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
