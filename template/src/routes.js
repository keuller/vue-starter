import Vue from 'vue'
import VueRouter from 'vue-router'
import EssentialLinks from 'components/EssentialLinks'
import Ecosystem from 'components/Ecosystem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'essential'
  }, {
    path: '/essential',
    name: 'essential',
    component: EssentialLinks
  }, { 
    path: '/ecosystem',
    name: 'ecosystem',
    component: Ecosystem
  }
]

export default new VueRouter({ routes })
