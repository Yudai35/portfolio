export default async function ({ store, route, redirect, app }) {

    const user = await app.$authState()
    //authStateでplugins/firebase.jsファイルの処理へ非同期処理実行
    //処理が返されたら以下の処理が実行
    console.log({ user })

    if (user) {
        //store/index.jsの"getDate"に情報を入れ直す
        store.commit("getData",
            {
                email: user.email,
                userId: user.uid
            }
        )
        //上記の処理が成功したら"yesLogin"発動
        store.commit("yesLogin")
        //ログインしているとき
        if (route.name === "login") {
            return redirect("/top")
        }
    }
    else {
        //storeからログイン情報を消す
        store.commit("noLogin")

        //ログインしていないとき → diagnose, recordlist, result, top, recordは入れない
        if (route.name === "diagnose" || route.name === "recordlist" || route.name === "result" || route.name === "top" || route.name === "record" || route.name === "inquiry") {
            return redirect("/login")
        }

    }
}