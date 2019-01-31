<template>
  <div class="wrapper">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="title">Hello Dingding</text>
    <text class="subtitle"
          @click="getClick">{{ link }}</text>
  </div>
</template>
<script>
import headerTop from '../../Common/headerTop'
// import * as dd from 'dingtalk-jsapi'
// import { openUrl, setTitle } from './util.js'
// var dingtalk = require('dingtalk-javascript-sdk')
// import dingtalk from 'dingtalk-javascript-sdk'
// import dingtalk from 'weex-dingtalk'
// var dingtalk = require('weex-dingtalk')
// var modal = weex.requireModule('modal')
export default {
  name: 'test',
  components: {
    headerTop
  },
  data: function () {
    return {
      link: 'DingTalk',
      title: '钉钉',
      router: '/host'
    }
  }
  // mounted: function () {
  //   // console.log(dingtalk)
  //   console.log(dd)
  //   dd.ready(function () {
  //     dd.biz.navigation.setTitle({
  //       title: 'icepy'
  //     })
  //   }),

  // console.log(DingTalkPC)
  // dd.config({
  //   'agentId': '219674049', // 必填，微应用ID
  //   'corpId': 'dinga1db62e064be442f35c2f4657eb6378f', // 必填，企业ID
  //   'timeStamp': '1548399750047', // 必填，生成签名的时间戳
  //   'nonceStr': '', // 必填，生成签名的随机串
  //   'signature': '', // 必填，签名
  //   'type': 0 / 1, // 选填，0表示微应用的jsapi，1表示服务窗的jsapi，不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
  //   'jsApiList': ['runtime.info', 'biz.contact.choose',
  //     'device.notification.confirm', 'device.notification.alert',
  //     'device.notification.prompt', 'biz.ding.post',
  //     'biz.util.openLink'] // 必填，需要使用的jsapi列表，注意：不要带dd。
  // })
  //   dd.ready(function () {
  //     dd.device.notification.confirm({
  //       message: '你爱我吗',
  //       title: '提示',
  //       buttonLabels: ['爱', '不爱'],
  //       onSuccess: function (result) {
  //         // onSuccess将在点击button之后回调
  //         /*
  //         {
  //             buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
  //         }
  //         */
  //       },
  //       onFail: function (err) { }
  //     })
  //   })
  //   setTitle('haha')
  //   dd.ready(function () {
  //     // 设置导航
  //     dd.biz.navigation.setTitle({
  //       title: 'icepy'
  //     })
  //   })
  // },
  // methods: {
  // getClick: function () {
  //   modal.toast({
  //     message: 'Hello World!',
  //     duration: 2
  //   })
  // }
  // }
}
</script>
    <style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  min-height: 100vh;
}
.title {
  font-size: 60px;
  color: #505050;
  text-align: center;
}
.subtitle {
  display: block;
  font-size: 30px;
  color: #aaaaaa;
  text-align: center;
  margin-top: 20px;
}
</style>
