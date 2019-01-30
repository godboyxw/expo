<template>
  <div class="wrapper-box">
    <div class="content">
      <headerTop :title='title'
                 :router='router'></headerTop>
      <div class="main">
        <text class="amount">应付金额 ¥1200</text>
        <div class="purchase">
          <text class="purchase-amount">购买数量</text>
          <text class="purchase-num">20盆</text>
        </div>
        <div class="post">
          <text class="post-ways">配送方式</text>
          <text class="post-place">配送至展位</text>
        </div>
        <div class="post-where">
          <text class="post-where-place">配送展位：</text>
          <text class="post-where-num"> 请填写配送展位号</text>
        </div>
        <div class="receipt">
          <text class="receipt-choose">发票选择</text>
          <text class="receipt-no">不开票</text>
        </div>
      </div>
      <div class="footer">
        <text class="submit"
              @click="submit">提交订单</text>
      </div>
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
    },
    submit () {
      this.$router.push('/shopping/order/pay')
    }
  }
}
</script>

<style scoped>
.wrapper-box {
  width: 750px;
  min-height: 100vh;
  background: #eeeeee;
}
.content {
  flex: 1;
}
.main {
  width: 750px;
  height: 160px;
  background: rgba(81, 90, 126, 1);
}
.amount {
  height: 160px;
  border-bottom: 10px solid #eeeeee;
  font-size: 40px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 160px;
  text-align: center;
}
.purchase,
.post,
.receipt {
  width: 750px;
  height: 100px;
  border-bottom: 1px solid #eeeeee;
  padding: 0 24px 0 25px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
}
.post-where {
  width: 750px;
  height: 100px;
  border-bottom: 1px solid #eeeeee;
  padding: 0 24px 0 25px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
}
.purchase-amount,
.purchase-num,
.post-ways,
.post-place,
.receipt-choose,
.receipt-no,
.post-where-place {
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  line-height: 100px;
}
.post-where-num {
  font-size: 28px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
  line-height: 100px;
}
.footer {
  flex: 0;
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  justify-content: center;
  align-items: center;
}
.submit {
  width: 620px;
  height: 90px;
  background: rgba(29, 141, 243, 1);
  border-radius: 45px;
  font-size: 36px;
  text-align: center;
  line-height: 90px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
</style>
