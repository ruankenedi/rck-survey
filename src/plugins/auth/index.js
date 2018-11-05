import { setItem, getItem, removeItem } from 'src/services/localStorage';

const TOKEN = 'auth.token';

const Auth = {
  setToken(token) {
    setItem(TOKEN, token);
  },

  removeToken() {
    removeItem(TOKEN);
  },

  getToken() {
    const token = getItem(TOKEN);

    if (!token) {
      return null;
    }

    return token;
  },

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }

    return false;
  },
};
