<template>
  <div class="water">
    <div class="content">
      <headerTop :title="title"
                 :router="router"></headerTop>
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
                   style="margin-bottom:25                                                                                         px"
                   :key="index"
                   :width="width"
                   :choosenShow="choosenShow"
                   :amount="item.desc"
                   :scale="item.brand"></cardBtn>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="sum">
        <text class="total">总价</text>
        <text class="money">￥N</text>
      </div>
      <text class="pay-now"
            @click="payNow">去结算</text>
    </div>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
import cardBtn from '../../Common/cardBtn'
export default {
  components: {
    headerTop,
    cardBtn
  },
  data () {
    return {
      title: '水电接驳',
      router: '/servicer',
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
  },
  methods: {
    chooseParent () {
      this.$refs.mychild.chooseChild()
      this.$refs.mychild.chooseChildIcon1()
      this.$refs.mychild.chooseChildIcon2()
    },
    payNow () {
      this.$router.push('/servicer/water/fillOrder')
    }
  }
}

</script>

<style scoped>
.water {
  width: 750px;
  min-height: 100vh;
}
.content {
  flex: 1;
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
.footer {
  width: 750px;
  height: 96px;
  flex: 0;
  flex-direction: row;
}
.sum {
  /**width: 71.6%;**/
  flex: 1;
  height: 96px;
  flex-direction: row;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
}
.total,
.money {
  color: rgba(47, 145, 255, 1);
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  line-height: 96px;
  text-align: center;
}
.total {
  font-size: 30px;
  margin-right: 58px;
}
.money {
  font-size: 36px;
}
.pay-now {
  width: 28.4%;
  height: 96px;
  background: rgba(47, 145, 255, 1);
  text-align: center;
  font-size: 36px;
  font-family: DengXian;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 96px;
}
.active1 {
  border-color: rgba(71, 132, 198, 1);
  color: rgba(71, 132, 198, 1);
}
.active2 {
  color: rgba(255, 59, 64, 1);
}
.active3 {
  color: rgba(69, 152, 240, 1) !important;
}
</style>
