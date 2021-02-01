import Vue from 'vue'
import Vuex from 'vuex'
import { session, content } from './modules';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    session,
    content
  }
});

export default store;
