import modules from '../modules';

function load(component) {
	return () => import(`../layouts/${component}`);
}

const routes = [
  {
		name: 'home',
    path: '/',
		component: load('Layout'),
		redirect: 'auth/login', // INDEX
		meta: { requiresAuth: true },
    children: [
			{
				name: 'search',
				path: '/search',
				component: () => import('../components/Search'),
				meta: { requiresAuth: true }
			},
			{
				name: 'index',
				path: '/index',
				component: () => import('../components/Index.vue')
			},
			// {
			// 	name: 'search',
			// 	path: '/search',
			// 	component: () => import('components/Search.vue')
			// },
			{
				name: 'process',
				path: '/process',
				component: () => import('../components/Process.vue')
			},
			// {
			// 	name: 'about',
			// 	path: '/about',
			// 	component: () => import('pages/About.vue')
			// },
      // {
			// 	name: 'index',
			// 	path: '/',
			// 	component: () => import('pages/Index.vue')
			// },
			// {
			// 	name: 'register',
			// 	path: '/register',
			// 	component: () => import('components/Register.vue'),
			// 	meta: { requiresAuth: false },
			// },
    ]
	},
	...modules.auth,
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes;
