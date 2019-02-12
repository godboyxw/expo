<template>
  <div class="park">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="icon-point"
          :style="{fontFamily:'iconfont',color:'#313131',fontSize:'35px',position:'fixed',right:'10px',top:'35px',zIndex:'999'}">{{"\ue663"}}</text>
    <div class="main">
      <text class="txt">正在进行...</text>
      <div class=""
           @click="next">
        <ParkFeeCard :backgroundColor1="backgroundColor1"
                     :info="info"
                     :color="color"
                     :backgroundColor2="backgroundColor2"
                     class="card1"
                     ref="card1"></ParkFeeCard>
      </div>
      <ParkFeeCard></ParkFeeCard>
      <text class="txt">已结束</text>
      <ParkFeeCard class="card3"></ParkFeeCard>
    </div>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
import ParkFeeCard from './ParkFeeCard'
export default {
  components: {
    headerTop,
    ParkFeeCard
  },
  data () {
    return {
      title: '停车支付',
      router: '/servicer',
      backgroundColor1: '#2A84CF',
      info: {
        name: '国博停车场 A43号',
        brandNo: '鄂A23894',
        timeDuration: '13:20 入场',
        date: '2018-6-19',
        total: '8.00',
        status: '停放中',
        btn: '结束并支付'
      },
      color: '#F06940',
      backgroundColor2: '#2A84CF'
    }
  },
  methods: {
    next () {
      this.$router.push('/servicer/park/details')
      // this.$refs.card1.nextTo()
    }
  }
}
</script>

<style scoped>
.park {
  width: 750px;
  min-height: 100vh;
  background: #eeeeee;
  align-items: center;
}
.main {
  background: #eeeeee;
}
.txt {
  height: 85px;
  padding-top: 39px;
  padding-left: 35px;
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(89, 89, 89, 1);
}
.card1 {
  margin-bottom: 23px;
}
.card3 {
  margin-bottom: 20px;
}
</style>
