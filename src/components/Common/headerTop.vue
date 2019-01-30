<template>
  <div class="container-wrapper">
    <div class="header"
         :style="{'color':color,'background':background,'height':height,'paddingTop':paddingTop,'alignSelf':alignSelf,'alignItems':alignItems}">
      <div class="icon-back"
           :style="{fontFamily:'iconfont',color:color,fontSize:'40px',left:left}"
           @click="back(router)">{{"\ue618"}}
      </div>
      <div class="header-title"
           :style="{'color':color}">{{title}}
      </div>
    </div>
    <div class="push"
         :style="{height:pushHeight}"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    router: String,
    color: {
      type: String,
      default: '#000000'
    },
    background: String,
    left: {
      type: String,
      default: '32px'
    },
    height: {
      type: String,
      default: '96px'
    },
    paddingTop: {
      type: String,
      default: '0px'
    },
    alignItems: {
      type: String,
      default: 'center'
    },
    alignSelf: {
      type: String,
      default: 'center'
    },
    pushHeight: {
      type: String,
      default: '96px'
    }
  },
  methods: {
    back (router) {
      this.$router.push(router)
    }
  }
}
</script>

<style scoped>
.header {
  width: 750px;
  /**height: 96px;**/
  position: fixed;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: center;
  /**align-items: center;**/
}
.icon-back {
  position: absolute;
  z-index: 200;
}
.header-title {
  flex: 1;
  /**align-self: center;**/
  text-align: center;
  font-size: 40px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
  letter-spacing: 4px;
}
/**.push {
  height: 96px;
}**/
</style>
