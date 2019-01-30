<template>
  <div>
    <div class="item"
         v-for="(item,index) in Item"
         :key="index">
      <Item :Item="item"
            :nameShow="nameShow"
            :priceShow="priceShow"></Item>
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
      nameShow: false,
      priceShow: true,
      Item: [
        {
          src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=435040372,2497579862&fm=85&s=35B65594A45BD7CE16B845170300D0E3',
          title: '武汉洲际酒店',
          star: 4.9,
          rating: '4.9分',
          price: '1216',
          location: '位于晴川大道666号',
          distance: '0.2km'
        },
        {
          src: 'https://paimgcdn.baidu.com/1086837587D57FB9?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1398477613.jpg&rz=urar_2_968_600&v=0',
          title: '武汉世茂希尔顿酒店',
          star: 4.2,
          rating: '4.2分',
          price: '1216',
          location: '位于滨江大道190号',
          distance: '4km'
        },
        {
          src: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2513921855,2403534568&fm=202&src=608&mola=new&crop=v1',
          title: '武汉联投半岛酒店',
          star: 3.8,
          rating: '3.8分',
          price: '1216',
          location: '位于户部巷昙华林',
          distance: '11km'
        },
        {
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2256507767,3215996289&fm=58&bpow=523&bpoh=556',
          title: '武汉豪生国际酒店',
          star: 2.7,
          rating: '2.7分',
          price: '1216',
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
