<template>
<!-- お問い合わせページ -->
    <div class="text-center px-2 pb-4 my-36 max-w-xl m-auto bg-gray-200 font-serif">
        <h2 class="text-2xl my-10 border-b-2 border-green-300 w-10/12  pt-6 pb-3 pl-3 m-auto text-left">お問い合わせ</h2>
        <input type=”text” name=”名前” placeholder="名前" class="border-2 h-12 w-10/12 mb-5">
        <input type=”text” name=”メールアドレス” placeholder="メールアドレス" class="border-2 h-12 w-10/12 mb-5">
        <textarea type=”text” name=”お問い合わせ内容” placeholder="お問い合わせ内容" class="border-2 h-36 w-10/12 pt-2 mb-5"></textarea>
        <div>
            <input type="submit" value="送信" class="h-12 w-10/12 my-4 bg-green-300 ">
        </div>
        <div class="py-3">
            <a href="" class="h-12 my-4  text-blue-500">お問い合わせありがとうございました。</a>
        </div>
    
    </div>
</template>

<script>
export default {
    layout: 'oftenuse',
}
</script>