<template>
  <div class="wrapper">
    <!-- <transition name="fade"
                mode="out-in">
      <router-view />
    </transition> -->
    <router-view />
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
  beforeCreate () {
    var domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('//at.alicdn.com/t/font_952444_ykand7dgamd.ttf')"
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
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/*.fade-enter-active {
  animation: bounce-in 0.3s;
}
.fade-leave-active {
  animation: bounce-out 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  25% {
    transform: translate3d(-75%, 0, 0);
  }
  50% {
    transform: translate3d(-50%, 0, 0);
  }
  75% {
    transform: translate3d(-25%, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(25%, 0, 0);
  }
  50% {
    transform: translate3d(50%, 0, 0);
  }
  75% {
    transform: translate3d(75%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}*/
</style>
