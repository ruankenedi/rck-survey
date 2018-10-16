import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import modules from './modules';
import actions from './actions';
import * as getters from './getters';

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
	// namespaced: true,
	state,
	mutations,
	modules,
	actions,
	getters
});
