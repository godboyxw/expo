<template>
  <div class="mortal">
    <div class='container'
         v-if="display1">
      <div class="icon"
           v-for="(item,index) in arrSlice1"
           :key="index"
           @click="jump(index,router)">
        <div class="avatar">
          <image style="width:84px;height:84px;"
                 resize="stretch"
                 src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg" />
        </div>
        <text class="text1">{{item}}</text>
      </div>
      <div class="bnt"
           v-if="arr.length > 9 && isShow"
           @click="right">
        <div class="bnt-l">
        </div>
        <div class="bnt-s"
             @click="right">
        </div>
      </div>
    </div>
    <div class='container'
         v-show="isShow"
         v-if="display2">
      <div class="icon"
           v-for="(item,key) in arrSlice2"
           :key="key">
        <div class="avatar">
          <image style="width:84px;height:84px;"
                 resize="stretch"
                 src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg" />
        </div>
        <text class="text1">{{item}}</text>
      </div>
      <div class="bnt">
        <div class="bnt-s bnt-2"
             @click="left"></div>
        <div class="bnt-l "
             @click="left"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => {
        return ['展会信息', '去买票', '餐饮预定', '媒体资讯', '泊车寻车', '问题反馈', '全景国博', '通勤车查询', '行李托管', '展品运输', '清洁服务', '清洁服务', '清洁服务', '清洁服务']
      }
    },
    isShow: {
      type: Boolean,
      default: true
    },
    numSlice: {
      type: Number,
      default: 9
    },
    router: Array
  },
  data () {
    return {
      arrSlice1: [],
      arrSlice2: [],
      display1: true,
      display2: false
    }
  },
  mounted () {
    this.arrSlice1 = this.arr.slice(0, this.numSlice)
    this.arrSlice2 = this.arr.slice(this.numSlice, this.arr.length)
  },
  methods: {
    right () {
      this.display1 = false
      this.display2 = true
    },
    left () {
      this.display1 = true
      this.display2 = false
    },
    jump (index, router) {
      this.$router.push(router[index])
    }
  }
}

</script>

<style scoped >
.container {
  width: 672px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 79px;
  padding-right: 60px;
  padding-bottom: 68px;
  padding-left: 60px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 16px 5px rgba(53, 53, 53, 0.35);
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.bnt {
  position: absolute;
  bottom: 52px;
  left: 350px;
  flex-direction: row;
}
.bnt-l {
  width: 20px;
  height: 10px;
  background: rgba(95, 67, 220, 1);
  border-radius: 5px;
}
.bnt-s {
  width: 10px;
  height: 10px;
  background: rgba(98, 162, 252, 1);
  border-radius: 50%;
  margin-left: 10px;
}
.bnt-2 {
  margin-right: 10px;
  margin-left: 0;
}
.icon {
  width: 33.33%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.avatar {
  width: 84px;
  height: 84px;
  margin-bottom: 13px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(65, 95, 255, 1);
  border-radius: 42px;
  overflow: hidden;
}
.text1 {
  height: 52px;
  font-size: 28px;
  font-family: DengXian;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 60px;
}
</style>
