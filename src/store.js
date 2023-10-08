import Vue from 'vue';
import Vuex from 'vuex';

//构建项目时选择Vuex的永久化存储的形式
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  },
  actions: {

  },
});
