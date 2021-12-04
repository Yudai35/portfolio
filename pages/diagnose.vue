<template>
  <!-- 診断ページ -->
  <div class="font-serif text-center">
    <img src="~/assets/AdobeStock_229144311.jpeg" />
    <div class="py-8">
      <h1 class="py-16">
        <p class="text-4xl">
          簡単な質問に答えて、<br />あなたにピッタリな書籍と出会おう！
        </p>
      </h1>
      <button
        class="
          mb-16
          px-20
          border-4 border-green-200
          text-center
          rounded-full
          hover:bg-green-100
          duration-1000
        "
        @click="openQuestion"
      >
        <p class="py-4 w-64 text-2xl">診断を始める！</p>
      </button>
    </div>

    <div v-if="showQuestion" class="bg-green-100 bg-opacity-85 py-48">
      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
      >
        <p class="text-4xl">Q.1</p>
        <p class="py-8 text-2xl">
          コミュニケーションで悩んだことはありますか？
        </p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
            @click="answer('q1', true)"
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
            @click="answer('q1', false)"
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q1 != null"
      >
        <p class="text-4xl">Q.2</p>
        <p class="py-8 text-2xl">何か夢中になれることはありますか？</p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
            @click="answer('q2', true)"
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
            @click="answer('q2', false)"
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q2 != null"
      >
        <p class="text-4xl">Q.3</p>
        <p class="py-8 text-2xl">何か夢中になれることはありますか？</p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
            @click="answer('q3', true)"
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
            @click="answer('q3', false)"
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q3 != null"
      >
        <p class="text-4xl">Q.4</p>
        <p class="py-8 text-2xl">何か夢中になれることはありますか？</p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q4 != null"
      >
        <p class="text-4xl">Q.5</p>
        <p class="py-8 text-2xl">何か夢中になれることはありますか？</p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q5 != null"
      >
        <p class="text-4xl">Q.6</p>
        <p class="py-8 text-2xl">何か夢中になれることはありますか？</p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          mb-14
          py-8
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q6 != null"
      >
        <p class="text-4xl">Q.7</p>
        <p class="py-8 text-2xl">何か夢中になれることはありますか？</p>
        <ul class="flex justify-center tracking-widest">
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-red-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            YES
          </button>
          <button
            class="
              text-2xl
              my-6
              mx-10
              py-6
              px-6
              border-2 border-blue-600
              rounded-full
              h-28
              w-28
              flex
              items-center
              justify-center
            "
          >
            NO
          </button>
        </ul>
      </div>
    </div>

    <div class="bg-white py-20">
      <button
        class="
          text-2xl
          border-4 border-green-200
          rounded-full
          py-4
          px-20
          hover:bg-green-100
          duration-1000
        "
      >
        診断結果を見る
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  data() {
    return {
      showQuestion: false,
      answers: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
      },
    };
  },
  methods: {
    openQuestion() {
      this.showQuestion = true;
    },
    answer(qustionNumber, bool) {
      this.answers[qustionNumber] = bool;
    },
  },
};
</script>