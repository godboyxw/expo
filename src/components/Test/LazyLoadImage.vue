<template>
  <div class="wrapper">
    <div class="container"
         @click="loadImage">
      <image class="image"
             v-if="src"
             :src="src"
             resize="cover"></image>
      <text class="alt"
            v-else>Click to load image</text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: ''
    }
  },
  methods: {
    loadImage () {
      if (!this.src) {
        this.src = 'https://cdn.dribbble.com/users/179241/screenshots/1829868/nerfwarrior_dribbble.png'
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.container {
  width: 602px;
  height: 602px;
  border-width: 2px;
  border-color: #ddd;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
}
.image {
  width: 600px;
  height: 600px;
}
.alt {
  font-size: 50px;
  color: #aaa;
}
</style>
