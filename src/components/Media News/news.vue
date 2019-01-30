<template>
  <div class="box">
    <headerTop :title="title"
               :router="router"></headerTop>
    <nav :nav="nav"
         class="nav"></nav>
    <newsItem v-for="(item, index) in newsItem"
              :key="index"
              :newsItem="item"
              class="newsItem"></newsItem>
  </div>
</template>

<script>
// import { EventBus } from '../../util/vue-bus.js'
import newsItem from './newsItem'
import nav from '../Common/Nav'
import headerTop from '../Common/headerTop'
export default {
  components: {
    newsItem,
    nav,
    headerTop
  },
  data () {
    return {
      newsItem: [
        {
          title: '第25届圣保罗国际图书双年展在巴西圣保罗阿年比会...',
          media: '光明网',
          comments: '178评论',
          publishTime: '6分钟前',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=771474905,3219768596&fm=85&app=57&f=JPEG?w=121&h=75&s=6B1426C0085393D84A21E5960300C0C3',
          newsrouter: '/news/detail'
        },
        {
          title: '第25届圣保罗国际图书双年展在巴西圣保罗阿年比会...',
          media: '光明网',
          comments: '178评论',
          publishTime: '6分钟前',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=771474905,3219768596&fm=85&app=57&f=JPEG?w=121&h=75&s=6B1426C0085393D84A21E5960300C0C3',
          newsrouter: '/news/detail'
        },
        {
          title: '第25届圣保罗国际图书双年展在巴西圣保罗阿年比会...',
          media: '光明网',
          comments: '178评论',
          publishTime: '6分钟前',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=771474905,3219768596&fm=85&app=57&f=JPEG?w=121&h=75&s=6B1426C0085393D84A21E5960300C0C3',
          newsrouter: '/news/detail'
        },
        {
          title: '第25届圣保罗国际图书双年展在巴西圣保罗阿年比会...',
          media: '光明网',
          comments: '178评论',
          publishTime: '6分钟前',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=771474905,3219768596&fm=85&app=57&f=JPEG?w=121&h=75&s=6B1426C0085393D84A21E5960300C0C3',
          newsrouter: '/news/detail'
        },
        {
          title: '第25届圣保罗国际图书双年展在巴西圣保罗阿年比会...',
          media: '光明网',
          comments: '178评论',
          publishTime: '6分钟前',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=771474905,3219768596&fm=85&app=57&f=JPEG?w=121&h=75&s=6B1426C0085393D84A21E5960300C0C3',
          newsrouter: '/news/detail'
        }
      ],
      nav: ['推荐', '公告', '采访', '视频'],
      title: '会展资讯',
      router: '/'
      // newsrouter:'/news/detail'
    }
  }
  // created() {
  //   EventBus.$on('to', () => {
  //     this.$router.push('/news/detail')
  //   })
  // },
}
</script>

<style scoped>
.box {
  min-height: 100vh;
}
.newsItem {
  margin: 0 auto;
}
.nav {
  border-bottom: 1px solid #e7e7e7;
}
</style>
