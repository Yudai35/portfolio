
export const state = () => ({
    user: {
        email: "",
        userId: "",
        login: false,
        guest: false
    }
});


export const actions = {
    async confirmLogin({ commit }) {
        await this.$auth.onAuthStateChanged(function (user) {
            console.log({ user })
            if (user) {
                commit("getData", {
                    email: user.email,
                    userId: user.uid,
                    guest: user.isAnonymous
                });
                commit("yesLogin");
            } else {
                commit("noLogin");
            }
        });
    }
};

export const mutations = {
    getData(state, payload) {
        state.user.email = payload.email;
        state.user.userId = payload.userId
        state.user.guest = payload.guest
    },
    yesLogin(state) {
        state.user.login = true;
    },
    noLogin(state) {
        state.user.login = false;
    },
    signOut(state) {
        state.user.email = "";
        state.user.login = false;
    }
};
