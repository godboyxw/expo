<template>
  <div class="dish">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="content">
      <rice v-for="(item,index) in rice"
            :key="index"
            :rice="item"
            class="riceitem"></rice>
    </div>
    <div class="footer">
      <text class="icon-shopping-cart"
            :style="{fontFamily:'iconfont',color:'#FF5C5C',fontSize:'97px'}">{{"\ue61c"}}</text>
      <text class="sum">¥25.0</text>
      <text class="food-order">订餐</text>
    </div>
  </div>
</template>

<script>
import rice from './rice'
import headerTop from '../Common/headerTop'
export default {
  components: {
    rice,
    headerTop
  },
  data () {
    return {
      rice: [
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2579160226,3545844005&fm=27&gp=0.jpg',
          title: '套餐A 黑鸡牛柳饭',
          sold: '月售1235份',
          price: '25'
        }
      ],
      title: '刘胖子家常菜',
      router: '/food'
    }
  }
}
</script>

<style scoped>
.dish {
  width: 750px;
}
.content {
  padding-top: 36px;
  border-top: 6px solid #fafafa;
  align-items: center;
  flex: 1;
  min-height: calc(100vh - 196px);
  overflow: auto;
}
.riceitem {
  margin-bottom: 28px;
}
.footer {
  flex-direction: row;
  flex: 0;
  position: relative;
}
.icon-shopping-cart {
  position: absolute;
  left: 53px;
  bottom: 43px;
  z-index: 100;
}
.sum {
  width: 542px;
  height: 100px;
  background: rgba(84, 65, 65, 1);
  /**border:1px solid #544141;**/
  /**border-right:none;**/
  font-size: 40px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 100px;
  text-align: center;
}
.food-order {
  width: 176px;
  height: 100px;
  /**border:1px solid #544141;**/
  background: rgba(255, 92, 92, 1);
  font-size: 40px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 100px;
  text-align: center;
}
</style>
