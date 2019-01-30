<template>
  <div class="food-order">
    <headerTop :title="title"
               :router="router"></headerTop>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      title: '餐饮预订',
      router: '/exhibitor'
    }
  }
}
</script>

<style scoped>
</style>
