<template>
  <div class="container">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="icon-point"
          :style="{fontFamily:'iconfont',color:'#313131',fontSize:'35px',position:'fixed',right:'10px',top:'35px',zIndex:'999'}">{{"\ue663"}}</text>
    <div class="explain">
      <text class="explain-text">支付说明</text>
      <text class="icon-question"
            :style="{fontFamily:'iconfont',fontSize:'32px'}">{{'\ue664'}}</text>
    </div>
    <div class="card">
      <div class="top"></div>
      <div class="info">
        <text class="title">国博停车场 A43号</text>
        <div class="brand">
          <text class="icon-brand"
                :style="{fontFamily:'iconfont',color:'rgba(67,67,67,1)',fontSize:'38px',marginRight:'19px'}">{{"\ue65f"}}</text>
          <text class="brand-text">车辆</text>
          <text class="brand-no">鄂A23894</text>
        </div>
        <div class="time">
          <text class="icon-time"
                :style="{fontFamily:'iconfont',color:'rgba(67,67,67,1)',fontSize:'32px',marginRight:'13px'}">{{"\ue660"}}</text>
          <text class="time-text">时间</text>
          <text class="time-start">13:20 入场</text>
          <text class="time-end">17:20 离场</text>
        </div>
        <text class="date">2018-6-19</text>
        <div class="money">
          <text class="total">15.00</text>
          <text class="unit">元</text>
        </div>
      </div>
      <div class="pay">
        <text class="icon-tick"
              :style="{fontFamily:'iconfont',fontSize:'34px',color:'#448ACA'}">{{'\ue620'}}</text>
        <text class="use">使用优惠券</text>
        <text class="pay-num">- ¥ 3.00</text>
        <text class="icon-right"
              :style="{fontFamily:'iconfont',fontSize:'20px',color:'#5D5D5D'}">{{'\ue648'}}</text>
      </div>
      <div class="pay">
        <text class="icon-tick"
              :style="{fontFamily:'iconfont',fontSize:'34px',color:'#448ACA'}">{{'\ue620'}}</text>
        <text class="use wepay">微信支付</text>
        <text class="icon-right"
              :style="{fontFamily:'iconfont',fontSize:'20px',color:'#5D5D5D'}">{{'\ue648'}}</text>
      </div>
      <div class="should-pay">
        <text class="should">应付金额</text>
        <text class="amount">¥ 12.00</text>
      </div>
    </div>
    <text class="reserve">预留时间：40min</text>
    <text class="regular">收费规则</text>
    <text class="confirm"
          @click="confirm">确认支付</text>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      title: '停车支付详情',
      router: '/servicer/park'
    }
  },
  methods: {
    confirm () {
      this.$router.push('/servicer/park/details/scan')
    }
  }
}
</script>

<style scoped>
.container {
  width: 750px;
  min-height: 100vh;
  background: #eeeeee;
}
.explain {
  width: 656px;
  height: 63px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.explain-text {
  margin-right: 16px;
  font-size: 22px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(88, 88, 88, 1);
}
.card {
  width: 656px;
  margin: 0 auto;
}
.top {
  width: 656px;
  height: 10px;
  background: rgba(30, 127, 209, 1);
  border-radius: 4px 4px 0px 0px;
}
.info {
  width: 656px;
  border-bottom: 1px solid #d2d2d2;
  padding-top: 33px;
  background: rgba(255, 255, 255, 1);
}
.title {
  padding-left: 32px;
  margin-bottom: 60px;
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}
.brand,
.time {
  flex-direction: row;
  align-items: center;
  margin-left: 38px;
}
.brand {
  margin-bottom: 36px;
}
.time {
  margin-bottom: 32px;
}
.brand-text,
.brand-no,
.time-text,
.time-start,
.time-end {
  font-size: 22px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(58, 58, 58, 1);
}
.time-start {
  margin-right: 30px;
}
.brand-text {
  margin-right: 23px;
}
.time-text {
  margin-right: 28px;
}
.date {
  position: absolute;
  right: 26px;
  top: 16px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
}
.money {
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 24px;
  right: 41px;
}
.total,
.unit {
  font-size: 36px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(52, 52, 52, 1);
}
.unit {
  font-size: 24px;
}
.pay {
  width: 655px;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  padding-left: 37px;
  padding-right: 32px;
  flex-direction: row;
  align-items: center;
}
.use {
  margin-left: 28px;
  margin-right: 267px;
  font-size: 28px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}
.pay-num {
  margin-right: 10px;
  font-size: 28px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}
.wepay {
  margin-right: 403px;
}
.should-pay {
  height: 117px;
  border-top: 1px solid #d2d2d2;
  padding-left: 41px;
  padding-right: 32px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.should {
  font-size: 28px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(240, 105, 64, 1);
}
.amount {
  font-size: 40px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(240, 105, 64, 1);
}
.reserve {
  margin-top: 55px;
  margin-bottom: 40px;
  font-size: 30px;
  text-align: center;
  line-height: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(30, 127, 209, 1);
  text-shadow: 0px -1px 31px rgba(105, 105, 105, 0.18);
}
.regular {
  width: 102px;
  height: 30px;
  margin-bottom: 43px;
  align-self: center;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(81, 81, 81, 1);
}
.confirm {
  width: 600px;
  height: 80px;
  align-self: center;
  background: rgba(30, 127, 209, 1);
  border-radius: 40px;
  font-size: 30px;
  text-align: center;
  line-height: 80px;
  font-family: STHeitiSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
</style>
