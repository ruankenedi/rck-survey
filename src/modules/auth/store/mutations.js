import * as MTYPES from './mutations-types';
export default {
	[MTYPES.LOGING](state, value) {
    if (value === false) {
      state.isLogging = false;
    } else {
      state.isLogging = true;
    }
	},

	[MTYPES.LOGIN](state, { token, user, expireAt }) {
    state.token = token;
		state.user = user;
		console.log('User Mutation: ', state);
    state.expireAt = expireAt;
    state.isLogging = false;
	},

	[MTYPES.LOGOUT](state) {
    Object.assign(state, initialState);
  }
};
