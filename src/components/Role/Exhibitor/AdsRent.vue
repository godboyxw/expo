<template>
  <div class="ads-rent">
    <div class="content">
      <headerTop :title="title"
                 :router="router"></headerTop>
      <div class="regular">
        <div class="regular-wrapper">
          <text class="regular-text">广告位租赁规章制度</text>
          <text class="regular-check">请租赁前仔细查看 》</text>
        </div>
        <image src="src/assets/images/5.png"
               style="width:207px;height:119px;" />
      </div>
      <div class="main"
           v-for="(item,index) in mainArr"
           :key="index">
        <text class="title">{{item.title}}</text>
        <div class="item-wrapper">
          <div class="item-container">
            <div class="item"
                 @click="choosen1(key)"
                 :class="key.showActive? 'active' : ''"
                 v-for="(key,value) in item.itemArr.slice(0,2)"
                 :key="value">
              <text class="place"
                    :class="key.showActive? 'active' : ''">{{key.place}}</text>
              <text class="scale"
                    :class="key.showActive? 'active' : ''"
                    v-html="key.scale"></text>
              <text class="pub-fee">{{key.pubFee}}</text>
              <text class="ins-fee">{{key.insFee}}</text>
              <text class="bui-fee">{{key.buiFee}}</text>
              <div class="icon-choosen"
                   v-if="key.showActive"
                   :style="{fontFamily:'iconfont',color:'#4784C6',fontSize:'20px',position:'absolute',left:'295px',bottom:'-1px'}">{{"\ue63c"}}
              </div>
            </div>
          </div>
          <div class="item-container">
            <div class="item"
                 v-show="item.showItem"
                 @click="choosen2(key)"
                 :class="key.showActive? 'active' : ''"
                 :key="value"
                 v-for="(key,value) in item.itemArr.slice(2,item.itemArr.length)">
              <text class="place"
                    :class="key.showActive? 'active' : ''">{{key.place}}</text>
              <text class="scale"
                    :class="key.showActive? 'active' : ''"
                    v-html="key.scale"></text>
              <text class="pub-fee">{{key.pubFee}}</text>
              <text class="ins-fee">{{key.insFee}}</text>
              <text class="bui-fee">{{key.buiFee}}</text>
              <div class="icon-choosen"
                   v-if="key.showActive"
                   :style="{fontFamily:'iconfont',color:'#4784C6',fontSize:'20px',position:'absolute',left:'295px',bottom:'-1px'}">{{"\ue63c"}}
              </div>
            </div>
            <div class="icon-more"
                 @click="more(item,index)"
                 :style="{fontFamily:'iconfont',color:'rgba(160,160,160,1)',fontSize:'30px',position:'absolute',left:'365px',bottom:'10px'}">{{item.showItem?'\ue63d':'\ue63a'}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
import footer from '../../Common/Footer'
export default {
  components: {
    headerTop,
    footer
  },
  data () {
    return {
      title: '广告位租赁',
      router: '/exhibitor',
      mainArr: [
        {
          title: '展会广告',
          itemArr: [
            {
              place: '登录厅正门两侧广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '登录厅正门两侧广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '登录厅正门两侧广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '登录厅正门两侧广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '登录厅正门两侧广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            }
          ],
          showItem: false

        },
        {
          title: '户外长期广告',
          itemArr: [
            {
              place: '展馆一层灯箱广告',
              scale: '5*2.2（幅）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '交通枢纽出入口墙面...',
              scale: '10*5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '交通枢纽出入口墙面...',
              scale: '10*5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            }
          ],
          showItem: false

        },
        {
          title: '线上广告',
          itemArr: [
            {
              place: '微信日常推送广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '掌上国博走马灯广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '掌上国博走马灯广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            },
            {
              place: '掌上国博走马灯广告',
              scale: '16.5*7.5（m<sup class="sup" style="font-size:2px;font-family: SimHei;font-weight:400;color:inherit;">2</sup>）',
              pubFee: '场租发布费',
              insFee: '制作安装费',
              buiFee: '桁梁租赁搭建费',
              showActive: false
            }
          ],
          showItem: false

        }
      ],
      sliceNum: 2

    }
  },
  methods: {
    choosen1 (key) {
      key.showActive = !key.showActive
    },
    choosen2 (key) {
      key.showActive = !key.showActive
    },
    more (item, index) {
      item.showItem = !item.showItem
    }
  }
}
</script>

<style scoped>
.ads-rent {
  width: 750px;
  min-height: 100vh;
}
.content {
  flex: 1;
}
.regular {
  width: 750px;
  height: 131px;
  padding: 0 26px 0 69px;
  background: linear-gradient(
    -90deg,
    rgba(253, 185, 45, 1) 0%,
    rgba(239, 137, 55, 1) 100%
  );
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.regular-text {
  font-size: 32px;
  margin-bottom: 16px;
  font-family: NotoSansHans-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.regular-check {
  font-size: 24px;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.main {
  width: 750px;
  background: rgba(255, 255, 255, 1);
}
.title {
  height: 89px;
  padding-left: 31px;
  border-bottom: 1px solid #eee;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 89px;
}
.item-wrapper {
  min-height: 329px;
  padding-top: 30px;
  border-bottom: 20px solid rgba(238, 238, 238, 1);
}
.item-container {
  width: 750px;
  padding: 0px 29px 0 29px;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 320px;
  height: 234px;
  padding: 37px 0 8px 0;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(210, 210, 210, 1);
  border-radius: 6px;
}
.place {
  font-size: 30px;
  text-align: center;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 40px;
}
.scale {
  font-size: 30px;
  text-align: center;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 40px;
}
.pub-fee,
.ins-fee,
.bui-fee {
  font-size: 24px;
  text-align: center;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(129, 129, 129, 1);
  line-height: 40px;
}
.active {
  color: #4784c6 !important;
  border-color: #4784c6;
}
</style>
