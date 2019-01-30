<template>
  <div class="rice">
    <image class="image"
           style="width:190px;height:150px;"
           :src="rice.src" />
    <div class="desc">
      <text class="title">{{rice.title}}</text>
      <text class="sold">{{rice.sold}}</text>
      <div class="calculate">
        <text class="price">¥{{rice.price}}</text>
        <div class="select">
          <text class="icon-minus minus"
                :style="{fontFamily:'iconfont',color:'#ff5c5c',fontSize:'28px',marginRight:'41px'}">{{"\ue665"}}</text>
          <text class="number">1</text>
          <text class="icon-add add"
                :style="{fontFamily:'iconfont',color:'#ff5c5c',fontSize:'28px',marginLeft:'41px'}">{{"\ue64f"}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rice: {
      type: Object,
      default: () => {
        return {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        }
      }
    }
  }
}
</script>

<style scoped>
.rice {
  width: 656px;
  height: 190px;
  flex-direction: row;
  padding: 16px 24px 24px 16px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(28, 28, 28, 0.19);
  border-radius: 10px;
}
.image {
  background: rgba(255, 0, 0, 1);
  border-radius: 10px;
}
.desc {
  flex: 1;
  padding-left: 18px;
}
.title {
  margin-bottom: 27px;
  margin-left: 18px;
  font-size: 32px;
  line-height: 40px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.sold {
  margin-bottom: 17px;
  margin-left: 17px;
  font-size: 24px;
  line-height: 40px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.calculate {
  flex-direction: row;
  justify-content: space-between;
}
.price {
  margin-left: 21px;
  font-size: 27px;
  line-height: 40px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(255, 92, 92, 1);
}
.select {
  flex-direction: row;
}
.number {
  width: 47px;
  text-align: center;
  line-height: 28px;
  font-size: 28px;
  font-family: ArialNarrow;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
</style>
