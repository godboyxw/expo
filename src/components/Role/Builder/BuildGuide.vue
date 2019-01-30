<template>
  <div class="build-guide">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="main">
      <div class="item">
        <text class="title">一、展台设计及现场施工</text>
        <text class="content">1. 展台结构必须设计合理，保证搭建牢固、安全。<br />2. 现场搭建时必须严格按照经主办方、及指定审图机构审核通过的图纸进行施工；严禁随意改动展台结构或工艺技术；违反此规定，将被扣除所有施工安全押金，并责令其立即停止施工进行整改，由此产生的额外费用由参展商或其服务商自行承担。<br />3. 所有光地展位，单层的最大搭建高度不能超过 5 米，两层或两层以上展位最大搭建高度不得超过 6 米。<br />光地会议室高度不得超过 4 米。所有标准展位不得更改其原有 2.5 米的高度限制。所有光地展位(包<br />括搭建双层展位)必须提交展位设计和相关证明材料以供核查。</text>
      </div>
      <div class="item">
        <text class="title">二、 防火安全</text>
        <text class="content">1. 展台结构必须设计合理，保证搭建牢固、安全。<br />2. 现场搭建时必须严格按照经主办方、及指定审图机构审核通过的图纸进行施工；严禁随意改动展台结构。</text>
      </div>
      <div class="item">
        <text class="title">三、 电力装置和设备</text>
        <text class="content">1. 所有展台用插头与拖线板必须完好无损，电路电线必须遵从电线安装规定及以 30mA RCD（漏电保护器）做保护。</text>
        <div class="content-wrapper">
          <text class="content content-text">2. 只有主办方或其供应商有权在展区进行电力安装。主办方或其供应商进行的电力安装包括电力线路，主电源保险丝、主开关/电表等连接。参展商不得从未经主办方或展馆方授权的人员处获取展位电。力供应，也不得从邻近展位获取电力供应。</text>
          <image src="src/assets/images/9.png"
                 style="width:175px;height:280px;align-self:center;" />
        </div>
        <text class="content">3. 主办单位或主场搭建商保留对不遵从电力使用安全要求的展台进</text>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../Common/headerTop'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      title: '现场施工指南',
      router: '/builder'
    }
  }
}
</script>

<style scoped>
.build-guide {
  width: 750px;
  min-height: 100vh;
}
.main {
  border-top: 4px solid #e5e5e5;
  padding-top: 39px;
  padding-right: 52px;
  padding-left: 65px;
}
.title,
.content {
  font-family: MicrosoftYaHei-Bold;
  color: rgba(66, 66, 66, 1);
  line-height: 40px;
}
.title {
  font-size: 28px;
  letter-spacing: 2.8px;
  font-weight: bold;
}
.content {
  font-size: 24px;
  letter-spacing: 2.4px;
  font-weight: regular;
}
.item {
  margin-bottom: 34px;
}
.content-wrapper {
  flex-direction: row;
  justify-content: space-between;
}
.content-text {
  width: 419px;
}
</style>
