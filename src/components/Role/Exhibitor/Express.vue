<template>
  <div class="express">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="main">
      <div class="item"
           :style="{'paddingLeft':style[index].paddingLeft,'paddingRight':style[index].paddingRight}"
           v-for="(item,index) in expressArr"
           :key="index">
        <image :src="item.src"
               :style="{'width':style[index].width,'height':style[index].height}" />
        <text class="main-item-text">{{item.txt}}</text>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      title: '物流服务',
      router: '/exhibitor',
      expressArr: [
        {
          src: 'src/assets/images/1.png',
          txt: '进馆路线'
        },
        {
          src: 'src/assets/images/2.png',
          txt: '货物运输'
        },
        {
          src: 'src/assets/images/3.png',
          txt: '卸货时间'
        },
        {
          src: 'src/assets/images/4.png',
          txt: '货车办证流程'

        }
      ],
      style: [
        {
          width: '109px',
          height: '76px',
          paddingLeft: '23px',
          paddingRight: '31px'
        },
        {
          width: '90px',
          height: '68px',
          paddingLeft: '27px',
          paddingRight: '39px'
        },
        {
          width: '67px',
          height: '77px',
          paddingLeft: '37px',
          paddingRight: '47px'
        },
        {
          width: '77px',
          height: '49px',
          paddingLeft: '25px',
          paddingRight: '27px'
        }
      ]
    }
  }
}
</script>

<style scoped>
.express {
  width: 750px;
  min-height: 100vh;
}
.main {
  border-top: 1px solid rgba(220, 220, 220, 1);
  padding: 58px 27px 0 38px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 300px;
  height: 100px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 7px 1px rgba(134, 157, 235, 0.49);
  border-radius: 50px;
  margin-bottom: 66px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.main-item-text {
  font-size: 28px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(43, 43, 43, 1);
  line-height: 40px;
}
</style>
