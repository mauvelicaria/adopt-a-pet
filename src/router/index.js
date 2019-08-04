import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FindAPet from '@/components/FindAPet'
import HowItWorks from '@/components/HowItWorks'
import Register from '@/components/Register'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/FindAPet',
      name: 'FindAPet',
      component: FindAPet
    },
    {
      path: '/HowItWorks',
      name: 'HowItWorks',
      component: HowItWorks
    },
    {
      path: '/Contact',
      name: 'Contact Us',
      component: Contact
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
