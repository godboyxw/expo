<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  created () {
    var domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('//at.alicdn.com/t/font_952444_pd4roirxis.ttf')"
    })
    domModule.addRule('fontFace', {
      'fontFamily': 'SourceHanSansCN-Medium',
      'src': "url('src/assets/fonts/SourceHanSansCN-Medium.ttf')"
    })
    domModule.addRule('fontFace', {
      'fontFamily': 'HYi4gj',
      'src': "url('src/assets/fonts/汉仪雪君体简.ttf')"
    })
    // console.log(this.$getConfig())
    console.log(weex.config)
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
