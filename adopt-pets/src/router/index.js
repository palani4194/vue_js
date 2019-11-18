import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pets from '../views/Pets.vue'
import Dogs from '../views/Dogs.vue'
import Cats from '../views/Cats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },

  {
    path: '/pets/:species/:id',
    name: 'pets',
    component: Pets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
