<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle"
          v-on:click="getClick">{{ link }}</text>
  </div>
</template>
<script>

var stream = weex.requireModule('stream')
var modal = weex.requireModule('modal')
var dingtalk = require('dingtalk-javascript-sdk')

export default {
  name: 'hello',
  data: function () {
    return {
      link: 'DingTalk'
    }
  },
  mounted: function () {
    dingtalk.ready(function () {
      const dd = dingtalk.apis
      // 设置导航
      dd.biz.navigation.setTitle({
        title: 'icepy'
      })
    })
  },
  methods: {
    getClick: function () {
      modal.toast({
        message: 'Hello World ICEPY !',
        duration: 2
      })
    }
  }
}
</script>
    <style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  height: 1000px;
  background-color: #333377;
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
  xxxx: static;
  text-align: center;
  margin-top: 20px;
}
</style>
