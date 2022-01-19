<template>
  <div
    class="
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
      <a class="text-3xl hover:opacity-50 duration-1000 md:text-4xl">NewSelf</a>
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
              to="/record"
              class="
                block
                mt-6
                px-14
                py-6
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >メモ</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/recordlist"
              class="
                block
                px-14
                py-6
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >メモ一覧</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/diagnose"
              class="
                block
                px-14
                py-6
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >診断</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/inquiry"
              class="
                block
                px-14
                py-6
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >お問い合わせ</nuxt-link
            >
          </li>

          <li>
            <button @click="signOut">
              <nuxt-link
                to="/signup"
                class="
                  block
                  px-14
                  py-6
                  text-center
                  hover:bg-green-100
                  transition
                  duration-300
                  md:px-4 md:py-4
                "
                >ログアウト</nuxt-link
              >
            </button>
          </li>
        </ul>
      </div>
    </div>

    <ul class="hidden md:flex justify-between items-center opacity-100 text-xl">
      <li>
        <nuxt-link to="/record">
          <a class="pr-8 hover:opacity-50 duration-1000">メモ</a>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/recordlist">
          <a class="pr-8 hover:opacity-50 duration-1000">メモ一覧</a>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/diagnose">
          <a class="pr-8 hover:opacity-50 duration-1000">診断</a>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/inquiry">
          <a class="pr-8 hover:opacity-50 duration-1000">お問い合わせ</a>
        </nuxt-link>
      </li>
      <li>
        <button @click="signOut" class="pr-5 hover:opacity-50 duration-1000">
          ログアウト
        </button>
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

  methods: {
    signOut() {
      this.$auth
        .signOut()
        .then(() => {
          alert("ログアウトに成功しました");
          this.$store.commit("signOut");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert("ログアウトに失敗しました");
        });
    },
  },
};
</script>