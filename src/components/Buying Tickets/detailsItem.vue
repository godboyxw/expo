<template>
  <div class="details">
    <div class="desc">
      <text class="title">2018国际汽车展览会</text>
      <div class="price">
        <text class="dollar">￥</text>
        <text class="money">120</text>
      </div>
    </div>
    <text class="tickets-source">官方票源</text>
    <div class="box">
      <text class="card">卡</text>
      <text class="discount">年卡专享9折</text>
    </div>
    <text class="purchase">购票</text>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.details {
  width: 656px;
  padding: 39px 0 30px 0;
  position: relative;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(241, 241, 241, 1);
  box-shadow: 0px 2px 10px 0px rgba(8, 117, 209, 0.36);
  border-radius: 10px;
}
.desc {
  padding-left: 25px;
  padding-right: 65px;
  margin-bottom: 36px;
  flex-direction: row;
  justify-content: space-between;
}
.title {
  line-height: 34px;
  font-size: 36px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(63, 63, 63, 1);
}
.price {
  flex-direction: row;
}
.dollar {
  line-height: 27px;
  font-size: 24px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 92, 92, 1);
}
.money {
  line-height: 27px;
  font-size: 34px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 92, 92, 1);
}
.tickets-source {
  width: 120px;
  height: 40px;
  margin-left: 21px;
  margin-bottom: 14px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(8, 117, 209, 1);
  border-radius: 10px;
  font-size: 22px;
  text-align: center;
  line-height: 40px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(8, 117, 209, 1);
}
.box {
  padding-left: 21px;
  flex-direction: row;
  align-items: center;
}
.card {
  width: 30px;
  height: 30px;
  background: rgba(254, 122, 76, 1);
  border-radius: 6px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.discount {
  margin-left: 19px;
  line-height: 70px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.purchase {
  width: 160px;
  height: 60px;
  background: rgba(8, 117, 209, 1);
  position: absolute;
  right: 21px;
  top: 130px;
  border-radius: 30px;
  line-height: 60px;
  text-align: center;
  font-size: 34px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
