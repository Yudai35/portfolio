<template>
<!-- 新規登録 -->
    <div class="text-center px-2 pb-4 my-40 max-w-xl m-auto bg-gray-200 font-serif">
        <h2 class="text-2xl my-10 border-b-2 border-green-300 w-10/12  pt-6 pb-3 pl-3 m-auto text-left">Sing up</h2>
        <input type=”email” name=”email”  required="required" placeholder="E-mail" v-model="user.email" class="border-2 h-12 w-10/12 mb-5">
        <input type=”password” name=”passWord” required="required" placeholder="PassWord" v-model="user.passwprd" class="border-2 h-12 w-10/12 mb-5">
        <div>
            <button type="submit" @click="register" class="h-12 w-10/12 my-4 bg-green-300 ">登録</button>
        </div>
        <div class=" tracking-widest items-center">
            <div class="py-3">
                <a href="" class="h-12 my-4  text-blue-500">登録済みの方</a>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
 data () {
   return {
       user:{
          email: "",
          password: "",
        }
   }
 },
 methods: {
   submit () {
     const db = firebase.firestore()
     let dbUsers = db.collection('users')
     dbUsers
       .add({
         email: this.user.email,
         password: this.user.password,
       })
       .then(ref => {
         console.log('Add ID: ', ref.id)
       })
   },
 },
}
</script>