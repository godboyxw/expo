<template>
  <div class="page">
    <div class='content'>
      <div class='bar'>
        <text class='bar-txt'>武汉国际博览中心</text>
      </div>
      <div class='push'></div>
      <div class='main'>
        <input type='text'
               class='inp-text'
               placeholder='搜索展位、设施等' />
        <div class='iconfont icon-search'
             :style="{fontFamily:'iconfont',color:'rgba(153,153,153,1)',fontSize:'30px',position: 'absolute',left: '92px',top: '-18px'}">{{"\ue615"}}
        </div>
        <div class='entrance1'
             v-if="key!==9">
          <div v-for='(item, index) in descarr1'
               :key='index'
               @click="jumpTo1(index)"
               class='item1'>
            <text class="icon"
                  :style="{fontFamily:'iconfont',color:item.color,fontSize:'50px',marginBottom:'26px'}">{{item.fontName}}</text>
            <text class='txt1'>{{item.txt}}</text>
          </div>
        </div>

        <div class='entrance2'
             v-if="key===9">
          <div v-for='(item, index) in descarr2'
               :key='index'
               @click="jumpTo2(index)"
               class='item1'>
            <text class="icon"
                  :style="{fontFamily:'iconfont',color:item.color,fontSize:'50px',marginBottom:'26px'}">{{item.fontName}}</text>
            <text class='txt1'>{{item.txt}}</text>
          </div>
        </div>

        <div class='role'>
          <div v-for='(item, index) in rolearr'
               :key='index'
               @click="roleTo(index)"
               class='item2'>
            <text class='txt2'>{{item.txt}}</text>
            <text class="icon"
                  :style="{fontFamily:'iconfont',color:item.color,fontSize:'30px'}">{{item.fontName}}</text>
          </div>
        </div>
      </div>
      <div class='ads'>
        <slider class="slider"
                style="width: 672px;height: 160px;"
                interval="2000"
                auto-play="true">
          <div class="frame"
               style="width: 672px;height: 160px;"
               v-for="(item,index) in imageList1"
               :key="index">
            <text class="ads-desc1">{{item.desc1}}</text>
            <text class="ads-desc2">{{item.desc2}}</text>
            <image class="image"
                   style="width: 672px;height: 160px;"
                   resize="stretch"
                   :src="item.img"></image>
          </div>
        </slider>
        <text class="slider-icon"
              :style="{fontFamily:'iconfont',fontSize:'30px',color:'#ffffff'}">{{'\ue648'}}</text>
        <div class="ads-btn-wrapper">
          <text class="ads-btn">广告</text>
        </div>
      </div>
      <div class='ads'>
        <slider class="
                slider"
                style="width: 672px;height: 160px;"
                interval="2000"
                auto-play="true">
          <div class="frame"
               style="width: 672px;height: 160px;"
               v-for="(item,index) in imageList2"
               :key="index">
            <text class="ads-desc3">{{item.desc1}}</text>
            <text class="ads-desc4">{{item.desc2}}</text>
            <image class="image"
                   style="width: 672px;height: 160px;"
                   resize="stretch"
                   :src="item.img"></image>
          </div>
        </slider>
        <text class="slider-icon"
              :style="{fontFamily:'iconfont',fontSize:'30px',color:'#ffffff'}">{{'\ue648'}}</text>
      </div>
      <div class='ads'>
        <slider class="slider"
                style="width: 672px;height: 160px;"
                interval="2000"
                auto-play="true">
          <div class="frame"
               style="width: 672px;height: 160px;"
               v-for="(item,index) in imageList3"
               :key="index">
            <text class="ads-desc5">{{item.desc1}}</text>
            <text class="ads-desc6">{{item.desc2}}</text>
            <image class="image"
                   style="width: 672px;height: 160px;"
                   resize="stretch"
                   :src="item.img"></image>
          </div>
        </slider>
        <text class="slider-icon"
              :style="{fontFamily:'iconfont',fontSize:'30px',color:'#ffffff'}">{{'\ue648'}}</text>
      </div>
    </div>
    <div class='footer'>
      <div class='home'>
        <div class='iconfont icon-home1'
             :style="{fontFamily:'iconfont',color:'rgba(34,169,255,0.8)',fontSize:'40px'}">
          {{"\ue62d"}}</div>
        <text class="home-txt">首页</text>
      </div>
      <div class='mine'>
        <text class='iconfont icon-user'
              :style="{fontFamily:'iconfont',color:'#000',fontSize:'40px'}">{{"\ue62c"}}</text>
        <text class="mine-txt">我的</text>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      descarr1: [
        {
          'fontName': '\ue658',
          'txt': '展会信息',
          color: '#F8A16C'
        },
        {
          'fontName': '\ue657',
          'txt': '展会门票',
          color: '#FF4A55'
        },
        {
          'fontName': '\ue654',
          'txt': '餐饮预订',
          color: '#AF58FD'
        },
        {
          'fontName': '\ue650',
          'txt': '展馆导航',
          color: '#54E7BF'
        },
        {
          'fontName': '\ue656',
          'txt': '泊车寻车',
          color: '#5DE3C4'
        },
        {
          'fontName': '\ue655',
          'txt': '交通查询',
          color: '#46D2E9'
        },
        {
          'fontName': '\ue651',
          'txt': '行李托管',
          color: '#4ABBFD'
        },
        {
          fontName: ' \ue652',
          'txt': '旅游观光',
          color: '#FDDF20'
        },
        {
          'fontName': '\ue653',
          'txt': '问题反馈',
          color: '#FFBB68'
        },
        {
          fontName: '\ue64f',
          txt: '更多',
          color: '#C7763A'
        }
      ],
      descarr2: [
        {
          fontName: '\ue65a',
          txt: '媒体资讯',
          color: '#ff6666'
        },
        {
          fontName: '\ue659',
          txt: '返回',
          color: '#339999'
        }
      ],
      rolearr: [
        {
          'fontName': '\ue65c',
          'txt': '主办方',
          'color': '#FFFFFF'
        },
        {
          'fontName': '\ue65d',
          'txt': '主场',
          'color': '#FFFFFF'
        },
        {
          'fontName': '\ue65b',
          'txt': '参展商',
          'color': '#FFFFFF'
        },
        {
          'fontName': '\ue65e',
          'txt': '搭建商',
          'color': '#FFFFFF'
        }
      ],
      router1: ['/host', '/servicer', '/exhibitor', '/builder'],
      router2: ['/producer', '/tickets', '/food', '', '', '/transport', '', '/sightseeing', '/advice', ''],
      router3: ['/news', ''],
      key: '',
      imageList1: [
        {
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045970870,2749198357&fm=27&gp=0.jpg',
          desc1: '#新梅塞德斯#',
          desc2: '奔驰长轴距GL敢为英雄 '
        },
        {
          img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=138495137,3040106282&fm=26&gp=0.jpg',
          desc1: '#新梅塞德斯#',
          desc2: '奔驰长轴距GL敢为英雄 '
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1743319124.jpg',
          desc1: '#新梅塞德斯#',
          desc2: '奔驰长轴距GL敢为英雄 '
        }
      ],
      imageList2: [
        {
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045970870,2749198357&fm=27&gp=0.jpg',
          desc1: '#全新奥迪A7#',
          desc2: '前瞻美学 锐意尽展  '
        },
        {
          img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=138495137,3040106282&fm=26&gp=0.jpg',
          desc1: '#全新奥迪A7#',
          desc2: '前瞻美学 锐意尽展  '
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1743319124.jpg',
          desc1: '#全新奥迪A7#',
          desc2: '前瞻美学 锐意尽展  '
        }
      ],
      imageList3: [
        {
          img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045970870,2749198357&fm=27&gp=0.jpg',
          desc1: '#全新奥迪RS 3#',
          desc2: '用速度对美重新定义  '
        },
        {
          img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=138495137,3040106282&fm=26&gp=0.jpg',
          desc1: '#全新奥迪RS 3#',
          desc2: '用速度对美重新定义  '
        },
        {
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1743319124.jpg',
          desc1: '#全新奥迪RS 3#',
          desc2: '用速度对美重新定义  '
        }
      ]
    }
  },
  methods: {
    roleTo (index) {
      this.$router.push(this.router1[index])
    },
    jumpTo1 (index) {
      this.$router.push(this.router2[index])
      this.key = index
    },
    jumpTo2 (index) {
      this.$router.push(this.router3[index])
      this.key = !9
    }
  }
}
</script>

