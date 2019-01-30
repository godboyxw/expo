<template>
  <div class="wrapper">
    <div class="content">
      <headerTop :title="title"
                 :router="router">
      </headerTop>
      <slider class="banner"
              interval="1300"
              auto-play="true">
        <div class="images"
             v-for="(item, index2) in images"
             :key="index2">
          <image :src="item"
                 style="width:660px;height:288px;" />
        </div>
        <!-- <div class="banner-point">
          <div class="point"
               v-for="(item, index) in images"
               :key="index"
               :class="index===n?'active':''"
               @click="to(index)">
          </div> -->
        <!-- </div> -->
        <indicator class="indicator"></indicator>
      </slider>
      <div class="desc"><text class="desc_text">索尼a5100相机（含15-45mm镜头）</text></div>
      <div class="detail"><text class="detail_text">产品详情</text></div>
      <div class="info">
        <image style="width:660px;height:300px"
               src="http://img2.imgtn.bdimg.com/it/u=985885405,2696595433&fm=11&gp=0.jpg" />
        <text class="info_text">精彩细节展示</text>
        <image style="width:660px;height:300px"
               src="http://img2.imgtn.bdimg.com/it/u=985885405,2696595433&fm=11&gp=0.jpg" />
        <text class="info_text">精彩细节展示</text>
      </div>
    </div>
    <div class="footer">
      <text class="console">咨询</text>
      <text class="sell">商城预售</text>
    </div>
  </div>
</template>

<script>
import headerTop from '../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      images: [
        'http://img2.imgtn.bdimg.com/it/u=985885405,2696595433&fm=11&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=213393664,836106695&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=1111535253,3346060279&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2235080884,1902957669&fm=200&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=2405186627,2703499517&fm=200&gp=0.jpg'
      ],
      n: 0,
      title: '索尼展商',
      router: '/goods'
    }
  },
  methods: {
    add () {
      this.n++
      this.n %= this.images.length
    },
    to (index) {
      this.n = index
    }

  },
  mounted () {
    setInterval(() => {
      this.add()
    }, 1300)
  }

}
</script>

<style scoped>
.wrapper {
  width: 750px;
  min-height: 100vh;
}
.content {
  flex: 1;
}
.banner {
  width: 750px;
  height: 420px;
  background: rgba(255, 255, 255, 1);
  position: relative;
  border-bottom: 1px solid #eeeeee;
}
.images {
  width: 750px;
  height: 420px;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height: 700px;
  border-width: 2px;
  border-style: solid;
  border-color: #41b883;
}
.indicator {
  width: 138px;
  height: 700px;
  item-color: rgba(229, 229, 229, 1);
  item-selected-color: rgba(144, 218, 203, 1);
  item-size: 12px;
  position: absolute;
  left: 306px;
  top: 18px;
}
/* .banner-point {
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  width: 138px;
  left: 306px;
  bottom: 18px;
}
.point {
  width: 12px;
  height: 12px;
  background: rgba(229, 229, 229, 1);
  border-radius: 50%;
} */
.active {
  background: rgba(144, 218, 203, 1);
}
.desc {
  width: 750px;
  height: 120px;
  background: rgba(255, 255, 255, 1);
  padding-left: 34px;
  justify-content: center;
}
.desc_text {
  line-height: 36px;
  font-size: 36px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(68, 68, 68, 1);
}
.detail {
  width: 750px;
  height: 90px;
  background: rgba(255, 255, 255, 1);
  padding-left: 51px;
  justify-content: center;
}
.detail_text {
  line-height: 29px;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
}
.info {
  width: 750px;
  background: rgba(255, 255, 255, 1);
  justify-content: center;
  align-items: center;
}
.info_text {
  margin-top: 90px;
}
.footer {
  flex: 0;
  width: 750px;
  height: 96px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
}
.console,
.sell {
  height: 96px;
  font-size: 30px;
  line-height: 96px;
  text-align: center;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
}
.console {
  width: 200px;
  background: rgba(255, 255, 255, 1);
}
.sell {
  flex: 1;
  background: rgba(29, 141, 243, 1);
}
</style>
