//https://nuxt.alizlab.com/%e3%80%90nuxt-js%e3%80%91firebase%e5%9f%ba%e7%a4%8e%e7%b7%a8auth%e7%89%88%ef%bc%9a%e3%82%a2%e3%82%ab%e3%82%a6%e3%83%b3%e3%83%88%e4%bd%9c%e6%88%90%e3%82%92%e3%81%a7%e3%81%8d%e3%82%8b%e3%82%88-2/
//⏫コードの付け足し参照

import firebase from '~/plugins/firebase'
 
export const state = () => ({
 user: {
  uid: '',
  email: '',
  login: false,
 },
})
 
export const getters = {
 user: state => {
  return state.user
 }
}
 
export const actions = {
 login({ dispatch }, payload) {
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
        console.log('成功！')
        dispatch('checkLogin')
        $router.push('/')
      }).catch((error) => {
        alert(error)
      })
 },
 checkLogin ({ commit }) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      commit('getData', { uid: user.uid, email: user.email })
      commit('switchLogin')
    }
  })
 },
 register ({ dispatch, commit }, payload) {
   firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
   .then(user => {
     console.log(user)
     dispatch('checkLogin')
   }).catch(function (error) {
     console.log({'code':error.code, 'message':error.message})
   })
  },
}
 
export const mutations = {
 getData (state, payload) {
  state.user.uid = payload.uid
  state.user.email = payload.email
 },
 switchLogin (state) {
  state.user.login = true
 },
}