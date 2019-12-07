import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null
    },

    mutations: {
        LOGIN (state, {accessToken}) {
            state.accessToken = accessToken
        },
        LOGOUT (state) {
            state.accessToken = null
        }
    },

    actions: {
        LOGIN ({commit}, {username, password}) {
            return axios.post('http://localhost:3000/api/users/signin', {username, password})
            .then(({data}) => {
                console.log("post test")
                return commit('LOGIN', data)
            })
        },
        LOGOUT ({commit}) {
            commit('LOGOUT')
        }
    },

    getters: {

    }
})