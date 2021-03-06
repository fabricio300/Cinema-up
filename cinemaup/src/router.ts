import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import VIP from './views/VIP.vue';
import Suscription from  './views/Suscription.vue';
import Asientos from  './views/asientos.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Asientos',
      name: 'Asientos',
      component: Asientos,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Suscription',
      name: 'Suscription',
      component: Suscription,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/VIP',
      name: 'VIP',
      component: VIP,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    // {
    //   path: '/Asientos',
    //   name: 'acientos',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/acientos.vue'),
    // },
  ],
});
