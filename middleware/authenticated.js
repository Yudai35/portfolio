export default async function ({ store, route, redirect, app }) {

    const user = await app.$authState()
    console.log({ user })

    if (user) {
        store.commit("getData",
            {
                email: user.email,
                userId: user.uid
            }
        )

        store.commit("yesLogin")

        if (route.name === "login") {
            return redirect("/top")
        }
    }
    else {
        store.commit("noLogin")

        if (route.name === "diagnose" || route.name === "recordlist" || route.name === "result" || route.name === "top" || route.name === "record" || route.name === "inquiry") {
            return redirect("/login")
        }

    }
}