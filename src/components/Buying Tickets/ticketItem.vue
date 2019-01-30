<template>
  <div class="ticketItem">
    <image class="image"
           :src="ticketItem.src"
           @click="next" />
    <div class="info">
      <text class="desc">{{ticketItem.desc}}</text>
      <text class="date">{{ticketItem.date}}</text>
      <div class="price-wrapper">
        <text class="dollar">¥</text>
        <text class="price">{{ticketItem.price}}</text>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../util/vue-bus.js'
export default {
  props: {
    ticketItem: {
      type: Object,
      default: () => {
        return {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1534377571,3861542&fm=58&bpow=940&bpoh=600',
          desc: '2018中国国际文化娱乐…',
          date: '2018/7/6—2018/7/8',
          price: '120'
        }
      }
    }
  },
  methods: {
    next () {
      // 子组件向父组件传值
      EventBus.$emit('to')
    }
  }
}
</script>

<style scoped>
.ticketItem {
  width: 656px;
  height: 220px;
  padding: 30px 0 30px 20px;
  flex-direction: row;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(8, 117, 209, 0.36);
  border-radius: 10px;
}
.image {
  width: 240px;
  height: 160px;
}
.info {
  flex: 1;
  padding-left: 22px;
}
.desc {
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 34px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(63, 63, 63, 1);
}
.date {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 49px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(131, 131, 131, 1);
}
.price-wrapper {
  flex-direction: row;
  align-items: center;
}
.dollar {
  font-size: 24px;
  line-height: 28px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(251, 80, 83, 1);
}
.price {
  font-size: 32px;
  line-height: 32px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(251, 80, 83, 1);
}
</style>
