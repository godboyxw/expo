<template>
  <div class="card-btn"
       :style="{width:width}">
    <div class="select-amount"
         @click="chooseChild"
         :class="isActive? 'active1': ''">
      <text class="amount"
            :class="isActive? 'active1': ''">{{amount}}</text>
      <text class="scale"
            :class="isActive? 'active1': ''">{{scale}}</text>
      <text class="price"
            :class="isActive? 'active2': ''">价格</text>
      <div class="icon-choosen"
           v-if="choosenShow"
           :style="{fontFamily:'iconfont',color:'#4784C6',fontSize:'20px',position:'absolute',right:'0',bottom:'0'}">{{"\ue63c"}}
      </div>
    </div>
    <div class="select-num">
      <text class="icon-minus"
            @click="chooseChildIcon1"
            :class="isActiveIcon1? 'active3': ''"
            :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginRight:'41px'}">{{"\ue642"}}</text>
      <text class="last-num">{{Num}}</text>
      <text class="icon-add"
            @click="chooseChildIcon2"
            :class="isActiveIcon2? 'active3': ''"
            :style="{fontFamily:'iconfont',color:'rgba(220,220,220,1)',fontSize:'30px',marginLeft:'41px'}">{{"\ue644"}}</text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    amount: String,
    scale: String,
    width: String,
    choosenShow: Boolean
  },
  data () {
    return {
      isActive: false,
      isActiveIcon1: false,
      isActiveIcon2: false,
      Num: 0
    }
  },
  methods: {
    chooseChild () {
      this.isActive = !this.isActive
    },
    chooseChildIcon1 () {
      this.isActiveIcon1 = true
      this.isActive = true
      this.Num--
    },
    chooseChildIcon2 () {
      this.isActiveIcon2 = true
      this.isActive = true
      this.Num++
    }
  },
  watch: {
    Num (u, v) {
      // console.log(u)
      u = u < 0 ? 0 : u
      this.Num = u
      if (this.Num === 0) {
        this.isActiveIcon1 = false
        this.isActiveIcon2 = false
        this.isActive = false
      }
    }
  }
}
</script>

<style scoped>
.select-amount {
  width: 212px;
  height: 135px;
  margin-bottom: 24px;
  position: relative;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(227, 227, 227, 1);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
}
.amount,
.scale {
  font-size: 30px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(89, 89, 89, 1);
  line-height: 40px;
}
.price {
  font-size: 26px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(143, 143, 143, 1);
  line-height: 40px;
}
.select-num {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: 26.2px;
}
.last-num {
  font-size: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(59, 59, 59, 1);
  line-height: 40px;
}
.active1 {
  border-color: rgba(71, 132, 198, 1) !important;
  color: rgba(71, 132, 198, 1) !important;
}
.active2 {
  color: rgba(255, 59, 64, 1) !important;
}
.active3 {
  color: rgba(69, 152, 240, 1) !important;
}
</style>
