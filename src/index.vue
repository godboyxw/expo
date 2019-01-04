<template>
  <div class="wrapper">
    <!--<image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>-->
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
   created:function () {
            var domModule=weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                // 'src':"url(\'http://at.alicdn.com/t/font_952444_mrpbz4sf6q.ttf\')"
                'src':"url('//at.alicdn.com/t/font_952444_vyvx4et8md.ttf')"
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
