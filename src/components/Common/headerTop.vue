<template>
  <div class="container-wrapper">
    <div class="header"
         :style="{'color':color,'backgroundImage':backgroundImage,'height':height,'paddingTop':paddingTop,'alignSelf':alignSelf,'alignItems':alignItems}">
      <text class="icon-back"
            :style="{fontFamily:'iconfont',color:color,fontSize:'40px',left:left,height:textHeight,lineHeight:textHeight}"
            @click="back(router)">{{"\ue618"}}
      </text>
      <text class="header-title"
            :style="{'color':color,height:textHeight,lineHeight:textHeight}">{{title}}
      </text>
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
    backgroundImage: String,
    left: {
      type: String,
      default: '32px'
    },
    height: {
      type: String,
      default: '96px'
    },
    textHeight: {
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
  position: fixed;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: center;
}
.icon-back {
  position: absolute;
  z-index: 200;
}
.header-title {
  font-size: 40px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  letter-spacing: 4px;
}
</style>
