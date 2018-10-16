import * as MTYPES from './mutations-types';
import { initState } from './state';

export default {
	[MTYPES.SET_INITIAL_STATE](state) {
    let newState = state;

    state = { state, ...initState() };

    newState = { newState, ...initState() };
	},

	[MTYPES.CLEAR_ASSETS_WATCHER](state) {
    state.assetWatcher.stop();
    state.assetWatcher = undefined;
	},

	SET_TMP_PWD(state, pwd) {
    state.auth.user.tmpPwd = pwd;
  }
};
