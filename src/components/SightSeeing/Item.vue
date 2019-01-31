<template>
  <div class="item">
    <div class="image">
      <image :src="Item.src"
             style="width:200px;height:199px;" />
    </div>
    <div class="info">
      <text class="title">{{Item.title}}</text>
      <div class="rating-wrapper">
        <Star class="star"
              :star="Item.star"></Star>
        <text class="rating">{{Item.rating}}</text>
      </div>
      <text class="name"
            v-if="nameShow">{{Item.name}}</text>
      <div class="price-container"
           v-if="priceShow">
        <text class="dollar">￥</text>
        <text class="price">{{Item.price}}</text>
        <text class="at-least"> 起</text>
      </div>
      <div class="place">
        <div class="wrapper">
          <text class="icon-ear-machine"
                v-if="iconShow"
                :style="{fontFamily:'iconfont',fontSize:'30px',color:'#BABABA',marginRight:'8px'}">{{'\ue66a'}}</text>
          <text class="location">{{Item.location}}</text>
        </div>
        <text class="distance">{{Item.distance}}</text>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../Common/star'
export default {
  components: {
    Star
  },
  props: {
    Item: {
      type: Object,
      default: () => {
        return {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 4.9,
          rating: '4.9分',
          name: '美食街区',
          price: '1216',
          location: '位于户部巷昙华林',
          distance: '11km'
        }
      }
    },
    iconShow: {
      type: Boolean,
      default: false
    },
    nameShow: {
      type: Boolean,
      default: true
    },
    priceShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.item {
  width: 656px;
  height: 256px;
  align-self: center;
  flex-direction: row;
  padding-top: 28px;
  padding-left: 28px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}
.image {
  width: 200px;
  height: 199px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
}
.info {
  padding-top: 8px;
  flex: 1;
  padding-right: 34px;
}
.title {
  margin-bottom: 12px;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  /**line-height: 40px;**/
}
.rating-wrapper {
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
}
.rating {
  margin-left: 20px;
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.name {
  width: 110px;
  height: 30px;
  /**padding: 5px 16px;
  box-sizing: content-box;**/
  margin-bottom: 25px;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
}
.price-container {
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
}
.price,
.dollar,
.at-least {
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(215, 84, 80, 1);
  line-height: 40px;
}
.price {
  font-size: 40px;
}
.dollar,
.at-least {
  font-size: 24px;
}
.place {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.wrapper {
  flex-direction: row;
}
.location,
.distance {
  font-size: 24px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
</style>
