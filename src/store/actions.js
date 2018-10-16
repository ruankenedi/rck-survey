import * as MTYPES from './mutations-types';

export default {
	setInitialState({ commit }) {
    commit(MTYPES.SET_INITIAL_STATE);
    // localStorage.setItem('view', null);
	},

	unwatchAssets({ commit }) {
    // window.localStorage.removeItem('view');
    commit(MTYPES.CLEAR_ASSETS_WATCHER);
  }
};
