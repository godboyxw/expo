<template>
  <div class="sightseeing">
    <headerTop :title="title"
               :router="router"></headerTop>
    <text class="icon-search"
          :style="{fontFamily:'iconfont',fontSize:'40px',color:'#000000',position:'fixed',right:'110px',top:'28px',zIndex:'199'}">{{'\ue615'}}</text>
    <text class="icon-map"
          :style="{fontFamily:'iconfont',fontSize:'47px',color:'#000000',position:'fixed',right:'31px',top:'20px',zIndex:'199'}">{{'\ue669'}}</text>
    <Nav :nav="nav"
         :color="color"
         @click="push"
         ref="navchild"
         :fontWeight="fontWeight"
         :nextRouter="nextRouter"
         class="nav"></Nav>
    <div class="choose">
      <div class="sort"
           @click="sort">
        <text class="sort-text">综合排序</text>
        <text class="icon-down"
              :style="{fontFamily:'iconfont',fontSize:'20px',color:'#010101',marginLeft:'22px'}">{{sortShow? '\ue622' : '\ue61f'}}</text>
      </div>
      <div class="place"
           @click="place">
        <text class="place-text">区域</text>
        <text class="icon-down"
              :style="{fontFamily:'iconfont',fontSize:'20px',color:'#010101',marginLeft:'22px'}">{{placeShow? '\ue622' : '\ue61f'}}</text>
      </div>
      <div class="filter"
           @click="filter">
        <text class="filter-text">筛选</text>
        <text class="icon-down"
              :style="{fontFamily:'iconfont',fontSize:'20px',color:'#010101',marginLeft:'22px'}">{{filterShow? '\ue622' : '\ue61f'}}</text>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTop from '../Common/headerTop'
import Nav from '../Common/Nav'
export default {
  components: {
    headerTop,
    Nav
  },
  data () {
    return {
      title: '城市导览',
      router: '/',
      nav: ['观光', '美食', '购物', '酒店', '娱乐'],
      nextRouter: ['/tour', '/deliciousfood', '', '/wineshop', ''],
      fontWeight: 400,
      color: 'rgba(0, 0, 0, 1)',
      sortShow: false,
      placeShow: false,
      filterShow: false
    }
  },
  methods: {
    // push () {
    //   this.$refs.navchild.jump()
    // }
    sort () {
      this.sortShow = !this.sortShow
    },
    place () {
      this.placeShow = !this.placeShow
    },
    filter () {
      this.filterShow = !this.filterShow
    }
  }
}
</script>

<style scoped>
.sightseeing {
  width: 750px;
  min-height: 100vh;
  background: rgba(238, 238, 238, 1);
  padding-bottom: 20px;
}
.nav {
  border-bottom: 1px solid #eeeeee;
}
.choose {
  width: 750px;
  height: 60px;
  padding-left: 46px;
  padding-right: 54px;
  background: rgba(255, 255, 255, 1);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sort,
.place,
.filter {
  flex-direction: row;
  align-items: center;
}
.sort-text,
.place-text,
.filter-text {
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(102, 102, 102, 1);
  line-height: 40px;
}
.item {
  margin-top: 20px;
}
</style>
