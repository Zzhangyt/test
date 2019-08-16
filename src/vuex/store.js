import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 100,
  value:0
};

const mutations = {
  add(state,n){
    return (state.count += n)
  },
  reduce(state,n){
    return (state.count -= n)
  },
  save(state,val){
    state.value = val
  }
};

export default new Vuex.Store({
  state,
  mutations
})
