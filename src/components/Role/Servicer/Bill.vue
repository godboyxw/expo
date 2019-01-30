<template>
  <div class="bill">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="title">
      <div class="wrapper">
        <image src="src/assets/images/7.png"
               style="width:96px;height:41px;" />
        <text class="expo">武汉国际博览中心</text>
      </div>
      <text class="money">-￥18840.00</text>
      <text class="success">付款成功</text>
    </div>
    <div class="main">
      <div class="main-wrapper"
           v-for="(item,index) in mainArr"
           :style="{marginBottom:item.marginBottom,borderTop:item.borderTop,marginLeft:item.marginLeft,marginRight:item.marginRight}"
           :key="index">
        <text class="left">{{item.left}}</text>
        <div class="right-wrapper">
          <text class="right">{{item.right}}</text>
          <text class="icon-morethan"
                v-if="index===3"
                :style="{fontFamily:'iconfont',color:'#D8D8D8',fontSize:'25px',marginLeft:'20px'}">{{"\ue648"}}</text>
        </div>
      </div>
    </div>
    <div class="border"></div>
    <div class="order">
      <text class="question">对此订单有疑问</text>
      <text class="icon-morethan"
            :style="{fontFamily:'iconfont',color:'#D8D8D8',fontSize:'25px',marginLeft:'20px'}">{{"\ue648"}}</text>
    </div>
    <text class="card">发票存入卡包</text>
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
      title: '账单详情',
      router: '/servicer/finance',
      mainArr: [
        {
          left: '订单金额',
          right: '8840.00',
          marginBottom: '0',
          marginLeft: '45px',
          marginRight: '64px'
        },
        {
          left: '订单金额',
          right: '10000.00',
          marginBottom: '39px',
          marginLeft: '45px',
          marginRight: '64px'
        },
        {
          left: '付款方式',
          right: '银行卡',
          marginBottom: '0',
          borderTop: '1px solid #E5E5E5',
          marginLeft: '45px',
          marginRight: '63px'
        },
        {
          left: '商品说明',
          right: '展具租赁',
          marginBottom: '39px',
          marginLeft: '45px',
          marginRight: '64px'
        },
        {
          left: '创建时间',
          right: '2019-01-08  11:03',
          marginBottom: '0',
          borderTop: '1px solid #E5E5E5',
          marginLeft: '45px',
          marginRight: '64px'
        },
        {
          left: '订单号',
          right: '20190108220014679376979',
          marginBottom: '0',
          marginLeft: '45px',
          marginRight: '64px'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bill {
  width: 750px;
  min-height: 100vh;
  background: rgba(255, 255, 255, 1);
}
.title {
  height: 280px;
  padding: 43px 0;
  border-top: 8px solid #fbfbfb;
}
.wrapper {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 66px;
}
.expo {
  margin-left: 41px;
  font-size: 28px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.money {
  margin-bottom: 34px;
  font-size: 48px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  align-self: center;
}
.success {
  font-size: 30px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  align-self: center;
}
.main-wrapper {
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.left,
.right {
  font-size: 30px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
}
.right-wrapper {
  flex-direction: row;
  align-items: center;
}
.border {
  border-bottom: 11px solid rgba(238, 238, 238, 1);
}
.order {
  height: 80px;
  margin: 0 30px 0 46px;
  border-bottom: 1px solid #e5e5e5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.question {
  font-size: 30px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
}
.card {
  width: 240px;
  height: 60px;
  margin-left: 457px;
  margin-top: 38px;
  background: rgba(204, 218, 222, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 10px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(109, 109, 109, 1);
  line-height: 60px;
  text-align: center;
}
</style>
