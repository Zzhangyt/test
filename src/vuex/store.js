import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 100,
  value:0
};

const mutations = {
  //操作count+
  add(state,n){
    return (state.count += n)
  },
  //操作count-
  reduce(state,n){
    return (state.count -= n)
  },
  //把count的值赋给value（变量的存储）
  save(state,val){
    state.value = val
  }
};

export default new Vuex.Store({
  state,
  mutations
})
