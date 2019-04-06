import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/uesr'



Vue.use(Vuex)
//创建实例
export default new Vuex.Store({
  state: state,
  mutations:mutations,
  actions:actions,
  modules:{
    user:user
  }
})
