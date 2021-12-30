<template>
  <!-- 診断ページ -->
  <!-- 未レスポンシブ -->

  <div class="font-serif text-center">
    <img src="~/assets/AdobeStock_229144311.jpeg" />
    <div class="py-28">
      <h1 class="py-12">
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

    <div v-if="showQuestion" class="bg-green-100 bg-opacity-85 py-28">
      <div
        class="
          max-w-screen-md
          m-auto
          mb-28
          py-16
          border-4 border-red-600
          rounded-lg
          bg-white
        "
      >
        <p class="text-4xl">Q.1</p>
        <p class="py-8 text-2xl">コミュニケーションで悩んだことがある</p>
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
            :class="answers.q1 ? 'bg-red-200' : ''"
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
            :class="answers.q1 === false ? 'bg-blue-200' : ''"
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
          my-28
          py-16
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q1 != null"
      >
        <p class="text-4xl">Q.2</p>
        <p class="py-8 text-2xl">対人関係で悩みがある</p>
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
            :class="answers.q2 ? 'bg-red-200' : ''"
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
            :class="answers.q2 === false ? 'bg-blue-200' : ''"
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
          my-28
          py-16
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q2 != null"
      >
        <p class="text-4xl">Q.3</p>
        <p class="py-8 text-2xl">夢中になれることがない</p>
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
            :class="answers.q3 ? 'bg-red-200' : ''"
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
            :class="answers.q3 === false ? 'bg-blue-200' : ''"
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
          my-28
          py-16
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q3 != null"
      >
        <p class="text-4xl">Q.4</p>
        <p class="py-8 text-2xl">
          自分の長所がわからない。自分に自信が持てない。
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
            :class="answers.q4 ? 'bg-red-200' : ''"
            @click="answer('q4', true)"
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
            :class="answers.q4 === false ? 'bg-blue-200' : ''"
            @click="answer('q4', false)"
          >
            NO
          </button>
        </ul>
      </div>

      <div
        class="
          max-w-screen-md
          m-auto
          my-28
          py-16
          border-4 border-red-600
          rounded-lg
          bg-white
        "
        v-if="answers.q4 != null"
      >
        <p class="text-4xl">Q.5</p>
        <p class="py-8 text-2xl">最近悪い出来事が多い。</p>
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
            :class="answers.q5 ? 'bg-red-200' : ''"
            @click="answer('q5', true)"
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
            :class="answers.q5 === false ? 'bg-blue-200' : ''"
            @click="answer('q5', false)"
          >
            NO
          </button>
        </ul>
      </div>
    </div>

    <!-- <div class="bg-white py-20" v-if="showQuestion">
      <nuxt-link to="/result?id=${randomId}">
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
          診断結果へ
        </button>
      </nuxt-link>
    </div> -->

    <div class="bg-white py-20" v-if="showQuestion">
      <!-- <nuxt-link to="result?id=j2cdp52lmp"> -->
      <button
        @click="diagnose"
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
        診断結果へ
      </button>
      <!-- </nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  data: function () {
    return {
      showQuestion: false,
      // ids: [],
      // randomId: "",
      answers: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
      },
    };
  },
  // asyncData: async function ({ $microcms }) {
  // const contents = book.contents;
  // const ids = contents.map((e) => {
  //   return e.id;
  // });
  // return { ids };
  // },
  // mounted: async function () {
  //   this.randomId = this.ids[Math.floor(Math.random() * this.ids.length)];
  // },
  methods: {
    openQuestion() {
      this.showQuestion = true;
    },
    answer(questionNumber, bool) {
      this.answers[questionNumber] = bool;
    },
    async diagnose() {
      //ユーザーの選択に応じて診断結果をmicroCMSから取得する
      let filters = "";
      if (this.answers.q1 === true) {
        filters += "question1[equals]true";
      }
      if (this.answers.q2 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question2[equals]true";
      }
      if (this.answers.q3 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question3[equals]true";
      }
      if (this.answers.q4 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question4[equals]true";
      }
      if (this.answers.q5 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question5[equals]true";
      }
      const book = await this.$microcms.get({
        endpoint: "books",
        queries: {
          filters: filters,
        },
      });
      console.log({ book });
    },
  },
};
</script>