<template>
  <div
    :id="questionNumber"
    class="
      max-w-screen-md
      m-auto
      md:mb-28
      py-8
      px-4
      mb-8
      md:py-16
      border-4 border-green-300
      rounded-lg
      bg-white
    "
  >
    <p class="text-3xl md:text-4xl">{{ questionTitle }}</p>
    <p class="py-8 md:text-2xl">{{ questionText }}</p>
    <ul class="flex justify-center tracking-widest">
      <nuxt-link v-scroll-to="scrollTo" to>
        <button
          class="
            border-2 border-red-600
            rounded-full
            flex
            items-center
            justify-center
            text-lg
            mx-6
            p-8
            h-20
            w-20
            md:text-2xl md:my-6 md:mx-10 md:py-6 md:p-6 md:h-28 md:w-28
          "
          :class="selected ? 'bg-red-200' : ''"
          href="#"
          @click="answer(questionNumber, true)"
        >
          YES
        </button>
      </nuxt-link>
      <nuxt-link v-scroll-to="scrollTo" to>
        <button
          class="
            border-2 border-blue-600
            rounded-full
            flex
            items-center
            justify-center
            text-lg
            mx-6
            p-8
            h-20
            w-20
            md:text-2xl md:my-6 md:mx-10 md:py-6 md:p-6 md:h-28 md:w-28
          "
          :class="selected === false ? 'bg-blue-200' : ''"
          href="#"
          @click="answer(questionNumber, false)"
        >
          NO
        </button>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    questionTitle: {
      type: String,
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    questionNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    answer(questionNumber, bool) {
      this.selected = bool;
      this.$emit("answer", { questionNumber: questionNumber, bool: bool });
    },
  },
  computed: {
    scrollTo() {
      if (this.questionNumber === "q1") {
        return "#q2";
      }
      if (this.questionNumber === "q2") {
        return "#q3";
      }
      if (this.questionNumber === "q3") {
        return "#q4";
      }
      if (this.questionNumber === "q4") {
        return "#q5";
      }
      if (this.questionNumber === "q5") {
        return "#q6";
      }
      if (this.questionNumber === "q6") {
        return "#q7";
      }
      if (this.questionNumber === "q7") {
        return "#result";
      }
    },
  },
};
</script>