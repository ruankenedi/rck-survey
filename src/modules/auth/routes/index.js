import store from 'src/store';

function load(component) {
  return () => import(`../views/${component}.vue`);
}

// HAS CREATE THIS FILE AND FUNCTION /////////////
// const checkAuthentication = (to, from, next) => {
//   if (store.getters.isLogged) {
//     next('/');
//   } else {
//     next();
//   }
// };

const children = [
  {
    name: 'login',
		path: 'login',
		// redirect: load('Login'),
    component: load('Login'),
    meta: { requiresAuth: false },
    // beforeEnter: checkAuthentication
  },
  {
    name: 'logout',
    path: 'logout',
    beforeEnter: (to, from, next) => {
      store.dispatch('logout');
      next({ name: 'login' });
    }
	},
	 // {
  //   name: 'register',
  //   path: 'register',
  //   component: load('Register'),
  //   meta: { requiresAuth: false },
  //   beforeEnter: checkAuthentication
  // },
];

export default [
  {
    children,
    name: 'auth',
    path: '/auth',
    component: load('Login'),
    redirect: { name: 'login' },
    meta: { requiresAuth: false }
  },
  // {
  //   name: 'forgotPassword',
  //   path: '/password/forgot',
  //   component: load('ForgotPassword')
  // }
];

