<template>
  <!-- ログイン後TOPページ -->
  <!-- 未レスポンシブ -->

  <section>
    <div class="font-serif">
      <img src="~/assets/AdobeStock_229144311.jpeg" />

      <div class="py-24">
        <h1 class="text-center">
          <p class="text-4xl">NewSelfの機能</p>
        </h1>
        <div class="pt-12 flex">
          <div class="flex-1 text-center w-1/3 mx-8">
            <nuxt-link to="/diagnose">
              <div
                class="
                  border-4 border-green-200
                  rounded-full
                  hover:cursor-pointer
                "
              >
                <p class="py-2 text-lg">診断</p>
              </div>
            </nuxt-link>
            <p class="my-6">さぁ、あなたの人生を変える本と出会いましょう。</p>
          </div>
          <div class="flex-1 text-center w-1/3 mx-8">
            <nuxt-link to="/record">
              <div
                class="
                  border-4 border-green-200
                  rounded-full
                  hover:cursor-pointer
                "
              >
                <p class="py-2 text-lg">メモ</p>
              </div>
            </nuxt-link>
            <p class="my-6">
              読んだ本をの勉強になった部分等をここにアウトプットしましょう。
            </p>
          </div>
          <div class="flex-1 text-center w-1/3 mx-8">
            <nuxt-link to="/recordlist">
              <div
                class="
                  border-4 border-green-200
                  rounded-full
                  hover:cursor-pointer
                "
              >
                <p class="py-2 text-lg">メモ一覧</p>
              </div>
            </nuxt-link>
            <p class="my-6">
              アウトプットした内容を後から見返し、行動に落とし込んでいきましょう。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "oftenuse",
};
</script>