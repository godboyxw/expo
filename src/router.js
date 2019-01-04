/*global Vue*/
import Router from 'vue-router'
import Home from '@/components/Home Page/Home'
import Display from '@/components/Home Page/Display'
import Service from '@/components/Home Page/Service'

import Producer from '@/components/Seller Product/Producer'
import Seller from '@/components/Seller Product/Seller'
import Goods from '@/components/Seller Product/Goods'
import Introduction from '@/components/Seller Product/Introduction'
import Banner from '@/components/Seller Product/Banner'

import tools from '@/components/Exhibition Rental/tools'
import desk from '@/components/Exhibition Rental/desk'
import plants from '@/components/Exhibition Rental/plants'
import fireforce from '@/components/Exhibition Rental/fireforce'
import others from '@/components/Exhibition Rental/others'

import shopping from '@/components/Shopping Cart/shopping'
import order from '@/components/Shopping Cart/order'

import food from '@/components/Food Order/food'
import dish from '@/components/Food Order/dish'

import news from '@/components/Media News/news'

Vue.use(Router)

module.exports = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/producer',
      name: 'Producer',
      redirect:'/introduction',
      component: Producer,
      children:[
        {
          path: '/introduction',
          name: 'Introduction',
          component: Introduction
        },
        {
          path: '/seller',
          name: 'Seller',
          component: Seller
        },
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        }
      ]
    },
    {
      path: '/goods/banner',
      name: 'Banner',
      component: Banner
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
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/dish',
      name: 'dish',
      component: dish
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
  ]
})
