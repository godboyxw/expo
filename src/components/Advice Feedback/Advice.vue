<template>
  <div class="advice">
    <headerTop :title='title'
               :router='router'></headerTop>
    <div class="phone">
      <div class="box">
        <text class="mobile">电话</text>
        <text class="number">86423566</text>
      </div>
      <text class="dial">拨打</text>
    </div>
    <!-- <textarea class="info">请输入详细的问题和意见</textarea> -->
    <input type="text"
           placeholder="请输入详细的问题和意见"
           class="info" />
    <div class="desc">
      <text class="desc-text">请输入不少于十个字的描述</text>
      <textarea style="width:100%;height:100%;"></textarea>
      <text class="desc-word-limit">0/300</text>
    </div>
    <div class="photo">
      <text class="photo-text">请提供相关问题截图或者照片</text>
      <div class="send">
        <text class="icon-add"
              :style="{fontFamily:'iconfont',color:'gray',fontSize:'40px'}">{{"\ue624"}}</text>
        <text class="send-photo">截图/照片</text>
      </div>
      <text class="photo-word-limit">0/4</text>
    </div>
    <text class="submit">提交</text>
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
      title: '建议反馈',
      router: '/'
    }
  }
}
</script>

<style scoped>
.advice {
  width: 750px;
  min-height: 100vh;
}
.phone {
  width: 750px;
  height: 70px;
  padding: 0 39px 0 46px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.box {
  flex: 1;
  flex-direction: row;
}
.mobile {
  width: 120px;
  height: 50px;
  background: rgba(34, 111, 214, 1);
  border-radius: 10px;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
  font-family: HYi4gj;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.number {
  margin-left: 31px;
  font-size: 26px;
  text-align: center;
  line-height: 50px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(163, 160, 160, 1);
}
.dial {
  font-size: 26px;
  text-align: center;
  line-height: 50px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(84, 174, 255, 1);
}
.info {
  width: 750px;
  height: 70px;
  padding-left: 33px;
  background: #f5faff;
  line-height: 70px;
  font-size: 28px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  outline: none;
}
.desc {
  width: 750px;
  height: 300px;
  padding-top: 29px;
  padding-left: 29px;
  margin-bottom: 20px;
  position: relative;
  background: rgba(255, 255, 255, 1);
}
.desc-text,
.photo-text {
  line-height: 31px;
  font-size: 32px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(99, 99, 99, 1);
}
.desc-word-limit {
  position: absolute;
  bottom: 30px;
  right: 35px;
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
}
.photo {
  width: 750px;
  height: 300px;
  padding-top: 29px;
  padding-left: 29px;
  padding-right: 34px;
  position: relative;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
}
.photo-word-limit {
  font-size: 32px;
  line-height: 31px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
}
.submit {
  padding-left: 616px;
  margin-top: 37px;
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(29, 141, 243, 1);
}
.send {
  width: 180px;
  height: 180px;
  position: relative;
  position: absolute;
  top: 90px;
  left: 27px;
  background: rgba(245, 250, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
.icon-add {
}
.send-photo {
  position: absolute;
  bottom: 11px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(187, 187, 187, 1);
  margin-bottom: 0;
}
</style>
