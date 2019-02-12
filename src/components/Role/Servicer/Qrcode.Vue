<template>
  <div class="container">
    <qrcode-vue :value="value"
                :size="size"
                level="H"
                className="qrcode-vue"
                background="#FFFFFF"></qrcode-vue>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  props: {
    value: {
      type: String,
      default: 'https://www.baidu.com'
    },
    size: {
      type: Number,
      default: 380
    }
  }
}
</script>

<style scoped>
.container {
  width: 440px;
  height: 440px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
}
</style>
