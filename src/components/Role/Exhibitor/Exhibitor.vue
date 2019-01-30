<template>
  <div class="builder">
    <div class="top">
      <headerTop :title="title"
                 class="headerTop"
                 :height="height"
                 :paddingTop="paddingTop"
                 :alignItems="alignItems"
                 :pushHeight="pushHeight"
                 :background="background"
                 :color="color"
                 :router="router"></headerTop>
    </div>
    <div class="know">
      <div class="know-wrapper">
        <div @click="routerTo">
          <text class="know-text1">参展须知</text>
          <text class="know-text2">请参展商仔细阅读相关规定</text>
        </div>
        <image class="know-image"
               src='https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1813348022,318740899&fm=85&app=57&f=JPEG?w=121&h=75&s=47917A8AE2882AEFAC81DDDD03005012'
               style="width:140px;height:130px;position:absolute;right:64px;bottom:0;" />
      </div>
    </div>
    <div class="main">
      <div class="item"
           v-for="(item,index) in mainArr "
           :key="index"
           @click="push(index)">
        <div class="item-wrapper"
             :style="{'backgroundColor':item.backgroundColor}"><text :style="{fontFamily:'iconfont',fontSize:'45px',color:'#ffffff'}">{{item.fontName}}</text></div>
        <text class="item-text">{{item.txt}}</text>
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
      title: '参展商',
      router: '/',
      height: '350px',
      paddingTop: '75px',
      alignSelf: '',
      alignItems: '',
      background: 'linear-gradient(to bottom,rgba(69,128,250,1) 0%,rgba(255,255,255,1) 100%)',
      pushHeight: '350px',
      color: 'rgba(255,255,255,1)',
      mainArr: [
        {
          fontName: '\ue633',
          txt: '物流服务',
          backgroundColor: 'rgba(19,187,173,1)'
        },
        {
          fontName: '\ue62f',
          txt: '展具租赁',
          backgroundColor: 'rgba(63,183,223,1)'
        },
        {
          fontName: '\ue634',
          txt: '广告位租赁',
          backgroundColor: 'rgba(69,152,240,1)'
        },
        {
          fontName: '\ue635',
          txt: '会议室预订',
          backgroundColor: 'rgba(69,152,240,1)'
        },
        {
          fontName: '\ue630',
          txt: '加班申请',
          backgroundColor: 'rgba(50,170,112,1)'
        },
        {
          fontName: '\ue631',
          txt: '餐饮预订',
          backgroundColor: 'rgba(253,117,82,1)'
        },
        {
          fontName: '\ue632',
          txt: '建议与投诉',
          backgroundColor: 'rgba(253,163,43,1)'
        }
      ],
      nextRouter: ['/exhibitor/express', '', '/exhibitor/adsRent', '/exhibitor/meetingorder', '', '/exhibitor/foodorder', '']
    }
  },
  methods: {
    push (index) {
      this.$router.push(this.nextRouter[index])
    },
    routerTo () {
      this.$router.push('/exhibitor/mustknow')
    }
  }
}
</script>

<style scoped>
.builder {
  width: 750px;
  min-height: 100vh;
}
.top {
  width: 750px;
  height: 350px;
  position: relative;
}
.know {
  width: 656px;
  height: 160px;
  background: linear-gradient(
    90deg,
    rgba(76, 187, 250, 1) 0%,
    rgba(127, 132, 255, 1) 78%
  );
  border-radius: 80px;
  align-self: center;
  position: absolute;
  left: 47px;
  top: 204px;
  z-index: 999;
  padding: 40px 0 29px 49px;
}
.know-text1 {
  font-size: 40px;
  font-family: NotoSansHans-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  margin-bottom: 21px;
  letter-spacing: 4px;
}
.know-text2 {
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  letter-spacing: 2.4px;
}
.main {
  padding: 71px 77px 0 79px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.item {
  width: 33.3333%;
  margin-bottom: 50px;
  align-items: center;
}
.item-wrapper {
  width: 84px;
  height: 84px;
  margin-bottom: 31px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}
.item-text {
  font-size: 28px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(43, 43, 43, 1);
  line-height: 40px;
  letter-spacing: 2.8px;
}
</style>
