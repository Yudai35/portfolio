export default async function ({ store, route, redirect, app }) {

    const user = await app.$authState()
    console.log({ user })

    // const userLogin = store.state.user.login
    // console.log({ userLogin })

    if (user) {
        //storeに情報を入れ直す
        store.commit("getData",
            {
                email: user.email,
                // password: user.password || ""
            }
        )

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