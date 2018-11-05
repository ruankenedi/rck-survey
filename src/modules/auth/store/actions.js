import { http, setToken as httpSetToken, removeToken as httpRemoveToken } from '../../../plugins/http';
import { getData } from '../../../utils';
import jwtDecode from 'jwt-decode';
console.log('jwt_decode', jwtDecode)

import * as MTYPES from './mutations-types';

export const login = ({ commit, dispatch, state }, { email, password }) => {
	dispatch('setInitialState');

  commit(MTYPES.LOGING);

  console.log('called login action');

  return new Promise((resolve, reject) => {

    http.post('auth/login', { email, password })
      .then(getData)
      .then(({ token }) => {
				console.log('arrived 1');
        console.log('old token', state.token, email);
        const {
          usrNm,
          usrTp,
          usrId,
          // exp,
          tmp
				} = jwtDecode(token);

        console.log('new token', token);

        commit(MTYPES.LOGING, false);

        commit(MTYPES.LOGIN, {
          token,
          expireAt: new Date(10 * 1000),
          user: {
            _id: usrId,
            name: usrNm,
            type: usrTp,
            temporaryPassword: tmp
          }
        });

        console.log('has temporary pwd:', tmp);

        let temporaryPassword;

        if (tmp) {
          temporaryPassword = password;
        }

        resolve({ hasTemporaryPassword: tmp, temporaryPassword });
      })
      .catch((e) => {
				console.log('arrived 2', e);
				const { response } = e;
				console.log('EEEEEEEEEEEEEEE', e)
        commit(MTYPES.LOGING, false);

        if (process.env.NODE_ENV === 'development') {
          return reject(`${response.status}: ${response.data.error} : ${response.data.message}`);
        }

        reject(response.data.message, 5000);
      });
  });
};

export const loggedIn = ({ dispatch, state }) => {
  httpSetToken(state.token);
  if (!state.startedWatch) {
    dispatch('watchAssets');
  }
};

export const logout = ({ commit, dispatch }) => {
  dispatch('unwatchAssets');
  // httpRemoveToken();
  dispatch('setInitialState');

  commit(MTYPES.LOGOUT);
};
