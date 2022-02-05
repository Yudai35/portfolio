// import { resolve } from 'core-js/fn/promise';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //ログイン
import 'firebase/compat/firestore'; //メモ情報の保管
import 'firebase/compat/functions';//お問い合わせフォーム

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_Id,
  measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
//initializeAppはfirebaseへの初期設定

export default function (app, inject) {

  inject('firebase', firebase)
  inject('auth', firebase.auth())
  //authStateに情報が入ったら、middleware/authenticated.jsの処理が実行再開する。
  inject('authState', () => {
    //ログイン情報が入っている引数"resolve"をPromiseとしてinject,'authState'に返している。
    //authenticated.jsにて$authStateで記述可能
    return new Promise((resolve) => {
      //firebase上でログインの状態を確認(user)。ログイン状態の情報をを"resolve"に入れ引数で繋ぐ。
      firebase.auth().onAuthStateChanged((user) => {
        resolve(user || null)
      })
    })
  })
  inject('firestore', firebase.firestore())
  inject('functions', firebase.functions())
}