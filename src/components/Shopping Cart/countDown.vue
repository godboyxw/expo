<template>
  <div>
    <div class="text-wrapper">
      <!--{{timer}}-->
      <text class="text">{{h0}}</text>
      <text class="text">{{h1}}</text>
      <text class="dot">:</text>
      <text class="text">{{m0}}</text>
      <text class="text">{{m1}}</text>
      <text class="dot">:</text>
      <text class="text">{{s0}}</text>
      <text class="text">{{s1}}</text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      h: '',
      h0: '',
      h1: '',
      m: '',
      m0: '',
      m1: '',
      s: '',
      s0: '',
      s1: '',
      timer: '',
      leftTime: ''
    }
  },
  methods: {
    getZero (num) {
      return num < 10 ? '0' + num : '' + num
    },
    countDown () {
      var date = new Date()
      var now = date.getTime()
      var str = '2019/3/1 11:02:00'
      var endDate = new Date(str)
      this.leftTime = endDate - now
      if (this.leftTime > 0) {
        // this.d = this.getZero(Math.floor(leftTime / 1000 / 60 / 60 / 24))
        this.h = this.getZero(Math.floor(this.leftTime / 1000 / 60 / 60 % 24))
        this.m = this.getZero(Math.floor(this.leftTime / 1000 / 60 % 60))
        this.s = this.getZero(Math.floor(this.leftTime / 1000 % 60))
      }
      this.timer = `${this.h}:${this.m}:${this.s}`
      this.h0 = this.h.slice(0, 1)
      this.h1 = this.h.slice(1)
      this.m0 = this.m.slice(0, 1)
      this.m1 = this.m.slice(1)
      this.s0 = this.s.slice(0, 1)
      this.s1 = this.s.slice(1)
    }
  },
  mounted () {
    this.countDown()
    setInterval(this.countDown, 1000)
    if (this.leftTime <= 0) {
      clearInterval(this.countDown)
    }
    // console.log(this.leftTime)
    // console.log(this.h)
    // console.log(typeof this.h, this.h.slice(1))
  }
}
</script>

<style scoped>
.text-wrapper {
  flex-direction: row;
}
.text {
  margin-right: 8px;
  text-align: center;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 1);
}
.dot {
  width: 15px;
  height: 30px;
  margin-bottom: 5px;
  font-size: 26px;
  line-height: 20px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
</style>
