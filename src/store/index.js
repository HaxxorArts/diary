import { createStore } from "vuex";

export default createStore({
    state: () => ({
        token: '',
    }),
    mutations: () => ({
        addToken(state, data) {
            return state.token = data
        }
    })
})