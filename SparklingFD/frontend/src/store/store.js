import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        _id: null,
        nickname: null,
        department: null
    },

    mutations: {
        LOGIN (state, { _id, nickname, department }) {
            state._id = _id
            state.nickname = nickname
            state.department = department
        },
        LOGOUT (state) {
            state._id = null
            state.nickname = null
            state.department = null
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
            axios.get('../../api/users/logout')
        }
    },

    getters: {

    }
})