<template>
  <div class="home">
    <div class="header">
      <text class="text">{{txt}}</text>
    </div>
    <Mortal class="mortal"
            :arr="arr"
            :isShow="isShow"
            :numSlice="numSlice"
            :router="router">
    </Mortal>
    <div class="tab">
      <router-link to="/"><text class="txt active">举办方</text></router-link>
      <router-link to="/display"><text class="txt">参展商</text></router-link>
      <router-link to="/service"><text class="txt">服务商</text></router-link>
    </div>
  </div>
</template>

<script>
import Mortal from '../Common/Mortal.vue'
// var stream = weex.requireModule('stream')
// var modal = weex.requireModule('modal')
export default {
  components: {
    Mortal
  },
  data () {
    return {
      arr: ['展会信息', '去买票', '餐饮预定', '媒体资讯', '泊车寻车', '问题反馈', '通勤车查询', '全景国博', '行李托管', '展品运输', '清洁服务', '清洁服务', '清洁服务', '清洁服务'],
      // arr: [],
      // arr : '',
      isShow: true,
      numSlice: 9,
      router: ['/producer', '/tickets', '/food', '/news', '/tools', '/advice', '/transport'],
      txt: '武汉国际博览中心'
    }
  }
  // created () {
  //   var me = this
  //   var GET_URL = 'http://localhost:3000/homeData'
  //   this.$nextTick(function () {
  //     stream.fetch({
  //       method: 'GET',
  //       url: GET_URL,
  //       type: 'jsonp'
  //     }, function (res) {
  //       console.log(res)
  //       const { data } = res
  //       if (!res.ok) {
  //         modal.toast({
  //           message: '请求失败',
  //           duration: 0.3
  //         })
  //       } else {
  //         console.log(res.data)
  //         me.txt = data.txt
  //         me.arr = data.arr
  //         // console.log(me.arr)
  //         modal.toast({
  //           message: '请求成功',
  //           duration: 0.3
  //         })
  //       }
  //     })
  //   })
  // },
  // watch: {
  //   arr (u, v) {
  //     console.log(u)
  //     this.arr = u
  //   }
  // }
}
</script>

<style scoped>
.home {
  width: 750px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
}
.header {
  width: 750px;
  height: 500px;
  background: linear-gradient(
    0deg,
    rgba(76, 187, 250, 1) 0%,
    rgba(127, 132, 255, 1) 78%
  );
}
.text {
  /*width: 750px;
  line-height: 40px;
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ffffff;
  padding-left: 24px;
  padding-top: 72px;*/
  position: absolute;
  top: 50px;
  left: 30px;
  font-size: 36px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
.mortal {
  margin: 0 auto;
  position: absolute;
  left: 39px;
  top: 400px;
  z-index: 100;
}
.tab {
  width: 750px;
  height: 96px;
  flex-direction: row;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  z-index: 200;
}
.txt {
  width: 250px;
  height: 96px;
  line-height: 96px;
  flex: 1;
  text-align: center;
  font-size: 28px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.active {
  color: red;
}
</style>
