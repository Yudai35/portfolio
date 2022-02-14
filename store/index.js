
export const state = () => ({
    user: {
        email: "",
        userId: "",
        login: false
    }
});


export const actions = {
    async confirmLogin({ commit }) {
        await this.$auth.onAuthStateChanged(function (user) {
            if (user) {
                commit("getData", {
                    email: user.email,
                    userId: user.uid
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
