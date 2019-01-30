<template>
  <div class="nav">
    <text class="text-nav"
          v-for="(item, index) in nav"
          :key="index"
          @click="jump(index)"
          :style="{color:(index === key ? color : ''),fontWeight:(index === key ? fontWeight : '')}"
          :class="[index === key ? 'active' : '',{'text-style':isStyle}]">{{item}}</text>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array,
    color: String,
    fontWeight: Number,
    isStyle: {
      type: Boolean,
      default: true
    },
    nextRouter: Array
  },
  data () {
    return {
      key: 0
    }
  },
  methods: {
    jump (index) {
      this.key = index
      this.$router.push(this.nextRouter[index])
    }
  }
}
</script>

<style scoped>
.nav {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 750px;
  height: 90px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
}
.text-nav {
  line-height: 70px;
}
.text-style {
  font-size: 30px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
}
.active {
  color: rgba(8, 117, 209, 1);
  border-bottom: 4px solid rgba(8, 117, 209, 1);
}
</style>
