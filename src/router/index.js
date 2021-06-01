import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const about = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const search = () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
const search2 = () => import(/* webpackChunkName: "search" */ '../views/Search2.vue')



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: about
  },
  {
    path: '/search',
    name: 'Search',
    component: search,
    props: {
      title: 'iTunes search',
      test: 'Some test value',
    }
  },
  {
    path: '/search2',
    name: 'Search2',
    component: search2,
    props: {
      title: 'iTunes search 2',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
