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

export default function (app, inject) {

  inject('firebase', firebase)
  inject('auth', firebase.auth())
  inject('authState', () => {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        resolve(user || null)
      })
    })
  })
  inject('firestore', firebase.firestore())
  inject('functions', firebase.functions())
}