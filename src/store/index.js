import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: ''
    },
    mutations: {
        auth_request(state){
          state.status = 'loading'
        },
        auth_success(state, token, user){
          state.status = 'success'
          state.token = token
          state.user = user
        },
        auth_error(state){
          state.status = 'error'
        },
        logout(state){
          state.status = ''
          state.token = ''
        },
    },
    getters : {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
      user: state => state.user
    },
    actions: {
        login({commit}, user) {
            return new Promise ((resolve, reject) => {
                commit('auth_request')
                axios.post('http://localhost:8000/auth/login', user)
                .then(response => {
                    const user = this.user
                    localStorage.setItem("token", response.data.access_token)
                    commit('auth_success', response.data.access_token, user)
                    resolve(response)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },
        logout({commit}) {
          return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token', 'user')
            resolve()
          })
        }
    }
})