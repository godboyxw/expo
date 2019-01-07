<template>
    <div class="news-wrapper">
        <div class="content">
            <text class="title">{{newsItem.title}}</text>
            <div class="detail">
                <text class="media">{{newsItem.media}}</text>
                <text class="comments">{{newsItem.comments}}</text>
                <text class="publish-time">{{newsItem.publishTime}}</text>
            </div>
        </div>
        <image class="image"  :src="newsItem.src"/>
    </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object,
      default: () => {
        return {
          title: '第25届圣保罗国际图书双年展在巴西圣保罗阿年比会...',
          media: '光明网',
          comments: '178评论',
          publishTime: '6分钟前',
          src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=771474905,3219768596&fm=85&app=57&f=JPEG?w=121&h=75&s=6B1426C0085393D84A21E5960300C0C3'
        }
      }
    }
  }
}
</script>

<style scoped>
.news-wrapper{
    width:640px;
    height:260px;
    padding:48px 0 58px 0;
    overflow:hidden;
    border-bottom:1px solid #E7E7E7;
    background:rgba(255,255,255,1);
    flex-direction:row;
    justify-content:space-between;
}
.image{
    width:220px;
    height:160px;
    margin-top:2px;
}
.content{
    flex:1;
}
.title{
    width:393px;
    margin-bottom:65px;
    line-height:32.5px;
    font-size:30px;
    overflow:hidden;
    text-overflow:ellipsis;
    font-family:Adobe Heiti Std R;
    font-weight:normal;
    color:rgba(51,51,51,1);
}
.detail{
    width:362px;
    flex-direction:row;
    justify-content:space-between;
}
.media,.comments,.publish-time{
    line-height:24px;
    font-size:24px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(85,85,85,1);
}
.media{

}
.comments{

}
.publish-time{

}
</style>
