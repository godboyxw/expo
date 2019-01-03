/*global Vue*/
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import intro from '@/components/intro'
import home from '@/components/home'
import goods from '@/components/goods'
import seller from '@/components/seller'
import Banner from '@/components/Banner'
import foo from '@/components/foo'
import Display from '@/components/Display'
import Service from '@/components/Service'
import tools from '@/components/Exhibition rental/tools'
import desk from '@/components/Exhibition rental/desk'
import plants from '@/components/Exhibition rental/plants'
import fireforce from '@/components/Exhibition rental/fireforce'
import others from '@/components/Exhibition rental/others'
import shopping from '@/components/Shopping Cart/shopping'
import order from '@/components/Shopping Cart/order'
//import home from '@/components/home'

Vue.use(Router)

module.exports = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      redirect:'/intro',
      name: 'home',
      component: home,
      children:[ 
        {
          path: '/intro',
          name: 'intro',
          component: intro
        },
        {
          path: '/goods',
          name: 'goods',
          component: goods
        },
        {
          path: '/seller',
          name: 'seller',
          component: seller
        },
      ]
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/tools',
      redirect:'/desk',
      name: 'tools',
      component: tools,
      children:[
        {
          path: '/desk',
          name: 'desk',
          component: desk
        },
        {
          path: '/plants',
          name: 'plants',
          component: plants
        },
        {
          path: '/fireforce',
          name: 'fireforce',
          component: fireforce
        },
        {
          path: '/others',
          name: 'others',
          component: others
        },
      ]
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
  ]
})
