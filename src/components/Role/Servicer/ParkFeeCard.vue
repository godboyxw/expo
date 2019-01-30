<template>
  <div class="card">
    <div class="top"
         :style="{backgroundColor:backgroundColor1}"></div>
    <div class="main">
      <text class="name">{{info.name}}</text>
      <div class="brand">
        <text class="icon-brand"
              :style="{fontFamily:'iconfont',color:'rgba(67,67,67,1)',fontSize:'38px',marginRight:'19px'}">{{"\ue65f"}}</text>
        <text class="brand-text">车辆</text>
        <text class="brand-no">{{info.brandNo}}</text>
      </div>
      <div class="time">
        <text class="icon-time"
              :style="{fontFamily:'iconfont',color:'rgba(67,67,67,1)',fontSize:'32px',marginRight:'13px'}">{{"\ue660"}}</text>
        <text class="time-text">时间</text>
        <text class="time-duration">{{info.timeDuration}}</text>
      </div>
      <text class="date">{{info.date}}</text>
      <div class="money">
        <text class="total">{{info.total}}</text>
        <text class="unit">元</text>
      </div>
    </div>
    <div class="bottom">
      <text class="status"
            :style="{color:color}">{{info.status}}</text>
      <text class="btn"
            :style="{backgroundColor:backgroundColor2}">{{info.btn}}</text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor1: {
      type: String,
      default: 'rgba(146, 152, 173, 1)'
    },
    info: {
      type: Object,
      default: () => {
        return {
          name: '国博停车场 B68号',
          brandNo: '鄂A23894',
          timeDuration: '10:23 ——16:40',
          date: '2018-6-18',
          total: '20.00',
          status: '已结束',
          btn: '反馈'
        }
      }
    },
    color: String,
    backgroundColor2: String
  },
  methods: {
    nextTo () {
      console.log('11')
      this.$router.push('/servicer/park/details')
    }
  }
}
</script>

<style scoped>
.card {
  width: 656px;
  box-shadow: 0 0 3px 0 #ccc;
}
.top {
  width: 656px;
  height: 10px;
  border-radius: 4px 4px 0px 0px;
}
.main {
  position: relative;
  width: 656px;
  padding-top: 34px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}
.name {
  margin-left: 32px;
  margin-bottom: 60px;
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
}
.brand,
.time {
  flex-direction: row;
  align-items: center;
  margin-left: 38px;
}
.brand {
  margin-bottom: 36px;
}
.time {
  margin-bottom: 32px;
}
.brand-text,
.brand-no,
.time-text,
.time-duration {
  font-size: 22px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(58, 58, 58, 1);
}
.brand-text {
  margin-right: 23px;
}
.time-text {
  margin-right: 28px;
}
.date {
  position: absolute;
  right: 26px;
  top: 16px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
}
.money {
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 24px;
  right: 41px;
}
.total,
.unit {
  font-size: 36px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(165, 165, 165, 1);
}
.unit {
  font-size: 24px;
}
.bottom {
  height: 80px;
  padding-left: 41px;
  padding-right: 31px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(238, 238, 238, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
}
.status {
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(165, 165, 165, 1);
}
.btn {
  width: 158px;
  height: 50px;
  border-radius: 10px;
  background: rgba(122, 137, 156, 1);
  font-size: 24px;
  text-align: center;
  line-height: 50px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
</style>
