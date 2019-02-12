<template>
  <div class="wrapper">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="title"
          v-on:click="getClick">Hello Dingtalk Micro App {{ link }}</text>
  </div>
</template>
<script>

// import dingtalk from 'dingtalk-javascript-sdk';
import headerTop from '../../Common/headerTop'
// import dingtalk from 'weex-dingtalk'
var modal = weex.requireModule('modal')
export default {
  name: 'home',
  components: {
    headerTop
  },
  data: function () {
    return {
      link: 'DingTalk',
      title: '钉钉',
      router: '/host'
    }
  },
  mounted: function () {
    // console.log(dingtalk)
    // console.log(dd)
    // web端请求服务端，服务端计算签名
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

    // dd.ready(function () {
    //   // const dd = dingtalk.apis
    //   // 设置导航
    //   console.log(11)
    //   dd.biz.navigation.setTitle({
    //     title: 'Dingtalk'
    //   })

    //   dd.ui.input.plain({
    //     placeholder: '说点什么吧', // 占位符
    //     text: 'haha', // 默认填充文本
    //     onSuccess: function (data) {
    //       // onSuccess将在点击发送之后调用
    //       /* {
    //           text: String
    //       } */
    //     },
    //     onFail: function () {

    //     }
    // })
  },
  methods: {
    getClick: function () {
      modal.toast({
        message: 'Hello World!',
        duration: 2
      })
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  align-items: center;
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
.bind-vue-container {
  width: 702px;
  height: 88px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #4fc08d;
}
.bind-vue {
  font-size: 34px;
  color: #ffffff;
  text-align: center;
}
</style>
