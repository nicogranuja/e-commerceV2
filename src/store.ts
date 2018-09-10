import Vue from 'vue';
import Vuex from 'vuex';

// Modules import
import formsVisibility from './modules/formsVisibility';
import games from './modules/games';
import categories from './modules/categories';
import genres from './modules/genres';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: {
    formsVisibility,
    games,
    categories,
    genres
  }
});
