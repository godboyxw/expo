<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <div class="avatar">
          <image src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1977270962,2808007120&fm=5"
                 style="width:235px;height:236px;" />
        </div>
        <div class="info">
          <div class="price">
            <text class="price1">￥</text>
            <text class="price2">1200</text>
          </div>
          <text class="stock">库存214件</text>
          <text class="selection">选择 高度,数量</text>
        </div>
        <text class="icon-back"
              :style="{fontFamily:'iconfont',color:'gray',fontSize:'30px'}"
              @click="back">{{"\ue619"}}</text>
      </div>
      <div class="content-height">
        <text class="height">高度</text>
        <div class="height-selection">
          <text class="txt1"
                @click="choose(index)"
                :class="key1===index? 'active' :''"
                v-for="(item,index) in height"
                :key="index">{{item}}</text>
        </div>
      </div>
      <div class="content-count">
        <text class="count">数量</text>
        <div class="count-selection">
          <text class="txt2"
                @click="select(index)"
                v-show="!(index===3&&key2===3)"
                :class="key2===index? 'active' :''"
                v-for="(item,index) in count"
                :key="index">{{item}}</text>
          <input type="text"
                 placeholder="请输入盆数"
                 autofocus=true
                 style="placeholder-color: rgba(255, 255, 255, 1);"
                 class="input active"
                 ref="input1"
                 v-if="key2===3"
                 v-model="inputText" />
        </div>
      </div>
      <div class="confirm">
        <text class="txt3"
              @click="next">确定</text>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../util/vue-bus.js'
var modal = weex.requireModule('modal')
export default {
  data () {
    return {
      block: false,
      height: ['0.8m~1.0m', '1.0m~1.2m', '1.2m~1.5m'],
      count: ['10盆', '20盆', '30盆', '自定义盆数'],
      key1: '',
      key2: '',
      inputText: '' + '盆'
    }
  },
  methods: {
    back () {
      // this.$emit('show')
      EventBus.$emit('cancel', this.block)
      // console.log(1)
    },
    next () {
      if (this.key1 === '' || this.key2 === '') {
        modal.toast({
          message: '请选择高度和数量!',
          duration: 2
        })
      } else {
        this.$router.push('/shopping')
      }
    },
    choose (index) {
      this.key1 = index
    },
    select (index) {
      this.key2 = index
    }
    // blur () {
    //   this.$refs['input1'].value = this.inputText + '盆'
    // },
    // focus () {
    //   this.$refs['input1'].value = ''
    // }
    // setSelectionRange () {
    //   console.log(this.$refs['input1'])
    //   console.log(this.$refs.input1)
    //   this.$refs['input1'].setSelectionRange(0)
    // }
  }
  // computed: {
  // inputValue: {
  //   get () {
  //     return this.inputText + '盆'
  //   }
  // }
  // inputValue () {
  //   return this.inputText + '盆'
  // }
  // }
  // mounted () {
  //   this.$nextTick(() => {
  //     this.$refs.input1.value = this.inputValue + '盆'
  //   })
  // }
}
</script>

<style scoped>
.container {
  width: 750px;
  background: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.wrapper {
  width: 750px;
  height: 954px;
  margin: 0 auto;
  opacity: 1;
  background: #ffffff;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.header {
  height: 257px;
  flex-direction: row;
  padding-left: 25px;
  padding-right: 24px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
}
.avatar {
  width: 235px;
  height: 236px;
  position: relative;
  top: -40px;
  border-radius: 10px;
  overflow: hidden;
}
.info {
  flex: 1;
  margin-left: 51px;
}
.content {
  height: 697px;
}
.price {
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 15px;
}
.price1 {
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(251, 80, 83, 1);
}
.price2 {
  margin-left: 10px;
  font-size: 40px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 79, 0, 1);
}
.stock,
.selection {
  font-size: 26px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin-bottom: 10px;
}
.icon-back {
  margin-top: 40px;
}
.content-height {
  height: 207px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
}
.height {
  padding-left: 32px;
  padding-top: 60px;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.height-selection {
  flex-direction: row;
  padding: 0 33px 0 32px;
  align-items: center;
}
.txt1 {
  width: 160px;
  height: 56px;
  background: rgba(245, 245, 245, 1);
  border-radius: 10px;
  font-size: 26px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  line-height: 56px;
}
.txt1:nth-child(2) {
  margin: 0 81px;
}
.content-count {
  height: 294px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  padding-top: 41px;
  padding-top: 61px;
}
.count {
  padding-left: 31px;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.count-selection {
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 33px 0 32px;
}
.txt2,
.input {
  width: 160px;
  height: 56px;
  margin-right: 81px;
  margin-bottom: 30px;
  background: rgba(245, 245, 245, 1);
  border-radius: 10px;
  font-size: 26px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  line-height: 56px;
}
.input {
  outline: none;
  padding: 0;
}
.txt2:nth-child(3) {
  margin-right: 0;
}
.confirm {
  padding: 95px 0 10px 0;
}
.txt3 {
  width: 620px;
  height: 90px;
  margin: 0 auto;
  text-align: center;
  line-height: 90px;
  background: rgba(29, 141, 243, 1);
  border-radius: 45px;
  font-size: 36px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.active {
  background: rgba(29, 141, 243, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
