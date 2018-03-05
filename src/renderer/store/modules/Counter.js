import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  main: 0
}

const getters = {
  [getterNames.getCounter]: (state, getters) => state.main
}

const actions = {
  [actionTypes.SOME_ASYNC_TASK] ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

const mutations = {
  [mutationTypes.DECREMENT_MAIN_COUNTER] (state) {
    state.main--
  },
  [mutationTypes.INCREMENT_MAIN_COUNTER] (state) {
    state.main++
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
