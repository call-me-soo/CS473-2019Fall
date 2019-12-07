import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        _id: null
    },

    mutations: {
        LOGIN (state, { _id }) {
            state._id = _id
        },
        LOGOUT (state) {
            state._id = null
        }
    },

    actions: {
        LOGIN ({commit}, {username, password}) {
            return axios.post('../../api/users/signin', {username, password})
            .then(({data}) => {
                return commit('LOGIN', data)
            })
            .catch(({error}) => {
                console.log(error)
            })
        },
        LOGOUT ({commit}) {
            commit('LOGOUT')
        }
    },

    getters: {

    }
})