<template>
  <!-- 診断ページ -->

  <div class="font-serif text-center">
    <!-- <img src="~/assets/AdobeStock_229144311.jpeg" /> -->
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
      //ユーザーの選択に応じて診断結果をmicroCMSから取得する
      let filters = "";
      //もしQ1がtrueだった時変数filtersに"question1[equals]true"を代入する
      //"question1[equals]true"はjavascriptの書き方で固定されている。
      if (this.answers.q1 === true) {
        filters += "question1[equals]true";
      }
      if (this.answers.q2 === true) {
        //もしfiltersの中身が空じゃない時（前の質問で一つでもYES[true]だった時）👉前の質問が全てNO[false]だった時は発動しない
        //[or]が追加される。つまりfiltersの中は、"question1[equals]true[or]question2[equals]true"という状態。
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
      //👆前回までの内容
      //👇アウトプット
      //このあと、受け取った本のデータからランダムで１冊選ぶ
      const contents = book.contents; //本の情報の配列
      const ids = contents.map((e) => {
        return e.id;
      });
      // ids: ["xxxxxxx", "yyyyyyy", "zzzzzzz"] ほんのIDが並んでいる状態
      //本の配列から、ランダムに１冊を選ぶ
      //ランダムに選んだ１冊から、その本のIDを取り出す
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      //👆Math.random(),0から1未満の乱数を返す //floor,整数にする //ids.length,idsに入っている要素の配列の数または取得をしている。
      //その本のidを/result.vueのidにパラメータとして付けて、resultページに飛ぶ
      this.$router.push(`/result?id=${randomId}`);
    },
  },
};
</script>