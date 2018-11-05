// if has token, we assume that user is logged in our system
export const isLogged = ({ token, expireAt }) => {
  if (token) {
    if (expireAt > new Date()) {
      return true;
    }
  }
  return false;
};

// get current user data
export const currentUser = ({ user }) => user;
