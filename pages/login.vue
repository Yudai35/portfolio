<template>
<!-- ログインページ -->
    <div class="text-center px-2 pb-4 my-48 max-w-xl m-auto bg-gray-200">
        <h2 class="text-2xl my-10 border-b-2 border-green-300 w-10/12  pt-6 pb-3 pl-3 m-auto text-left">Login</h2>
        <input type=”text” name=”password” placeholder="password" class="border-2 h-12 w-10/12 mb-5">
        <div>
            <input type="submit" value="ログイン" class="h-12 w-10/12 my-4 bg-green-300 ">
        </div>
        <div class="flex justify-center tracking-widest items-center">
            <div class="">
                <a href="" class="h-12 my-4  mr-5 text-blue-500">ユーザー登録お済みでない方</a>
            </div>
            <div>
                <button class="bg-green-300 h-12 my-4 w-40 ml-5 ">ゲストログイン</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',
}
</script>