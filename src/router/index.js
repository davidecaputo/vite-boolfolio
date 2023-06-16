import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SingleWork from '../pages/SingleWork.vue'
import AllWorks from '../pages/AllWorks.vue'
import AboutUs from '../pages/AboutUs.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/works',
      name: 'all-works',
      component: AllWorks
    },
    {
      path: '/works/:slug',
      name: 'single-work',
      component: SingleWork
    },
    {
      path: '/aboutus',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-not-found',
      component: NotFound
    }
  ]
})

export default router
