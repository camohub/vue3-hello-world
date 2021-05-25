import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const about = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const contact = () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')



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
    path: '/contact',
    name: 'Contact',
    component: contact,
    props: {
      title: 'Contact',
      test: 'Some test value',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
