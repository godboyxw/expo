<template>
  <div class="restaurant">
    <image class="image"
           :src="restaurant.src"
           @click="next" />
    <div class="desc">
      <text class="title">{{restaurant.title}}</text>
      <text class="location">{{restaurant.location}}</text>
    </div>
    <text class="icon-map"
          :style="{fontFamily:'iconfont',color:'#000000',fontSize:'38px'}">{{"\ue61a"}}</text>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      default: () => {
        return {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        }
      }
    }
  },
  methods: {
    next () {
      this.$router.push('/dish')
    }
  }
}
</script>

<style scoped>
.restaurant {
  width: 656px;
  height: 180px;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  flex-direction: row;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;
}
.image {
  width: 200px;
  height: 140px;
  border-radius: 10px;
}
.desc {
  padding-top: 9px;
  padding-left: 39px;
  flex: 1;
}
.title {
  margin-bottom: 63px;
  font-size: 32px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  line-height: 34px;
}
.location {
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(153, 153, 153, 1);
  line-height: 26px;
}
.icon-map {
  align-self: center;
}
</style>
