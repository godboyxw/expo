<template>
  <div class="nav">
    <text class="text-nav"
          v-for="(item, index) in nav"
          :key="index"
          @click="jump(index)"
          :class="index === key ? 'active' : ''">{{item}}</text>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array
    }
  },
  data () {
    return {
      key: 0
    }
  },
  methods: {
    jump (index) {
      this.key = index
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
.active {
  color: rgba(8, 117, 209, 1);
  border-bottom: 4px solid rgba(8, 117, 209, 1);
}
</style>
