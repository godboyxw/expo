<template>
  <div class="food">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="content">
      <restaurant v-for="(item,index) in restaurant"
                  :key="index"
                  :restaurant="item"></restaurant>
    </div>
  </div>
</template>

<script>
import restaurant from './restaurant.vue'
import headerTop from '../Common/headerTop'
export default {
  components: {
    restaurant,
    headerTop
  },
  data () {
    return {
      restaurant: [
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        },
        {
          src: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=242644262,3967460579&fm=85&s=C7220CE21E35119A4B99253A0300F0D2',
          title: '德克士',
          location: 'A1-015 A1馆前廊道'
        }
      ],
      title: '餐饮预订',
      router: '/'
    }
  }
}
</script>

<style scoped>
.food {
  width: 750px;
}
.content {
  border-top: 22px solid #eeeeee;
}
</style>
