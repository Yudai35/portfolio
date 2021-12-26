<template>
  <div
    class="header w-full bg-green-200 px-8 py-4 flex justify-between font-serif"
  >
    <h1>
      <a class="text-4xl hover:opacity-50 duration-1000">NewSelf</a>
    </h1>
    <ul class="flex justify-between items-center opacity-100 text-xl">
      <li>
        <nuxt-link to="login">
          <a class="pr-6 hover:opacity-50 duration-1000">ログイン</a>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="signup">
          <a class="pr-6 hover:opacity-50 duration-1000">新規登録</a>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>