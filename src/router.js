/* global Vue */
import Router from 'vue-router'
import Home from '@/components/Home Page/Home'
import Display from '@/components/Home Page/Display'

import Servicer from '@/components/Role/Servicer/Servicer'
import ServicerInternet from '@/components/Role/Servicer/Internet'
import ServicerWater from '@/components/Role/Servicer/Water'
import ServicerWaterFillOrder from '@/components/Role/Servicer/fillOrder'
import ServicerFinance from '@/components/Role/Servicer/Finance'
import ServicerFinanceBill from '@/components/Role/Servicer/Bill'
import ServicerPark from '@/components/Role/Servicer/ParkFee'
import ServicerParkDetails from '@/components/Role/Servicer/Details'
import ServicerParkDetailsScan from '@/components/Role/Servicer/Scan'
import Host from '@/components/Role/Host/Host'
import HostFinance from '@/components/Role/Host/Finance'
import HostFinanceBill from '@/components/Role/Host/Bill'
import HostOrder from '@/components/Role/Host/Order'
import HostTest from '@/components/Role/Host/test'
import Exhibitor from '@/components/Role/Exhibitor/Exhibitor'
import ExhibitorExpress from '@/components/Role/Exhibitor/Express'
import ExhibitorAdsRent from '@/components/Role/Exhibitor/AdsRent'
import ExhibitorMeetingOrder from '@/components/Role/Exhibitor/MeetingOrder'
import ExhibitorMustKnow from '@/components/Role/Exhibitor/MustKnow'
import ExhibitorFoodOrder from '@/components/Role/Exhibitor/FoodOrder'
import Builder from '@/components/Role/Builder/Builder'
import BuilderExpress from '@/components/Role/Builder/Express'
import BuilderBuildGuide from '@/components/Role/Builder/BuildGuide'

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
import Pay from '@/components/Shopping Cart/Pay'

import food from '@/components/Food Order/food'
import dish from '@/components/Food Order/dish'

import news from '@/components/Media News/news'
import Detail from '@/components/Media News/Detail'

import Tickets from '@/components/Buying Tickets/Tickets'
import Details from '@/components/Buying Tickets/Details'

import Advice from '@/components/Advice Feedback/Advice'

import Transport from '@/components/Transportation Check/Transport'

import SightSeeing from '@/components/SightSeeing/SightSeeing'
import WineShop from '@/components/SightSeeing/WineShop'
import DeliciousFood from '@/components/SightSeeing/DeliciousFood'
import Tour from '@/components/SightSeeing/Tour'

Vue.use(Router)

module.exports = new Router({
  mode: 'abstract',
  routes: [{
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
    path: '/servicer',
    name: 'Servicer',
    component: Servicer
  },
  {
    path: '/servicer/internet',
    name: 'ServicerInternet',
    component: ServicerInternet
  },
  {
    path: '/servicer/water',
    name: 'ServicerWater',
    component: ServicerWater
  },
  {
    path: '/servicer/water/fillOrder',
    name: 'ServicerWaterFillOrder',
    component: ServicerWaterFillOrder
  },
  {
    path: '/servicer/finance',
    name: 'ServicerFinance',
    component: ServicerFinance
  },
  {
    path: '/servicer/finance/bill',
    name: 'ServicerFinanceBill',
    component: ServicerFinanceBill
  },
  {
    path: '/servicer/park',
    name: 'ServicerPark',
    component: ServicerPark
  },
  {
    path: '/servicer/park/details',
    name: 'ServicerParkDetails',
    component: ServicerParkDetails
  },
  {
    path: '/servicer/park/details/scan',
    name: 'ServicerParkDetailsScan',
    component: ServicerParkDetailsScan
  },
  {
    path: '/host',
    name: 'Host',
    component: Host
  },
  {
    path: '/host/finance',
    name: 'HostFinance',
    component: HostFinance
  },
  {
    path: '/host/finance/bill',
    name: 'HostFinanceBill',
    component: HostFinanceBill
  },
  {
    path: '/host/order',
    name: 'HostOrder',
    component: HostOrder
  },
  {
    path: '/host/test',
    name: 'HostTest',
    component: HostTest
  },
  {
    path: '/exhibitor',
    name: 'Exhibitor',
    component: Exhibitor
  },
  {
    path: '/exhibitor/express',
    name: 'ExhibitorExpress',
    component: ExhibitorExpress
  },
  {
    path: '/exhibitor/adsRent',
    name: 'ExhibitorAdsRent',
    component: ExhibitorAdsRent
  },
  {
    path: '/exhibitor/meetingorder',
    name: 'ExhibitorMeetingOrder',
    component: ExhibitorMeetingOrder
  },
  {
    path: '/exhibitor/mustknow',
    name: 'ExhibitorMustKnow',
    component: ExhibitorMustKnow
  },
  {
    path: '/exhibitor/foodorder',
    name: 'ExhibitorFoodOrder',
    component: ExhibitorFoodOrder
  },
  {
    path: '/builder',
    name: 'Builder',
    component: Builder
  },
  {
    path: '/builder/express',
    name: 'BuilderExpress',
    component: BuilderExpress
  },
  {
    path: '/builder/buildguide',
    name: 'BuilderBuildGuide',
    component: BuilderBuildGuide
  },
  {
    path: '/producer',
    name: 'Producer',
    redirect: '/introduction',
    component: Producer,
    children: [{
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
    redirect: '/desk',
    name: 'tools',
    component: tools,
    children: [{
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
    }
    ]
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: shopping
  },
  {
    path: '/shopping/order',
    name: 'order',
    component: order
  },
  {
    path: '/shopping/order/pay',
    name: 'Pay',
    component: Pay
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
  {
    path: '/news/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/tickets/detail',
    name: 'Details',
    component: Details
  },
  {
    path: '/advice',
    name: 'Advice',
    component: Advice
  },
  {
    path: '/transport',
    name: 'Transport',
    component: Transport
  },
  {
    path: '/sightSeeing',
    name: 'SightSeeing',
    redirect: '/tour',
    component: SightSeeing,
    children: [{
      path: '/tour',
      name: 'Tour',
      component: Tour
    },
    {
      path: '/deliciousfood',
      name: 'DeliciousFood',
      component: DeliciousFood
    },
    {
      path: '/wineshop',
      name: 'WineShop',
      component: WineShop
    },
    {
      path: '/wineshop',
      name: 'WineShop',
      component: WineShop
    }
    ]
  }
  ]
})
