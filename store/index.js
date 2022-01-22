//https://nuxt.alizlab.com/%e3%80%90nuxt-js%e3%80%91firebase%e5%9f%ba%e7%a4%8e%e7%b7%a8auth%e7%89%88%ef%bc%9a%e3%82%a2%e3%82%ab%e3%82%a6%e3%83%b3%e3%83%88%e4%bd%9c%e6%88%90%e3%82%92%e3%81%a7%e3%81%8d%e3%82%8b%e3%82%88-2/
//⏫コードの付け足し参照
// モジュールモード

export const state = () => ({
    user: {
        email: "",
        // password: "",
        login: false
    }
});

// export const getters = {
//     user: state => {
//         return state.user;
//     }
// };

export const actions = {
    async confirmLogin({ commit }) {
        await this.$auth.onAuthStateChanged(function (user) {
            if (user) {
                commit("getData", {
                    email: user.email,
                    // password: user.password 
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
        // state.user.password = payload.password;
    },
    yesLogin(state) {
        state.user.login = true;
    },
    noLogin(state) {
        state.user.login = false;
    },
    signOut(state) {
        state.user.email = "";
        // state.user.password = "";
        state.user.login = false;
    }
};
