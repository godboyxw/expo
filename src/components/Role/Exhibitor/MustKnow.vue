<template>
  <div class="must-know">
    <headerTop :title="title"
               :router="router"></headerTop>
    <div class="main">
      <div class="item"
           v-for="(item,index) in text"
           :key="index">
        <text class="title">{{item.title}}</text>
        <text class="content">{{item.content}}</text>
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
      title: '参展须知',
      router: '/exhibitor',
      text: [
        {
          title: '1、展览场地',
          content: '参展商应注意保护场馆的环境、地面、墙体、消防栓等相关设施。如场馆相关设施受到损坏，参展商应按场馆有关规定予以赔偿。'
        },
        {
          title: '2、入馆规定',
          content: '请参展商遵守展会规定的开闭馆时间，展会期间请参展商在观众进馆前半个小时进入展位区域，且在观众离馆后离开展馆。展会期间，每天闭馆前半小时观众登录处关闭，停止办证。因迟到或早退造成展品遗失由参展商自行承担损失。'
        },
        {
          title: '3、参展保险',
          content: '参展商应根据需要为参展工作人员、参展展品、展位装置自行投保，并要求所有工作人员妥善保管好展品和个人物品，包括模特及兼职人员等。组委会对展品或个人物品的丢失、损坏等情况不承担法律责任。'
        },
        {
          title: '4、物品安全',
          content: '布/撤展及展会期间，由于现场人员混杂，请参展商妥善保管好各自的展品和个人贵重物品。贵重物品请务必随身携带，不要随意遗留在展馆内。'
        },
        {
          title: '5、公共通道',
          content: '开展期间任何物品不得摆放于展位以外的公共区域，否则被主场运营方或安保人员没收与组委会无关，后果自负。布展结束，务必将放在公共通道上物品移走，堆放于指定存放点。6、展品撤离展会规定的撤展时间为 6 月 25 日 15:00~24:00，6月 25 日 15:00 前参展商不得将展品搬离展位。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.must-know {
  width: 750px;
  min-height: 100vh;
}
.main {
  border-top: 4px solid #e5e5e5;
  padding-top: 39px;
  padding-right: 32px;
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
  margin-bottom: 80px;
}
</style>
