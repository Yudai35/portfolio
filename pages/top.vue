<template>
  <!-- ログイン後TOPページ -->
  <!-- 画像未挿入？ -->

  <section>
    <div class="font-serif">
      <img src="~/assets/AdobeStock_229144311.jpeg" />

      <div class="py-20 px-4">
        <h1 class="text-center">
          <p class="text-4xl">NewSelfの機能</p>
        </h1>
        <div class="px-8 mx-4 pt-12 text-center md:flex md:px-0 md:mx-6">
          <div class="text-center mx-2 md:flex-1 md:w-1/3">
            <nuxt-link to="/diagnose">
              <div class="text-center border-4 border-green-200 rounded-full">
                <p
                  class="
                    text-lg
                    py-2
                    hover:bg-green-100
                    duration-1000
                    md:text-xl
                  "
                >
                  診断
                </p>
              </div>
            </nuxt-link>
            <p class="my-4">さぁ、あなたの人生を変える本と出会いましょう。</p>
          </div>
          <div class="mt-8 md:flex-1 text-center md:w-1/3 md:mx-6 md:mt-0">
            <nuxt-link to="/record">
              <div
                class="
                  border-4 border-green-200
                  rounded-full
                  hover:cursor-pointer
                "
              >
                <p
                  class="
                    text-lg
                    py-2
                    hover:bg-green-100
                    duration-1000
                    md:text-xl
                  "
                >
                  メモ
                </p>
              </div>
            </nuxt-link>
            <p class="my-4">
              読んだ本をの勉強になった部分等をここにアウトプットしましょう。
            </p>
          </div>
          <div class="mt-8 md:flex-1 text-center md:w-1/3 md:mx-6 md:mt-0">
            <nuxt-link to="/recordlist">
              <div
                class="
                  border-4 border-green-200
                  rounded-full
                  hover:cursor-pointer
                "
              >
                <p
                  class="
                    text-lg
                    py-2
                    hover:bg-green-100
                    duration-1000
                    md:text-xl
                  "
                >
                  メモ一覧
                </p>
              </div>
            </nuxt-link>
            <p class="my-4">
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