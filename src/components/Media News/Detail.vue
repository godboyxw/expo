<template>
  <div class="detail">
    <div class="main">
      <headerTop :title="title"
                 :router="router"
                 class="headerTop"></headerTop>
      <text class="info-title">2018中国（武汉）国际自动化与机器人展览会于今日隆重开幕</text>
      <text class="date"> 2018-01-01 23:58:29</text>
      <div class="content">
        <text class="text1">中国国际工业博览会的首个异地展——2018中国（武汉）国际自动化与机器人展览会（以下简称：IARS）于今日在武汉国际博览中心B1和B2馆盛大开幕，吸引西门子、三菱、欧姆龙、台达、米思米、图尔克、巴鲁夫基恩士、万可、康耐、施耐德、奥托尼克斯、倍加福、发那科、ABB、库卡、安川电机、那智、OTC、松下等300余家全球知名自动化和机器人品牌参展，国际大牌企业占比达50%，展出面积20,000平方米。</text>
        <image class="image"
               src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=4290544708,2237953386&fm=85&s=AEB200880C52D0CA040811DA030050B6" />
        <text class="text2">作为工信部正式批复的创建“中国制造2025”试点示范城市之一，武汉在过去3年里积极落实“中国制造2025”政策，其工业增加值与工业利润总额逐年递增千亿产业增加到6个。去年，武汉工业经济实现“两高规上工业增加值增长7.7%，增速分别高于全国、全省平均水平1.1和0.3个百分点。工业投资完成2404.9亿元，增长13.6%，工业投资增幅在副省级城市列第2位奋力书写“中国制造2025”新答卷，打造高质量发展样板。</text>
      </div>
    </div>
    <div class="footer">
      <input class="search"
             type="search"
             placeholder="我来说两句……" />
      <text class="icon icon-pen"
            :style="{fontFamily:'iconfont',color:'#000',fontSize:'40px'}">{{"\ue625"}}</text>
      <text class="icon icon-share"
            :style="{fontFamily:'iconfont',color:'#000',fontSize:'40px'}">{{"\ue61e"}}</text>
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
      title: '详情',
      router: '/news'
    }
  }
}
</script>

<style scoped>
.detail {
  width: 750px;
  min-height: 100vh;
}
.main {
  flex: 1;
}
.headerTop {
  border-bottom: 1px solid #eeeeee;
}
.info-title {
  width: 653px;
  font-size: 36px;
  margin-top: 40px;
  margin-bottom: 20px;
  align-self: center;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  line-height: 54px;
}
.date {
  width: 653px;
  margin-bottom: 45px;
  align-self: center;
  text-align: left;
  font-size: 24px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
.content {
  width: 647px;
  align-self: center;
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(69, 69, 69, 1);
  line-height: 50px;
}
.text1,
.text2 {
  margin-bottom: 40px;
  line-height: 50px;
  text-indent: 64px;
}
.image {
  width: 656px;
  height: 400px;
  margin-bottom: 40px;
}
.footer {
  width: 750px;
  height: 96px;
  padding: 18px 61px 18px 33px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.search {
  width: 510px;
  height: 60px;
  padding-left: 80px;
  position: relative;
  background: rgba(238, 238, 238, 1);
  border-radius: 30px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.icon-pen {
  position: absolute;
  left: 60px;
  top: 25px;
}
</style>
