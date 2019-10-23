import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import {
  logout,
  isAuthenticated,
  redirectToAuthentication
} from '../helpers/auth';

Vue.use(Router);

/*
Available routes meta:
- public: If true, allow accessing the route without being authenticated
- ignore: If true, the URL will not be accessible directly (used for children)
- title: If set, will be used as the page <title>
*/

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_ROOT_URL,
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: { public: true },
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter(to, from, next) {
        logout();
        next('/');
      },
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFoundPage,
      meta: { title: 'Erreur - Page inexistante' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.ignore) {
    return next(false);
  }

  if (!to.meta.public && !isAuthenticated()) {
    redirectToAuthentication();
    return next(false);
  }

  if (to.meta.title) {
    document.title = `${to.meta.title} - {{ projectName }}`;
  } else {
    document.title = '{{ projectName }}';
  }

  return next();
});

export default router;
