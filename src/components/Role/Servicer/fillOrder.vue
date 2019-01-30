<template>
  <div class="fill-order">
    <div class="content">
      <headerTop :title="title"
                 :router="router"></headerTop>
      <div class="info">
        <text class="address">电子信息展览-A1馆32号展位-索尼展商</text>
        <div class="file">
          <text class="file-btn">上传附件</text>
          <text class="file-content">可上传展位水电接驳图(png.excel.word)</text>
        </div>
      </div>
      <image src="src/assets/images/6.png"
             style="width:750px;height:17px;align-self:center;border-bottom:5px;" />
      <div class="pay">
        <text class="pay-way">支付方式</text>
        <text class="pay-online">在线支付</text>
        <text class="icon-three-point"
              :style="{fontFamily:'iconfont',color:'#2E2D2D',fontSize:'30px',marginRight:'41px',alignSelf:'center'}">{{"\ue645"}}</text>
      </div>
      <div class="receipt">
        <text class="receipt-name">发票</text>
        <text class="receipt-way">电子</text>
        <text class="receipt-company">（商品明细-公司）</text>
        <text class="icon-three-point"
              :style="{fontFamily:'iconfont',color:'#2E2D2D',fontSize:'30px',marginRight:'41px',alignSelf:'center'}">{{"\ue645"}}</text>
      </div>
      <div class="use">
        <text class="title">市供水压力一般用水</text>
        <cardBtn ref="mychild"
                 :amount="water_use_amount"
                 :width="width"
                 :choosenShow="choosenShow"
                 @click="chooseParent"
                 :scale="water_use_scale"></cardBtn>
      </div>
      <div class="use">
        <text class="title">照明用电</text>
        <div class="card-btn-wrapper">
          <cardBtn v-for="(item,index) in eleArr"
                   :key="index"
                   :width="width"
                   :choosenShow="choosenShow"
                   :amount="item.desc"
                   :scale="item.brand"></cardBtn>
        </div>
      </div>
      <div class="use">
        <text class="title">动力电源</text>
        <div class="card-btn-wrapper">
          <cardBtn v-for="(item,index) in powerArr"
                   style="margin-bottom:25px"
                   :key="index"
                   :width="width"
                   :choosenShow="choosenShow"
                   :amount="item.desc"
                   :scale="item.brand"></cardBtn>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
import cardBtn from '../../Common/cardBtn'
import Footer from '../../Common/Footer'
export default {
  components: {
    headerTop,
    cardBtn,
    Footer
  },
  data () {
    return {
      title: '填写订单',
      router: '/servicer/water',
      width: '234px',
      choosenShow: false,
      water_use_amount: '内径',
      water_use_scale: 'ø15mm',
      eleArr: [
        {
          desc: '220V/15A',
          brand: '(室内单相)'
        },
        {
          desc: '220V/15A',
          brand: '(室内单相)'
        },
        {
          desc: '220V/15A',
          brand: '(室内单相)'
        }
      ],
      powerArr: [
        {
          desc: '380V/20A',
          brand: '(室内三相)'
        },
        {
          desc: '380V/50A',
          brand: '(室内单相)'
        },
        {
          desc: '380V/50A',
          brand: '(室内单相)'
        },
        {
          desc: '380V/50A',
          brand: '(室内单相)'
        },
        {
          desc: '380V/50A',
          brand: '(室内单相)'
        },
        {
          desc: '380V/50A',
          brand: '(室内单相)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.fill-order {
  width: 750px;
  min-height: 100vh;
  background: #f9f9f9;
}
.content {
  flex: 1;
}
.info {
  height: 172px;
  padding: 39px 0 9px 0;
}
.address {
  margin-bottom: 44px;
  padding-left: 57px;
  font-size: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(54, 54, 54, 1);
}
.file {
  flex-direction: row;
  align-items: center;
  padding-left: 32px;
}
.file-btn {
  width: 126px;
  height: 50px;
  margin-right: 24px;
  background: rgba(220, 220, 220, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 24px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(64, 64, 64, 1);
  text-align: center;
  line-height: 50px;
}
.file-content {
  font-size: 24px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(186, 186, 186, 1);
}
.pay,
.receipt {
  margin-bottom: 10px;
  background: #ffffff;
  flex-direction: row;
  padding: 0 20px 0 32px;
  align-items: center;
}
.pay {
  height: 136px;
}
.receipt {
  height: 103px;
}
.pay-way,
.pay-online,
.receipt-name,
.receipt-way {
  font-size: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  line-height: 40px;
}
.pay-way {
  color: rgba(54, 54, 54, 1);
  margin-right: 410px;
}
.pay-online {
  color: #292828;
  margin-right: 10px;
}
.receipt-name {
  color: rgba(54, 54, 54, 1);
  margin-right: 270px;
}
.receipt-way {
  color: #f12323;
}
.receipt-company {
  color: rgba(54, 54, 54, 1);
}
.use {
  min-height: 316px;
  padding: 39px 0 26px 24px;
  border-top: 4px solid #eee;
  border-bottom: 10px solid rgba(238, 238, 238, 1);
}
.title {
  font-size: 32px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
  margin-bottom: 24px;
}
.card-btn-wrapper {
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
