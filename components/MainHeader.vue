<template>
  <div
    class="header w-full bg-green-200 px-8 py-4 flex justify-between font-serif"
  >
    <h1>
      <a class="text-4xl hover:opacity-50 duration-1000">NewSelf</a>
    </h1>
    <ul class="flex justify-between items-center opacity-100 text-xl">
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
        <nuxt-link to="/result">
          <a class="pr-8 hover:opacity-50 duration-1000">診断結果</a>
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