<template>
  <div class="scan">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="icon-point"
          :style="{fontFamily:'iconfont',color:'#313131',fontSize:'35px',position:'fixed',right:'10px',top:'35px',zIndex:'999'}">{{"\ue663"}}</text>
    <div class="content">
      <div class="main">
        <!-- <image src="src/assets/images/8.png"
               style="width:440px;height:440px;align-self:center;margin-bottom: 52px;" /> -->
        <qrcode class="qrcode"></qrcode>
        <text class="instruction">停车场出口扫描此二维码即可开闸</text>
        <text class="reserve-time">预留时间：40min</text>
      </div>
      <div class="bottom">
        <text class="fees">停车费：¥15元</text>
        <text class="place">武汉国博会展中心停车场</text>
        <text class="time">停车时间段</text>
        <div class="duration">
          <text class="date">2018-8-7 </text>
          <text class="hours">13:20:20—17:28:45</text>
        </div>
        <text class="footer"></text>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
import Qrcode from './Qrcode'
export default {
  components: {
    headerTop,
    Qrcode
  },
  data () {
    return {
      title: '出闸二维码',
      router: '/servicer/park/details'
    }
  }
}
</script>

<style scoped>
.scan {
  width: 750px;
  min-height: 100vh;
}
.content {
  align-items: center;
  padding-top: 40px;
}
.main {
  width: 560px;
  height: 730px;
  padding-top: 102px;
  background: rgba(30, 127, 209, 1);
  border-radius: 40px 40px 0px 0px;
}
.qrcode {
  align-self: center;
  margin-bottom: 52px;
}
.instruction {
  margin-bottom: 38px;
  align-self: center;
  font-size: 24px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.reserve-time {
  align-self: center;
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px -1px 31px rgba(105, 105, 105, 0.18);
}
.bottom {
  width: 560px;
  /**height: 285px;**/
  padding-top: 47px;
  padding-bottom: 40px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 21px 0px rgba(30, 209, 127, 0.35);
  border-radius: 0 0 40px 40px;
}
.fees {
  padding-left: 59px;
  margin-bottom: 22px;
}
.fees,
.place,
.time,
.date,
.hours {
  font-size: 28px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(85, 85, 85, 1);
}
.place {
  padding-left: 59px;
  margin-bottom: 26px;
}
.time {
  padding-left: 55px;
  margin-bottom: 16px;
}
.duration {
  padding-left: 55px;
  flex-direction: row;
}
.date {
  margin-right: 43px;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 245px;
  width: 70px;
  height: 9px;
  background: rgba(68, 138, 202, 1);
}
</style>
