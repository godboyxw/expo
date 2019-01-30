<template>
  <div class="star">
    <div class="item"
         v-for="(item,index) in 5"
         :key="index">
      <text :style="{fontFamily:'iconfont',fontSize:'16px',color:(index < Math.round(star) ? '#FF750E' : '')}">{{'\ue667'}}</text>
    </div>
  </div>
</template>

<script>
// var integer = Math.round(this.rating * 2) / 2
// if (integer % 2 !==0){
//   var decimal =
// }
export default {
  props: {
    star: {
      type: Number,
      default: 4.9
    }
  }

}
</script>

<style scoped>
.star {
  flex-direction: row;
}
.item {
  margin-right: 5px;
}
.item:last-child {
  margin-right: 0px;
}
</style>
