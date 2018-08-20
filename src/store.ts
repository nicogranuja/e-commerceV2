import Vue from 'vue';
import Vuex from 'vuex';

// Modules import
import views from './modules/views';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: {
    views
  }
});
