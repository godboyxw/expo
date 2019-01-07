<template>
  <div class="tickets">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="icon-search"
          :style="{fontFamily:'iconfont',color:'black',fontSize:'33px'}">{{"\ue615"}}</text>
    <div class="sort">
      <div class="box">
        <text class="text"
              :class="show ? 'active' : ''">综合排序</text>
        <text class="icon-back"
              @click="show = !show"
              :style="{fontFamily:'iconfont',color:'#555555',fontSize:'22px'}">{{show ? '\ue622' : '\ue61f'}}</text>
      </div>
      <div class="box">
        <text class="text">筛选</text>
        <text class="icon-back"
              :style="{fontFamily:'iconfont',color:'#555555',fontSize:'22px'}">{{"\ue61f"}}</text>
      </div>
      <list class="lists"
            v-if="show">
        <div v-for="(item,index) in lists"
             :key="index"
             class="cell"
             @click="key = index">
          <text class="cell-txt"
                :class="key === index? 'active' : ''">{{item}}</text>
          <text class="icon-tick"
                :style="{fontFamily:'iconfont',color:'#0875D1',fontSize:'38px'}">{{key === index ? '\ue620' : '\ue623'}}</text>
        </div>
      </list>
    </div>
    <ticketItem v-for="(item, index) in ticketItem"
                :key="index"
                :ticketItem="item"
                class="ticketItem"></ticketItem>
  </div>
</template>

<script>
import { EventBus } from '../../util/vue-bus.js'
import ticketItem from './ticketItem'
import headerTop from '../Common/headerTop'
export default {
  components: {
    ticketItem,
    headerTop
  },
  data () {
    return {
      ticketItem: [
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1534377571,3861542&fm=58&bpow=940&bpoh=600',
          desc: '2018中国国际文化娱乐…',
          date: '2018/7/6—2018/7/8',
          price: '120'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1534377571,3861542&fm=58&bpow=940&bpoh=600',
          desc: '2018中国国际文化娱乐…',
          date: '2018/7/6—2018/7/8',
          price: '120'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1534377571,3861542&fm=58&bpow=940&bpoh=600',
          desc: '2018中国国际文化娱乐…',
          date: '2018/7/6—2018/7/8',
          price: '120'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1534377571,3861542&fm=58&bpow=940&bpoh=600',
          desc: '2018中国国际文化娱乐…',
          date: '2018/7/6—2018/7/8',
          price: '120'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1534377571,3861542&fm=58&bpow=940&bpoh=600',
          desc: '2018中国国际文化娱乐…',
          date: '2018/7/6—2018/7/8',
          price: '120'
        }
      ],
      title: '展会门票',
      router: '/',
      lists: ['综合排序', '最近开场'],
      show: false,
      key: 0
    }
  },
  // methods:{
  //     to(){
  //         //this.$router.push('/')
  //         EventBus.$on()
  //     }
  // }
  created () {
    EventBus.$on('to', () => {
      this.$router.push('/tickets/detail')
    })
  }
}
</script>

<style scoped>
.tickets {
  position: relative;
}
.icon-search {
  position: absolute;
  top: 32px;
  right: 0;
}
.sort {
  width: 750px;
  height: 60px;
  padding: 0 124px;
  margin-bottom: 21px;
  border-top: 11px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  position: relative;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.box {
  flex-direction: row;
}
.text {
  margin-right: 25px;
  font-size: 26px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(102, 102, 102, 1);
  line-height: 25px;
}
.lists {
  flex-direction: row;
  position: absolute;
  background: rgba(255, 255, 255, 1);
  z-index: 100;
  left: 0;
  top: 60px;
}
.cell {
  width: 750px;
  height: 90px;
  padding-left: 40px;
  padding-right: 53px;
  border-bottom: 1px solid #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cell-txt {
  font-size: 28px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 26px;
}
.active {
  color: #0875d1;
}
.ticketItem {
  margin-bottom: 20px;
  align-self: center;
}
</style>
