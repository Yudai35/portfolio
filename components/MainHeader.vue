<template>
  <div
    class="header w-full bg-green-200 px-8 py-4 flex justify-between font-serif"
  >
    <h1 class="">
      <a href="" class="text-4xl hover:opacity-50 duration-1000">NewSelf</a>
    </h1>
    <ul class="flex justify-between items-center opacity-100 text-xl">
      <li>
        <a href="" class="pr-8 hover:opacity-50 duration-1000">メモ</a>
      </li>
      <li>
        <a href="" class="pr-8 hover:opacity-50 duration-1000">メモ一覧</a>
      </li>
      <li>
        <a href="" class="pr-8 hover:opacity-50 duration-1000">診断</a>
      </li>
      <li>
        <a href="" class="pr-8 hover:opacity-50 duration-1000">お問い合わせ</a>
      </li>
      <li>
        <a href="" class="pr-5 hover:opacity-50 duration-1000">ログアウト</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    singOut() {
      this.$auth
        .singOut()
        .then(() => {
          alert("ログアウトに成功しました");
          this.$store.commit("singOut");
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