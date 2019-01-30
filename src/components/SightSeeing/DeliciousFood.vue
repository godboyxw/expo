<template>
  <div>
    <div class="item"
         v-for="(item,index) in Item"
         :key="index">
      <Item :Item="item"></Item>
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
      Item: [
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2106817016,1668206427&fm=85&app=57&f=JPEG?w=121&h=75&s=6F2201C37467BCFE4A7959140300E0C1',
          title: '户部巷小吃一条街',
          star: 4.9,
          rating: '4.9分',
          name: '美食街区',
          location: '位于户部巷昙华林',
          distance: '11km'
        },
        {
          src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=517099122,1221504003&fm=58&bpow=500&bpoh=440',
          title: '周黑鸭(江汉路店)',
          star: 4.2,
          rating: '4.2分',
          name: '特色小吃',
          location: '位于江汉路沿江大道',
          distance: '11.3km'
        },
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3034284638,3008439384&fm=58&bpow=400&bpoh=300',
          title: '四季美汤包',
          star: 3.8,
          rating: '3.8分',
          name: '特色小吃',
          location: '位于户部巷昙华林',
          distance: '11km'
        },
        {
          src: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2003436584,1588360886&fm=202&src=608&mola=new&crop=v1',
          title: '巴厘龙虾',
          star: 2.7,
          rating: '2.7分',
          name: '美食街区',
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
