<template>
  <div class="pay">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="content">
      <div class="pay-time">
        <text class="rest-time">支付剩余时间</text>
        <div class="text-wrapper">
          <!--<text class="text">1</text>
          <text class="text">4</text>
          <text class="dot">:</text>
          <text class="text">4</text>
          <text class="text">7</text>
          <text class="dot">:</text>
          <text class="text">3</text>
          <text class="text2">{{time}}</text>-->
          <countDown></countDown>
        </div>
      </div>
      <div class="pay-wrapper"
           @click="paid(index)"
           v-for="(item,index) in payArr"
           :key="index">
        <div class="icon-pay"
             :style="{fontFamily:'iconfont',color:item.color,fontSize:'30px'}">{{item.fontName}}
        </div>
        <div class="pay-name">
          <text class="pay1">{{item.payWay}}</text>
          <text class="pay2">{{item.payWay}}</text>
        </div>
        <div class="icon-choosen"
             :style="{fontFamily:'iconfont',color:'#0875D1',fontSize:'30px',alignSelf:'center'}">{{key === index ? '\ue620' : '\ue623'}}
        </div>
      </div>
    </div>
    <div class="footer">
      <text class="footer-text">立即付款</text>
    </div>
  </div>
</template>

<script>
// import { countDown } from '../../util/time.js'
import headerTop from '../Common/headerTop'
import countDown from './countDown'
export default {
  components: {
    headerTop,
    countDown
  },
  data () {
    return {
      title: '收银台',
      router: '/shopping/order',
      payArr: [
        {
          payWay: '微信支付',
          fontName: '\ue629',
          color: '#09BB07'
        },
        {
          payWay: '支付宝支付',
          fontName: '\ue627',
          color: '#08AAEB'
        },
        {
          payWay: '银联快捷支付',
          fontName: '\ue62a',
          color: '#DE3232'
        }
      ],
      key: 0,
      time: ''
    }
  },
  methods: {
    paid (index) {
      this.key = index
    }
  }
  // mounted () {
  //   this.time = countDown()
  // }
}
</script>

<style scoped>
.pay {
  width: 750px;
  min-height: 100vh;
}
.content {
  background-color: #eeeeee;
  flex: 1;
}
.pay-time {
  width: 750px;
  height: 160px;
  border-bottom: 10px solid #cccccc;
  background: rgba(81, 90, 126, 1);
  justify-content: center;
  align-items: center;
}
.rest-time {
  font-size: 26px;
  margin-bottom: 34px;
  text-align: center;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
/**.text-wrapper {
  flex-direction: row;
}
.text {
  margin-right: 8px;
  text-align: center;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 1);
}
.dot {
  width: 15px;
  height: 30px;
  margin-bottom: 5px;
  font-size: 26px;
  line-height: 20px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}**/
.pay-wrapper {
  width: 750px;
  height: 100px;
  padding: 18px 24px 25px 24px;
  border-bottom: 0.5px solid #cccccc;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
}
.pay-name {
  flex: 1;
  margin-left: 20px;
}
.pay1 {
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
}
.pay2 {
  font-size: 26px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(187, 187, 187, 1);
}
.footer {
  width: 750px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  align-items: center;
  justify-content: center;
}
.footer-text {
  width: 620px;
  height: 90px;
  text-align: center;
  line-height: 90px;
  background: rgba(29, 141, 243, 1);
  border-radius: 45px;
  font-size: 36px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
</style>
