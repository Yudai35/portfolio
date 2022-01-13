export default function ({ store, route, redirect }) {
    const userLogin = store.state.user.login
    console.log(userLogin)

    if (userLogin) {
        //ログインしているとき
        if (route.name === "login") {
            return redirect("/top")
        }
    }
    else {
        //ログインしていないとき → diagnose, recordlist, result, top, recordは入れない
        if (route.name === "diagnose" || route.name === "recordlist" || route.name === "result" || route.name === "top" || route.name === "record" || route.name === "inquiry") {
            return redirect("/login")
        }

    }
}