<style scoped>
.page {
  background: #f6f6f6;
  /**justify-content: flex-start;**/
  min-height: 100vh;
}
.content {
  flex: 1;
  justify-content: center;
}
.bar {
  width: 750px;
  height: 230px;
  /**position: fixed;
  top:0;**/
  padding: 72px 0 122px 32px;
  background: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1617998598,4013622293&fm=27&gp=0.jpg");
}
.bar-txt {
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
}
/**.push{
  height:182px;
}**/
.inp-text {
  width: 656px;
  height: 84px;
  position: absolute;
  left: 47px;
  top: -42px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.27);
  border-radius: 84px;
  align-self: center;
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(153, 153, 153, 1);
  padding-left: 110px;
  outline: none;
}
.icon-search {
  position: absolute;
  left: 50px;
  top: 26px;
}
.main {
  width: 750px;
  /**height: 688px;**/
  /**min-height: 688px;**/
  position: relative;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.27);
  border-radius: 0 0 20px 20px;
  padding: 53px 32px 0 32px;
  box-sizing: border-box;
  margin-bottom: 35px;
}
.entrance1 {
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.entrance2 {
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.item1 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 164px;
}
.img1 {
  width: 48px;
  height: 48px;
  margin-bottom: 28px;
}
.txt1 {
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.role {
  flex-direction: row;
  width: 100%;
  padding: 23px 32px 51px 32px;
  justify-content: space-between;
}
.item2 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  border-radius: 10px;
}
.item2:nth-child(1) {
  background: linear-gradient(
    -58deg,
    rgba(34, 169, 255, 0.8),
    rgba(23, 105, 253, 0.8)
  );
}
.item2:nth-child(2) {
  background: linear-gradient(
    -58deg,
    rgba(255, 231, 52, 1),
    rgba(251, 211, 3, 1)
  );
  border-radius: 10px;
}
.item2:nth-child(3) {
  background: linear-gradient(
    -58deg,
    rgba(252, 151, 126, 0.8),
    rgba(250, 98, 42, 0.8)
  );
}
.item2:nth-child(4) {
  background: linear-gradient(
    -58deg,
    rgba(0, 226, 238, 0.8),
    rgba(53, 205, 248, 0.8)
  );
}
.txt2 {
  font-size: 24px;
  margin-right: 9px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.img2 {
  width: 37px;
  height: 40px;
}
.ads {
  width: 672px;
  height: 160px;
  position: relative;
  margin-bottom: 31px;
  border-radius: 20px;
  overflow: hidden;
  align-self: center;
}
.ads-desc1 {
  position: absolute;
  left: 39px;
  top: 47px;
  z-index: 999;
  font-size: 22px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.ads-desc2 {
  position: absolute;
  left: 16px;
  top: 84px;
  z-index: 999;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.ads-desc3 {
  position: absolute;
  left: 44px;
  top: 18px;
  z-index: 999;
  font-size: 22px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.ads-desc4 {
  position: absolute;
  left: 22px;
  top: 55px;
  z-index: 999;
  font-size: 30px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.ads-desc5 {
  position: absolute;
  left: 44px;
  top: 44px;
  z-index: 999;
  font-size: 22px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.ads-desc6 {
  position: absolute;
  left: 32px;
  top: 81px;
  z-index: 999;
  font-size: 30px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.slider-icon {
  position: absolute;
  right: 20px;
  top: 65px;
  z-index: 999;
}
.ads-btn-wrapper {
  width: auto;
  height: auto;
  position: absolute;
  left: 9px;
  top: 9px;
  z-index: 999;
  border-color: rgba(153, 153, 153, 1);
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
}
.ads-btn {
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.footer {
  flex: 0;
  width: 100%;
  height: 100px;
  /**position: fixed;
  bottom:0;**/
  flex-direction: row;
  background: rgba(255, 255, 255, 1);
}
.home,
.mine {
  flex: 1;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: rgba(53, 53, 53, 1);
}
.home-txt {
  color: rgba(8, 117, 209, 1);
}
.mine-txt,
.home-txt {
  font-size: 20px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
}
</style>
