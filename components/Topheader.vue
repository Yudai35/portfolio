<template>
  <div
    class="
      sticky
      top-0
      py-3
      px-6
      header
      w-full
      bg-green-200
      flex
      justify-between
      font-serif
      md:px-8 md:py-4
    "
  >
    <h1>
      <nuxt-link
        to="/"
        class="
          text-3xl
          hover:opacity-50
          duration-1000
          md:text-4xl
          cursor-pointer
        "
      >
        NewSelf
      </nuxt-link>
    </h1>
    <div class="visible md:invisible flex justify-end items-center">
      <button @click="isOpen = !isOpen" class="relative md:hidden h-5 w-6">
        <span
          :class="
            isOpen
              ? 'transform rotate-45 top-2 w-7 transition duration-300'
              : 'top-0 w-6'
          "
          class="h-1 inline-block transition-all absolute right-0 bg-black"
        ></span>
        <span
          :class="isOpen ? 'hidden' : 'top-2 w-6'"
          class="h-1 inline-block transition-all absolute right-0 bg-black"
        ></span>
        <span
          :class="
            isOpen
              ? 'transform -rotate-45 top-2 w-7 transition duration-300'
              : 'top-4 w-6'
          "
          class="h-1 inline-block transition-all absolute right-0 bg-black"
        ></span>
      </button>
    </div>

    <!--サイドバー-->
    <div
      :class="isOpen ? 'top-12 right-0' : 'top-12 -right-60'"
      class="
        fixed
        items-center
        h-full
        bg-green-200
        transition-all
        duration-300
        md:static
      "
    >
      <div v-show="isOpen">
        <ul class="md:hidden">
          <li>
            <nuxt-link
              to="/login"
              class="
                block
                mt-6
                px-14
                py-8
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ログイン</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/signup"
              class="
                block
                px-14
                py-8
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >新規登録</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>

    <ul class="hidden md:flex justify-end items-center opacity-100 text-xl">
      <li>
        <nuxt-link to="login">
          <a class="invisible md:visible pr-6 hover:opacity-50 duration-1000"
            >ログイン</a
          >
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="signup">
          <a class="invisible md:visible pr-6 hover:opacity-50 duration-1000"
            >新規登録</a
          >
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {},
};
</script>