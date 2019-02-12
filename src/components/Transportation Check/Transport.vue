<template>
  <div class="transportation">
    <headerTop :title="title"
               :router="router"
               :color="color"
               :background="background"
               class="headerTop">
    </headerTop>
    <div class="search">
      <div class="location">
        <div class="location-from">
          <text class="point1"></text>
          <!-- <text class="from"
                :class="addClass? 'translate-from':''">我的位置
          </text>-->
          <input type="text"
                 class="from"
                 :class="addClass? 'translate-from':''"
                 v-model="from"
                 @focus="focusFrom"
                 ref="input1" />
        </div>
        <div class="line"></div>
        <div class="location-to">
          <text class="point2"></text>
          <!--<text class="to"
                :class="addClass? 'translate-to':''">6号线 国博中心南
          </text>-->
          <input type="text"
                 class="to"
                 :class="addClass? 'translate-to':''"
                 v-model="to"
                 @focus="focusTo" />
        </div>
      </div>
      <div class="icon">
        <div class="icon-road"
             :class="addClass? 'rotate':''"
             :style="{fontFamily:'iconfont',color:'#000',fontSize:'37px'}"
             @click="exchange">{{"\ue626"}}
        </div>
        <text class="text"
              @click="search(from,to)">搜索</text>
      </div>
    </div>
    <div class="map">
      <!--<image style="width:750px;height:463px"
             src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1671204792,3567887483&fm=58' /> -->
      <bMap></bMap>
      <div class="check">
        <div class="nav">
          <div v-for="(item, index) in nav"
               class="nav-text"
               :key="index"
               @click="jump(index)"
               :class="index === key ? 'active' : ''">
            {{item}}
          </div>
        </div>
        <transition name="fade">
          <div class="metro transport"
               v-show="key === 0">
            <div class="metro-road transport-road"
                 v-for="(item,index) in metro"
                 :key="index">
              <div class="metro-road-container transport-road-container">
                <text class="metro-road-point transport-road-point"></text>
                <text class="metro-road-title transport-road-title">{{item.title}}</text>
              </div>
              <text class="metro-road-content transport-road-content">{{item.content}}</text>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div class="airport transport"
               v-show="key === 2">
            <div class="airport-road"
                 v-for="(item,index) in airport"
                 :key="index">
              <div class="airport-road-container transport-road-container">
                <text class="airport-road-point transport-road-point"></text>
                <text class="airport-road-title transport-road-title">{{item.title}}</text>
              </div>
              <text class="airport-road-content transport-road-content">{{item.content}}</text>
              <text class="airport-road-fees">{{item.fees}}</text>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../Common/headerTop'
import nav from '../Common/Nav'
import bMap from './bMap'
import { routeSearch } from '../../util/map.js'
export default {
  components: {
    headerTop,
    nav,
    bMap
  },
  data () {
    return {
      title: '交通查询',
      router: '/',
      color: 'rgba(255, 255, 255, 1)',
      background: 'linear-gradient(-58deg,rgba(34,169,255,0.8),rgba(23,105,253,0.8))',
      nav: ['地铁', '公交', '机场', '火车站', '通勤车', '自驾车'],
      key: 0,
      metro: [
        { title: '6号线 国博中心南',
          content: '乘坐地铁6号线至国博中心南站，由B出口出站'
        },
        { title: '6号线 国博中心北南',
          content: '乘坐地铁6号线至国博中心北站，由A出口出站'
        }
      ],
      airport: [
        {
          title: '天河机场至武汉国际博览中心',
          content: '乘坐地铁2号线天河机场站—国博中心南(北)站',
          fees: '打车约56分钟(33.4公里)     费用约70元'
        }
      ],
      isShow: false,
      addClass: false,
      from: '武汉市临空1号',
      to: '6号线 国博中心南',
      transfer: '',
      value: ''
    }
  },
  methods: {
    jump (index) {
      this.key = index
    },
    exchange () {
      this.addClass = !this.addClass
      this.transfer = this.from
      this.from = this.to
      this.to = this.transfer
    },
    search (x, y) {
      routeSearch(x, y)
    },
    // search () {
    //   routeSearch(this.from, this.to)
    // }
    focusFrom () {
      // this.$refs['input1'].value = ''
      this.from = ''
    },
    focusTo () {
      this.to = ''
    }
  }
}
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.transportation {
  width: 750px;
  min-height: 100vh;
}
.rotate {
  transform: rotateY(180deg);
  transition: transform 0.5s ease;
} */
/*.translate-from {
  transform: translateY(61px);
  transition: transform 0.5s ease;
}
.translate-to {
  transform: translateY(-61px);
  transition: transform 0.5s ease;
}*/
.search {
  width: 750px;
  height: 160px;
  padding: 42px 62px 30px 84px;
  flex-direction: row;
  background: rgba(255, 255, 255, 1);
  border-radius: 0px 0px 10px 10px;
}
.location {
  flex: 1;
}
.location-from,
.location-to {
  flex-direction: row;
  align-items: center;
}
.point1,
.point2 {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 10px;
}
.point1 {
  background: rgba(61, 182, 170, 1);
  margin-bottom: 18px;
}
.point2 {
  background: rgba(251, 80, 83, 1);
  margin-bottom: 16px;
}
.line {
  width: 420px;
  height: 1px;
  background: rgba(225, 225, 225, 1);
}
.from {
  transition: transform 0.5s ease;
  flex: 1;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 28px;
  line-height: 28px;
  padding-top: 10px;
  padding-bottom: 18px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  outline: none;
}
.to {
  transition: transform 0.5s ease;
  flex: 1;
  height: 40px;
  margin-top: 10px;
  font-size: 28px;
  line-height: 28px;
  padding: 16px 0 30px 0;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  outline: none;
}
.icon {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.icon-road {
  margin: 0 30px 0 29px;
  transition: transform 0.5s ease;
}
.text {
  font-size: 28px;
  line-height: 40px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
}
.map {
  width: 750px;
  background: #eeeeee;
}
.check {
  width: 656px;
  min-height: 652px;
  margin-top: 18px;
  background: rgba(255, 255, 255, 1);
  align-self: center;
}
.nav {
  width: 656px;
  height: 100px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
}
.nav-text {
  font-size: 30px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
}
.active {
  text-align: center;
  line-height: 50px;
  width: 100px;
  height: 50px;
  color: rgba(255, 255, 255, 1);
  font-weight: 300;
  background: rgba(69, 135, 253, 1);
  border-radius: 20px;
}
.transport {
  padding-left: 24px;
  padding-top: 66px;
  background: rgba(255, 255, 255, 1);
}
.metro-road-point,
.airport-road-point {
  width: 12px;
  height: 12px;
  margin-right: 31px;
  margin-top: 10px;
  background: rgba(255, 206, 29, 1);
  border-radius: 50%;
}
.transport-road-container {
  flex-direction: row;
}
.transport-road-title {
  font-size: 36px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.metro-road-title {
  margin-bottom: 36px;
}
.airport-road-title {
  margin-bottom: 18px;
}
.transport-road-content {
  margin-left: 45px;
  font-size: 28px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.metro-road-content {
  margin-bottom: 64px;
}
.airport-road-content {
  margin-bottom: 20px;
}
.airport-road-fees {
  margin-left: 45px;
  font-size: 28px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
</style>
