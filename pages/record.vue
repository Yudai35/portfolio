<template>
<!-- メモ記録ページ -->
    <div class="font-serif">
        <div class="mt-32 mb-24 flex justify-center items-center">
                <p class="text-2xl">書籍名：</p>
                <input type=”text” name=”タイトル”  class="border-b-2 h-12 w-1/2 text-2xl">
        </div>
        <div class=" text-center m-auto">
            <textarea name=”メモ欄” placeholder="メモ欄" id="div" cols="30" rows="10" class="border-2 w-3/5 h-screen text-lg p-4"></textarea>
        </div>
        <div class="mt-16 mb-20 text-center m-auto">
            <textarea name=”TODOリスト” placeholder="TODOリスト(1〜3つ)" id="todo" cols="30" rows="10" class="border-2 w-3/5 h-28 text-lg p-4" ></textarea>
        </div>
        <div class="mb-12 flex justify-center ">
            <input type="submit" value="保存" class="mx-14 h-14 w-40 text-lg bg-green-300 ">
            <input type="submit" value="メモ一覧ページ" class="mx-14 h-14 w-40 text-lg bg-green-300 ">
        </div>
        <div class="mt-12  mb-32 text-center">
            <p class="text-xl text-blue-500">保存しました。</p>
        </div>
    </div>
</template>

<script>
export default {
  layout: "oftenuse",
}
</script>