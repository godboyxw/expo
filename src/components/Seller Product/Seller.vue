<template>
  <div>
    <div class="lists">
      <div v-for="(item,index) in arr"
           :key="index"
           class="item">
        <image style="width:260px;height:200px"
               :src="item.img" />
        <div class="info"
             style="flex:1;">
          <text class="seller-info">{{item.seller}}</text>
          <text class="seller-contact">{{item.contact}}</text>
          <text class="see">查看展品</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          seller: 'Amazon展商',
          contact: '联系方式：628-030927'
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          seller: 'Amazon展商',
          contact: '联系方式：628-030927'
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          seller: 'Amazon展商',
          contact: '联系方式：628-030927'
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          seller: 'Amazon展商',
          contact: '联系方式：628-030927'
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          seller: 'Amazon展商',
          contact: '联系方式：628-030927'
        }
      ]
    }
  }
}
</script>

<style scoped>
.lists {
  width: 750px;
  background: rgba(255, 255, 255, 1);
}
.item {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 32px;
  flex-direction: row;
}
.info {
  flex: 1;
}
.seller-info {
  padding-right: 165px;
  margin-bottom: 29px;
  text-align: right;
  line-height: 46px;
  font-size: 36px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(63, 63, 63, 1);
}
.seller-contact {
  padding-right: 111px;
  text-align: right;
  margin-bottom: 64px;
  line-height: 30px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(171, 171, 171, 1);
}
.see {
  width: 160px;
  height: 50px;
  margin-left: 86px;
  border: 1px solid rgba(29, 141, 243, 1);
  border-radius: 25px;
  text-align: center;
  font-size: 24px;
  line-height: 50px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(29, 141, 243, 1);
}
</style>
