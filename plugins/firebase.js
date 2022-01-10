import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //ログイン
// import 'firebase/compat/firestore';メモ情報の保管
import 'firebase/compat/functions';//お問い合わせフォーム

const firebaseConfig = {
  apiKey: "AIzaSyBkxzvG-_MwCrkx4OzJ6h3pYKozhvK7Rfo",
  authDomain: "newself-80137.firebaseapp.com",
  projectId: "newself-80137",
  storageBucket: "newself-80137.appspot.com",
  messagingSenderId: "838221730471",
  appId: "1:838221730471:web:60991c613f934f7959c182",
  measurementId: "G-RY7Y78EGJQ"
};

firebase.initializeApp(firebaseConfig);
//initializeAppはfirebaseへの初期設定

export default function (app, inject) {

  inject('firebase', firebase)
  inject('auth', firebase.auth())
  // inject('auth', firebase.firestore())
  inject('functions', firebase.functions())
}