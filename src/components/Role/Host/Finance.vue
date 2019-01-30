<template>
  <div class="finance">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="classify-wrapper">
      <text class="classify">分类</text>
      <text class="icon-pull"
            @click="pulldown"
            :style="{fontFamily:'iconfont',color:'rgba(125,125,125,1)',fontSize:'20px'}">{{isShow? "\ue646":"\ue647"}}</text>
      <div class="classify-detail"
           v-if="isShow">
        <div class="all-wrapper">
          <text class="icon-all"
                :style="{fontFamily:'iconfont',color:'#292929',fontSize:'40px',marginBottom:'10px'}">{{"\ue64b"}}</text>
          <text class="all">全部</text>
        </div>
        <text class="euip-rent">展具租赁</text>
        <text class="water">水</text>
        <text class="electrity">电</text>
        <text class="internet1">网络</text>
        <text class="internet2">网络</text>
      </div>
    </div>

    <div class="container"
         v-for="(item,index) in arr"
         :key="index">
      <div class="time-wrapper">
        <text class="time">{{item.time}}</text>
      </div>
      <div class="refund">
        <div class="refund-title">
          <div class="icon-wrapper"
               :style="{backgroundColor:item.backgroundColor}">
            <text class="icon-earn"
                  :style="{fontFamily:'iconfont',color:'#FFFFFF',fontSize:'30px'}">{{item.fontName}}</text>
          </div>
          <text class="refund-text">{{item.text}}</text>
          <div @click="seeDetail(index)"
               class="click-wrapper">
            <text class="refund-detail">查看详情</text>
            <text class="icon-morethan"
                  :style="{fontFamily:'iconfont',color:'#D8D8D8',fontSize:'25px'}">{{"\ue648"}}</text>
          </div>
        </div>
        <div class="refund-info">
          <text class="money">{{item.money}}</text>
          <text class="success">{{item.success}}</text>
          <text class="rent">{{item.rent}}</text>
        </div>
      </div>
    </div>
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
      title: '财务结算',
      router: '/host',
      arr: [
        {
          time: '09:50',
          fontName: '\ue64a',
          text: '退款',
          money: '+￥10000.00',
          success: '退款成功',
          rent: '展具租赁押金（2019-01-10 10:40:20）',
          backgroundColor: '#108EE9'
        },
        {
          time: '09:50',
          fontName: '\ue649',
          text: '支出',
          money: '￥18840.00',
          success: '付款成功',
          rent: '展具租赁（2019-01-08 09:49:20）',
          backgroundColor: '#E8551F'
        }
      ],
      isShow: false,
      nextRouter: ['/servicer/finance/bill']
    }
  },
  methods: {
    pulldown () {
      this.isShow = !this.isShow
    },
    seeDetail (index) {
      this.$router.push(this.nextRouter[index])
    }
  }
}
</script>

<style scoped>
.finance {
  width: 750px;
  min-height: 100vh;
  background: #f3f3f3;
}
.classify-wrapper {
  height: 75px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  padding-left: 41px;
  align-items: center;
  position: relative;
}
.classify {
  margin-right: 20px;
}
.classify-detail {
  width: 750px;
  height: 463px;
  border-top: 1px solid #cacaca;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  left: 0;
  top: 75px;
  z-index: 100;
  flex-direction: row;
}
.all-wrapper {
  width: 98px;
  height: 130px;
  margin: 19px 0 0 43px;
  align-items: center;
}
.all {
  font-size: 30px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
}
.euip-rent {
  width: 50px;
  height: 65px;
  position: absolute;
  top: 98px;
  left: 223px;
  font-size: 24px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(124, 124, 124, 1);
}
.water,
.electrity {
  width: 24px;
  height: 35px;
  position: absolute;
  font-size: 24px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(124, 124, 124, 1);
}
.water {
  top: 96px;
  left: 512px;
}
.electrity {
  top: 97px;
  left: 375px;
}
.internet1,
.internet2 {
  width: 50px;
  height: 35px;
  font-size: 24px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(124, 124, 124, 1);
}
.internet1 {
  position: absolute;
  top: 97px;
  left: 623px;
}
.internet2 {
  position: absolute;
  top: 302px;
  left: 68px;
}
.time-wrapper {
  height: 132px;
  align-items: center;
  justify-content: center;
}
.time {
  width: 84px;
  height: 32px;
  background: rgba(204, 204, 204, 1);
  border-radius: 6px;
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  font-family: NotoSansHans-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.refund {
  width: 656px;
  height: 330px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  align-self: center;
}
.refund-title {
  flex-direction: row;
  align-items: center;
  padding: 0 32px 0 30px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  height: 90px;
}
.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-right: 21px;
}
.refund-text {
  font-size: 30px;
  font-family: NotoSansHans-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-right: 314px;
}
.refund-detail {
  font-size: 30px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  margin-right: 19px;
}
.click-wrapper {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.refund-info {
  padding-top: 31px;
  height: 239px;
}
.money {
  padding-left: 34px;
  margin-bottom: 38px;
  font-size: 36px;
  font-family: NotoSansHans-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.success {
  font-size: 30px;
  padding-left: 45px;
  margin-bottom: 22px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
}
.rent {
  padding-left: 44px;
  font-size: 30px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
}
</style>
