export const UserModule = {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user)
        }
    },
}