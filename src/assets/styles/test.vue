<template>
  <wxc-button text="Confirm" type="blue" :disabled=disable
              @wxcButtonClicked="wxcButtonClicked"></wxc-button>
</template>

<script>
  import { WxcButton } from 'weex-ui'
  export default {
    components: { WxcButton },
    data(){
        return {disable:"flase"}
    },
    methods: {
      wxcButtonClicked (e) {
        console.log(e)
        console.log(this)
        this.disable="true"
      }
    }
  }
</script>