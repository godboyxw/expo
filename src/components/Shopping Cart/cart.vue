<template>
  <div class="container">
    <div class="image">
      <image style="width:247px;height:230px;"
             :src="obj.src" />
    </div>
    <div class="info">
      <text class="desc">{{obj.desc}}</text>
      <div class="rent">
        <text class="rent-money">租金 ¥</text>
        <text class="rent-num">{{obj.rent}}</text>
        <text class="rent-day"> /天</text>
      </div>
      <text class="deposit">押金 ¥{{obj.deposit}}</text>
      <text class="count"></text>
      <div class="bottom">
        <div class="calc">
          <text class="minus">-</text>
          <text class="num">1</text>
          <text class="add">+</text>
        </div>
        <text class="icon-back"
              :style="{fontFamily:'iconfont',color:'#BBBBBB',fontSize:'30px'}"
              @click="back">{{"\ue619"}}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default:
        // {
        //     desc:'艾博斯（Airproce） 空气净化器AL-730',
        //     rent:300,
        //     deposit:500
        // }  //Props with type Object/Array must use a factory function to return the default value.   工厂函数
        () => {
          return {
            src: 'http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg',
            desc: '艾博斯（Airproce） 空气净化器AL-730',
            rent: 300,
            deposit: 500
          }
        }
    }
  }
}
</script>

<style scoped>
.container {
  width: 750px;
  height: 280px;
  background: rgba(255, 255, 255, 1);
  padding-bottom: 20px;
  flex-direction: row;
}
.image {
  width: 247px;
  height: 230px;
  margin-top: 30px;
}
.info {
  flex: 1;
  margin-top: 40px;
  padding-left: 29px;
}
.bottom {
  flex-direction: row;
  justify-content: space-between;
}
.desc {
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}
.rent {
  flex-direction: row;
  margin-bottom: 9px;
  margin-top: 34px;
}
.rent-money,
.rent-day {
  font-size: 22px;
  color: rgba(251, 80, 83, 1);
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(251, 80, 83, 1);
  line-height: 40px;
}
.rent-num {
  font-size: 40px;
  color: rgba(251, 80, 83, 1);
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(251, 80, 83, 1);
  line-height: 35px;
}
.deposit {
  margin-bottom: 23px;
  font-size: 22px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
}
.calc {
  flex-direction: row;
}
.minus,
.add {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(187, 187, 187, 1);
  text-align: center;
  line-height: 32px;
}
.minus {
  color: #eeeeee;
}
.add {
  color: #bbbbbb;
}
.num {
  width: 50px;
  height: 30px;
  border: 1px solid rgba(187, 187, 187, 1);
  text-align: center;
  line-height: 32px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
}
</style>
