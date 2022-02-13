<template>
  <div class="font-serif text-center">
    <div class="py-28 md:py-48 px-4">
      <h1 class="py-8 md:py-12">
        <p class="text-xl md:text-4xl">
          簡単な質問に答えて、<br />あなたにピッタリな書籍と出会おう！
        </p>
      </h1>
      <nuxt-link v-scroll-to="'#q1'" to>
        <button
          class="
            md:mb-16
            px-20
            border-4 border-green-200
            text-center
            rounded-full
            hover:bg-green-100
            duration-1000
          "
          @click="openQuestion"
        >
          <p class="py-4 w-32 text-lg md:w-64 md:text-2xl">診断を始める！</p>
        </button>
      </nuxt-link>
    </div>

    <div
      v-if="showQuestion"
      class="bg-green-100 bg-opacity-85 px-4 py-12 md:py-28"
    >
      <QuestionBox
        questionTitle="Q.1"
        questionText="コミュニケーションで悩んだことがある。"
        questionNumber="q1"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q1 != null"
        questionTitle="Q.2"
        questionText="対人関係で悩みがある。"
        questionNumber="q2"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q2 != null"
        questionTitle="Q.3"
        questionText="現在夢中になれること、目標がない。"
        questionNumber="q3"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q3 != null"
        questionTitle="Q.4"
        questionText="自分の長所がわからない。自分に自信が持てない。"
        questionNumber="q4"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q4 != null"
        questionTitle="Q.5"
        questionText="最近悪い出来事が多い。"
        questionNumber="q5"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q5 != null"
        questionTitle="Q.6"
        questionText="効率的に目標を達成させたい。"
        questionNumber="q6"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q6 != null"
        questionTitle="Q.7"
        questionText="仕事で成果を出したい。"
        questionNumber="q7"
        @answer="answer"
      />
    </div>

    <div class="bg-white py-20" v-if="answers.q7 != null">
      <button
        id="result"
        @click="diagnose"
        class="
          px-20
          border-4 border-green-200
          text-center
          rounded-full
          hover:bg-green-100
          duration-1000
        "
      >
        <p class="py-4 w-32 text-lg md:w-64 md:text-2xl">診断結果をみる</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "oftenuse",
  data: function () {
    return {
      showQuestion: false,
      ids: [],
      randomId: "",
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
    answer(result) {
      const questionNumber = result.questionNumber;
      const bool = result.bool;
      this.answers[questionNumber] = bool;
    },
    async diagnose() {
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
      if (this.answers.q6 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question6[equals]true";
      }
      if (this.answers.q7 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question7[equals]true";
      }
      const book = await this.$microcms.get({
        endpoint: "books",
        queries: {
          filters: filters,
        },
      });
      console.log({ book });
      const contents = book.contents;
      const ids = contents.map((e) => {
        return e.id;
      });
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      this.$router.push(`/result?id=${randomId}`);
    },
  },
};
</script>