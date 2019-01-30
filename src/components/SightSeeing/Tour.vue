<template>
  <div>
    <div class="item"
         v-for="(item,index) in Item"
         :key="index">
      <Item :Item="item"
            :iconShow="iconShow"></Item>
    </div>
  </div>
</template>

<script>
import Item from './Item'
export default {
  components: {
    Item
  },
  data () {
    return {
      iconShow: true,
      Item: [
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4031929349,3632339593&fm=179&app=42&f=JPEG?w=121&h=140',
          title: '中国地质大学逸夫博...',
          star: 4.9,
          rating: '4.9分',
          name: '历史文化',
          location: '32.7万人',
          distance: '1.3km'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=546628618,855678209&fm=58&bpow=580&bpoh=388',
          title: '武汉黄鹤楼公园',
          star: 4.2,
          rating: '4.2分',
          name: '历史文化',
          location: '32.7万人',
          distance: '3.3km'
        },
        {
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=544156737,3067228333&fm=27&gp=0.jpg',
          title: '武汉木兰云雾山',
          star: 3.8,
          rating: '3.8分',
          name: '历史文化',
          location: '32.7万人',
          distance: '11km'
        },
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4195507946,503228440&fm=58&bpow=1024&bpoh=768',
          title: '辛亥革命纪念馆',
          star: 2.7,
          rating: '2.7分',
          name: '历史文化',
          location: '位于户部巷昙华林',
          distance: '11km'
        }
      ]
    }
  }
}
</script>

<style scoped>
.item {
  margin-top: 20px;
}
</style>
