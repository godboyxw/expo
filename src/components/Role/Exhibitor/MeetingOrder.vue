<template>
  <div class="meeting-order">
    <div class="content">
      <headerTop :title="title"
                 :router="router"></headerTop>
      <image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1563687688,1939873237&fm=27&gp=0.jpg"
             style="width:750px;height:370px;" />
      <div class="apply">
        <text class="apply-title">申请时间</text>
        <div class="apply-date">
          <text class="number">2018</text>
          <text class="unit">年</text>
          <text class="number">12</text>
          <text class="unit">月</text>
          <text class="number">29</text>
          <text class="unit">日</text>
          <text class="number">上午</text>
        </div>
        <text class="apply-title apply-title-scale">申请规模</text>
        <div class="apply-scale">
          <div class="item"
               v-for="(item,index) in scaleArr"
               :key="index">
            <text class="price"
                  v-html="item.price">
            </text>
            <text class="desc">{{item.desc}}</text>
          </div>
        </div>
        <div class="select-num">
          <text class="icon-minus"
                :style="{fontFamily:'iconfont',color:'#4598F0',fontSize:'30px',marginRight:'41px'}">{{"\ue642"}}</text>
          <text class="last-num">1</text>
          <text class="icon-add"
                :style="{fontFamily:'iconfont',color:'#4598F0',fontSize:'30px',marginLeft:'41px'}">{{"\ue644"}}</text>
        </div>
      </div>
      <div class="service">
        <text class="service-title">设备服务</text>
        <div class="service-wrapper"
             v-for="(item,index) in euipArr"
             @click="tick1(index)"
             :key="index">
          <text class="service-name">{{item}}</text>
          <text class="service-price">价格</text>
          <text class="icon-minus"
                :class="index===key1? 'active' : ''"
                :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginRight:'41px'}">{{"\ue642"}}</text>
          <text class="last-num">1</text>
          <text class="icon-add"
                :class="index===key1? 'active' : ''"
                :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginLeft:'41px'}">{{"\ue644"}}</text>
          <text class="icon-tick"
                :class="index===key1? 'active' : ''"
                :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginLeft:'76px'}">{{index===key1? '\ue620':'\ue623'}}</text>
        </div>
      </div>
      <div class="service">
        <text class="service-title">茶水服务</text>
        <div class="service-wrapper"
             v-for="(item,index) in teaArr"
             @click="tick2(index)"
             :key="index">
          <text class="service-name">{{item}}</text>
          <text class="service-price">价格</text>
          <text class="icon-minus"
                :class="index===key2? 'active' : ''"
                :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginRight:'41px'}">{{"\ue642"}}</text>
          <text class="last-num">1</text>
          <text class="icon-add"
                :class="index===key2? 'active' : ''"
                :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginLeft:'41px'}">{{"\ue644"}}</text>
          <text class="icon-tick"
                :class="index===key2? 'active' : ''"
                :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginLeft:'76px'}">{{index===key2? '\ue620':'\ue623'}}</text>
        </div>
      </div>
      <div class="info">
        <text class="info-title">会议室活动说明</text>
        <div class="info-content">
          <text class="info-text">1、除会议室租金外，每间会议室需交押金N元</text>
          <text class="info-text">2、会议室位置：每个馆夹层处，配一大一小会议室</text>
          <text class="info-text">3、演讲台，主席台桌椅，签到桌，座椅，投影幕（注：使用其他设备和服务需要另付费用）</text>
          <text class="info-text">4、展商提交租赁表之后，组委会按照需求配会议室</text>
          <text class="info-text">5、组委会2日之内将会议室报价提供展商</text>
          <text class="info-text">6、确定好会议室之后，组委会和展商之间将签订《会议室租赁协议》，双方签字盖章</text>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="sum">
        <text class="total">总价</text>
        <text class="money">￥4900</text>
        <text class="rent">(租金N)</text>
      </div>
      <text class="pay-now">立即预约</text>
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
      title: '会议室预订',
      router: '/exhibitor',
      scaleArr: [
        {
          price: '120 m<sup style="font-size:12px;font-family: SimHei;font-weight:400;color:rgba(143,143,143,1);">2</sup>',
          desc: '价格'
        },
        {
          price: '120 m<sup style="font-size:12px;font-family: SimHei;font-weight:400;color:rgba(143,143,143,1);">2</sup>',
          desc: '价格'
        }
      ],
      euipArr: [
        '投影仪', '话筒'
      ],
      teaArr: ['茶水'],
      key1: '',
      key2: ''
    }
  },
  methods: {
    tick1 (index) {
      this.key1 = index
    },
    tick2 (index) {
      this.key2 = index
    }
  }
}
</script>

<style scoped>
.meeting-order {
  width: 750px;
  min-height: 100vh;
}
.content {
  flex: 1;
}
.apply {
  min-height: 510px;
  padding: 25px 0 27px 26px;
  border-bottom: 10px solid rgba(238, 238, 238, 1);
}
.apply-title {
  margin-bottom: 46px;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.apply-date {
  flex-direction: row;
  justify-content: center;
}
.number,
.unit {
  font-size: 36px;
  margin-right: 20px;
  margin-bottom: 79px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
}
.number {
  color: #333333;
  border-bottom: 3px solid rgba(71, 132, 198, 1);
}
.unit {
  color: #7c7c7c;
}
.apply-scale {
  flex-direction: row;
  justify-content: space-between;
  padding: 0 90px;
}
.apply-title-scale {
  margin-bottom: 37px;
}
.item {
  width: 212px;
  height: 135px;
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(227, 227, 227, 1);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
}
.price {
  margin-bottom: 17px;
}
.price,
.desc {
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(143, 143, 143, 1);
  line-height: 40px;
}
.select-num {
  padding-left: 125px;
  flex-direction: row;
  align-items: center;
}
.last-num {
  font-size: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(59, 59, 59, 1);
  line-height: 40px;
}
.service {
  width: 750px;
  border-bottom: 10px solid rgba(238, 238, 238, 1);
}
.service-title {
  height: 90px;
  line-height: 90px;
  padding-left: 23px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.service-wrapper {
  height: 90px;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  flex-direction: row;
  padding: 0 61px 0 23px;
  align-items: center;
}
.service-name {
  width: 96px;
  text-align: center;
  margin-right: 110px;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.service-price {
  margin-right: 123px;
  font-size: 26px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.active {
  color: rgba(69, 152, 240, 1) !important;
}
.info {
  padding-top: 27px;
}
.info-title {
  padding-left: 32px;
  margin-bottom: 28px;
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(52, 105, 162, 1);
}
.info-content {
  padding-left: 46px;
}
.info-text {
  font-size: 24px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(145, 145, 145, 1);
  line-height: 36px;
}
.footer {
  width: 750px;
  height: 96px;
  flex: 0;
  /**position: fixed;
  bottom: 0;**/
  flex-direction: row;
}
.sum {
  /**width: 71.6%;**/
  flex: 1;
  height: 96px;
  background: rgba(47, 145, 255, 1);
  flex-direction: row;
  justify-content: center;
}
.total,
.money,
.rent {
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 96px;
  text-align: center;
}
.total {
  font-size: 30px;
  margin-right: 28px;
}
.money {
  font-size: 36px;
  margin-right: 17px;
}
.rent {
  font-size: 24px;
}
.pay-now {
  width: 28.4%;
  height: 96px;
  background: rgba(71, 132, 198, 1);
  text-align: center;
  font-size: 36px;
  font-family: DengXian;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 96px;
}
</style>
