<template>
    <div class="wrapper-box">
        <headerTop :title='title' :router='router'></headerTop>
        <div class="content">
            <text class="amount">应付金额 ¥1200</text>
            <text class="count">购买数量</text>
        </div>
    </div>
</template>

<script>
import headerTop from '../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      title: '我的订单',
      router: '/shopping'
    }
  },
  methods: {
    back () {
      this.$router.push('/shopping')
    }
  }
}
</script>

<style scoped>
.wrapper-box{
    width:720px;
    min-height:100vh;
}
.content{
    width:720px;
    height:160px;
    background:rgba(81,90,126,1);
}
.amount{
    height:160px;
    font-size:40px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:160px;
    text-align: center;
}
</style>
