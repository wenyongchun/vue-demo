import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    increment({commit}){
        commit('INCREMENT')
    },
    decrement({commit}){
        commit('DECREMENT')
    },
    evenIncrement({commit,state}){
        if(state.count % 2 ===0){
            commit('INCREMENT')
        }
    },
    asyncIncrement({commit}){
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000);
    }
}

const mutations = {
    INCREMENT(state){
        state.count++
    },
    DECREMENT(state){
        state.count--
    }
}

const getters = {
    evenOrOdd(state){
        return state.count % 2 === 0 ? '偶数' : '奇数'
      }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})