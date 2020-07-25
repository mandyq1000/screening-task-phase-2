import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import Newuser from '../views/Newuser.vue'
import drones from '../views/drones.vue'
import Dronecollection from '../views/Dronecollection.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    }
    },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiresAuth: false
    }
    },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: false
    }
    },
  {
    path: '/newuser',
    name: 'Newuser',
    component: Newuser,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/dronecollection',
    name: 'Dronecollection',
    component: Dronecollection,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/drones',
    name: 'Drones',
    component: drones,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !currentUser){
       next('/Users');
     } else if (requiresAuth && currentUser) {next();
     }else {next();}
});

export default router;
