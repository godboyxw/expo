<template>
  <div class="container-box">
    <div class="content">
      <headerTop :title="title"
                 :router="router"></headerTop>
      <div class="content-cart">
        <cart v-for="(item, index) in arr"
              :key="index"
              :obj="item"></cart>
      </div>
    </div>
    <div class="footer">
      <text class="total">总金额 ¥5965.00</text>
      <text class="account"
            @click="jump">结算</text>
    </div>
  </div>
</template>

<script>
import cart from './cart'
import headerTop from '../Common/headerTop'
export default {
  components: {
    cart,
    headerTop
  },
  data () {
    return {
      arr: [
        {
          src: 'http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg',
          desc: '艾博斯（Airproce） 空气净化器AL-730',
          rent: 300,
          deposit: 500
        },
        {
          src: 'http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg',
          desc: '艾博斯（Airproce） 空气净化器AL-730',
          rent: 300,
          deposit: 500
        },
        {
          src: 'http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg',
          desc: '艾博斯（Airproce） 空气净化器AL-730',
          rent: 300,
          deposit: 500
        },
        {
          src: 'http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg',
          desc: '艾博斯（Airproce） 空气净化器AL-730',
          rent: 300,
          deposit: 500
        },
        {
          src: 'http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg',
          desc: '艾博斯（Airproce） 空气净化器AL-730',
          rent: 300,
          deposit: 500
        }
      ],
      title: '购物车',
      router: '/tools'
    }
  },
  methods: {
    back () {
      this.$router.push('/tools')
    },
    jump () {
      this.$router.push('/shopping/order')
    }
  }
}
</script>

<style scoped>
.container-box {
  width: 750px;
  margin: 0 auto;
  /**padding-top:106px;**/
  min-height: 100vh;
}
.content {
  flex: 1;
}
.footer {
  /** position: fixed;
    bottom:0;
    left:0;
    right:0;**/
  flex: 0;
  /**height:146px;**/
}
.total {
  width: 750px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  border-top: 6px solid #eeeeee;
  text-align: center;
  line-height: 50px;
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
}
.account {
  width: 750px;
  height: 90px;
  background: rgba(8, 117, 209, 1);
  text-align: center;
  line-height: 90px;
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
