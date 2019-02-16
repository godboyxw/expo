<template>
  <div class="footer">
    <div class="sum">
      <text class="total">总价</text>
      <text class="money">￥N</text>
    </div>
    <text class="pay-now">去结算</text>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  width: 750px;
  height: 96px;
  flex: 0;
  flex-direction: row;
}
.sum {
  flex: 1;
  height: 96px;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(238, 238, 238, 1);
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
  width: 213px;
  height: 96px;
  background-color: rgba(47, 145, 255, 1);
  text-align: center;
  font-size: 36px;
  font-family: DengXian;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 96px;
}
</style>
