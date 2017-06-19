// Vuex store

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import state from './state';
import * from actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,

  mutations,

  state,

  strict: debug,

  plugins: debug ? [createLogger()] : [],
});
