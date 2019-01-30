<template>
  <div class="container">
    <div class="wrapper">
      <card v-for="(item, index) in arr"
            :key="index"
            :desc="item"
            class="card"></card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  data () {
    return {
      arr: [
        {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          desc: '麒麟叶',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥25'
        },
        {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          desc: '金钻蔓绿绒',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥15'
        },
        {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          desc: '麒麟叶',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥25'
        },
        {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          desc: '麒麟叶',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥25'
        },
        {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          desc: '金钻蔓绿绒',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥15'
        },
        {
          src: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1750072895.jpg',
          desc: '金钻蔓绿绒',
          discount1: '租5送2',
          discount2: '租7送3',
          price: '¥15'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 750px;
}
.wrapper {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 24px 0 24px;
}
.card {
  width: 328px;
  margin-bottom: 20px;
}
</style>
