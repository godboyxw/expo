<template>
  <div class="container">
    <headerTop :title='title'
               :router='router'></headerTop>
    <div class="avatar">
      <image style="width:750px;height:360px;"
             src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/49ea32382977af41ecefc8959b117118_255_96.jpg" />
    </div>
    <div class="nav">
      <text class="text-nav"
            v-for="(item, index) in nav"
            :key="index"
            @click="jump(index)"
            :class="index === key ? 'active' : ''">{{item}}</text>
    </div>
    <router-view></router-view>
    <transition name="fade">
      <buy v-if="isShow"
           @click="show,cancel">
      </buy>
    </transition>
  </div>
</template>

<script>
import { EventBus } from '../../util/vue-bus.js'
import headerTop from '../Common/headerTop'
import buy from './buy.vue'
export default {
  components: {
    headerTop,
    buy
  },
  data () {
    return {
      title: '展具租赁',
      router: '/servicer',
      nav: ['桌椅', '绿植', '消防', '其他'],
      routers: ['/desk', 'plants', 'fireforce', 'others'],
      key: 0,
      isShow: false
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    jump (index) {
      this.$router.push(this.routers[index])
      this.key = index
    }
  },
  created () {
    EventBus.$on('cancel', (a) => {
      this.isShow = a
      // console.log(this.isShow, a) // false false
    })
    EventBus.$on('show', (b) => {
      this.isShow = b
      // console.log(this.isShow, b) // true true
    })
  }
}
</script>

<style scoped>
.container {
  width: 750px;
  min-height: 100vh;
}
.header {
  width: 750px;
  height: 96px;
  padding-left: 32px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sell {
  flex: 1;
  text-align: center;
  line-height: 96px;
  font-size: 40px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
}
.nav {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 750px;
  height: 90px;
  background: rgba(255, 255, 255, 1);
}
.text-nav {
  text-align: center;
  line-height: 90px;
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
}
.active {
  color: rgba(8, 117, 209, 1);
  border-bottom: 4px solid rgba(8, 117, 209, 1);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
