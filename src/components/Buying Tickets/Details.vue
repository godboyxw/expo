<template>
  <div>
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="wrapper">
      <text class="exb-ticket">展会门票</text>
      <div class="box">
        <text class="dollar">￥</text>
        <text class="money">110</text>
        <text class="word"> 起</text>
      </div>
    </div>
    <detailsItem v-for="(item, index) in 5"
                 :key="index"
                 class="detailsItem"></detailsItem>
  </div>
</template>

<script>
import headerTop from '../Common/headerTop'
import detailsItem from './detailsItem'
export default {
  components: {
    headerTop,
    detailsItem
  },
  data () {
    return {
      title: '购票',
      router: '/tickets'
    }
  }
}
</script>

<style scoped>
.detailsItem {
  margin-bottom: 30px;
  align-self: center;
}
.wrapper {
  width: 750px;
  height: 113px;
  padding: 0 57px 0 46px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.exb-ticket {
  font-size: 36px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.box {
  flex-direction: row;
  justify-content: space-between;
}
.dollar {
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 92, 92, 1);
  line-height: 40px;
}
.money {
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 92, 92, 1);
  line-height: 40px;
}
.word {
  font-size: 22px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 40px;
}
</style>
