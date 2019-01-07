<template>
    <div class="container-wrapper">
      <div class="header">
        <text class="icon-back" :style="{fontFamily:'iconfont',color:'gray',fontSize:'40px'}" @click="back(router)">{{"\ue618"}}</text>
        <text class="header-title">{{title}}</text>
      </div>
      <div class="push"></div>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    router: String
  },
  methods: {
    back (router) {
      this.$router.push(router)
    }
  }
}
</script>

<style scoped>
/**.container-wrapper{
  width:720px;
  height:100%;
  overflow:hidden;
}**/
.header{
    width:720px;
    height:96px;
    position:fixed;
    top:0;
    z-index:100;
    padding-left:32px;
    background:rgba(255,255,255,1);
    flex-direction:row;
    justify-content:center;
    align-items:center;
}
.header-title{
    flex:1;
    text-align:center;
    line-height:96px;
    font-size:40px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(53,53,53,1);
    line-height:40px;
}
.push{
  height:96px;
}
</style>
