<template>
  <div class="container">
    <div class="avatar">
      <image class="image"
             :src="desc.src" />
    </div>
    <div class="desc">
      <text class="text1">{{desc.desc}}</text>
      <div class="text-desc">
        <text class="text2 discount1">{{desc.discount1}}</text>
        <text class="text2 discount1">{{desc.discount1}}</text>
      </div>
      <div class="text-desc">
        <text class="text3">租赁价：</text>
        <text class="price">{{desc.price}}</text>
        <text class="text3">元/天</text>
      </div>
      <div class="btn">
        <text class="text4"
              @click="sell"
              ref="child">立即租赁</text>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../util/vue-bus.js'
export default {
  props: {
    desc: {
      type: Object,
      default: () => {
        return {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1785607224.jpg',
          desc: '麒麟叶',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥25'
        }
      }
    }
  },
  data () {
    return {
      none: true
    }
  },
  methods: {
    sell () {
      EventBus.$emit('show', this.none)
    }
  }
}
</script>

<style scoped>
.container {
  width: 328px;
}
.avatar {
  width: 328px;
  height: 232px;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}
.image {
  width: 328px;
  height: 232px;
}
.desc {
  width: 328px;
  height: 210px;
  padding-top: 10px;
  background: rgba(155, 194, 228, 1);
  border-radius: 0 0 8px 8px;
}
.text1 {
  font-size: 24px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-bottom: 8px;
}
.text-desc {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}
.text2 {
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(251, 80, 83, 1);
  text-align: center;
}
.discount1 {
  margin-right: 20px;
}
.discount2 {
  margin-left: 20px;
}
.text3 {
  font-size: 24px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.price {
  font-size: 30px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: #fb5053;
  text-align: center;
}
.btn {
  width: 200px;
  height: 50px;
  background: rgba(251, 80, 83, 1);
  border-radius: 25px;
  margin: 0 auto;
  margin-bottom: 4px;
}
.text4 {
  font-size: 24px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(238, 238, 238, 1);
  text-align: center;
  line-height: 50px;
}
</style>
