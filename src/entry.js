/* global Vue */

/* weex initialized here, please do not move this line */

const router = require('./router')
const App = require('@/index.vue')
// const meta = weex.requireModule('meta')
/* eslint-disable no-new */
// 配置 viewport 的宽度为 720px  在入口文件中配置了 viewport 的宽度为 720 之后，当前页面中的所有组件都会以 720px 作为满屏宽度。
// meta.setViewport({
//   width: '720'
// })
new Vue(Vue.util.extend({
  el: '#root',
  router
}, App))
router.push('/')
