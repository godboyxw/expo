<template>
    <div class="container">
        <div class="wrapper">
            <div class="header">
                <div class="avatar">
                    <image src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1977270962,2808007120&fm=5" style="width:235px;height:236px;"/>
                </div>
                <div class="info">
                    <div class="price">
                        <text class="price1">￥</text>
                        <text class="price2">1200</text>
                    </div>
                    <text class="stock">库存214件</text>
                    <text class="selection">选择 高度,数量</text>
                </div>
                <text class="icon-back" :style="{fontFamily:'iconfont',color:'gray',fontSize:'30px'}" @click="back" >{{"\ue619"}}</text>
            </div>
            <div class="content-height">
                <text class="height">高度</text>
                <div class="height-selection">
                    <text class="txt1">0.8m~1.0m</text>
                    <text class="txt1">1.0m~1.2m</text>
                    <text class="txt1">1.2m~1.5m</text>
                </div>
            </div>
            <div class="content-count">
                <text class="count">数量</text>
                <div class="count-selection">
                    <text class="txt2">10盆</text>
                    <text class="txt2">20盆</text>
                    <text class="txt2">30盆</text>
                    <text class="txt2">自定义盆数</text>
                </div>
            </div>
            <div class="confirm">
                <text class="txt3" @click="next">确定</text>
            </div>
        </div>
    </div>
</template>

<script>
    import  { EventBus } from '../../util/vue-bus.js'
    export default {
        data(){
            return {
                block:false
            }
        },
        methods: {
            back(){
                //this.$emit('show')
                EventBus.$emit('cancel',this.block)
                //console.log(1)
            },
            next(){
                this.$router.push('/shopping')
            }
        },
    }
</script>

<style scoped>
    .container{
        width:720px;
        background:rgba(0,0,0,0.8);
        margin:0 auto;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .wrapper{
        width:720px;
        height:954px;
        margin:0 auto;
        opacity:1;
        background:#FFFFFF;
        background:rgba(255,255,255,1);
        border-radius:10px 10px 0px 0px;
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        z-index:100;
    }
    .header{
        height:257px;
        flex-direction:row;
        padding-left:25px;
        padding-right:24px;
        border-bottom:1px solid rgba(238,238,238,1);
    }
    .avatar{
        width:235px;
        height:236px;
        position:relative;
        top:-40px;
        border-radius:10px;
        overflow:hidden;
    }
    .info{
        flex:1;
        margin-left:51px;
    }
    .content{
        height:697px;
    }
    .price{
        flex-direction:row;
        align-items:center;
        margin-top:40px;
        margin-bottom:15px;
    }
    .price1{
        font-size:28px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(251,80,83,1);
    }
    .price2{
        margin-left:10px;
        font-size:40px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,79,0,1);
    }
    .stock,.selection{
        font-size:26px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-bottom:10px;
    }
    .icon-back{
        margin-top:40px;
    }
    .content-height{
        height:207px;
        padding-bottom:40px;
        border-bottom:1px solid rgba(238,238,238,1);
    }
    .height{
        padding-left:32px;
        padding-top:60px;
        margin-bottom:20px;
        font-size:30px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .height-selection{
        flex-direction:row;
        padding:0 33px 0 32px;
        align-items:center;
        padding:
    }
    .txt1{
        width:160px;
        height:56px;
        background:rgba(245,245,245,1);
        border-radius:10px;
        font-size:26px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        text-align:center;
        line-height:56px;
    }
    .txt1:nth-child(2){
        margin:0 81px;
    }
    .content-count{
        height:294px;
        border-bottom:1px solid rgba(238,238,238,1);
        padding-top:41px;
        padding-top:61px;
    }
    .count{
        padding-left:31px;
        margin-bottom:20px;
        font-size:30px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .count-selection{
        flex-direction:row;
        flex-wrap:wrap;
        padding:0 33px 0 32px;
    }
    .txt2{
        width:160px;
        height:56px;
        margin-right:81px;
        margin-bottom:30px;
        background:rgba(245,245,245,1);
        border-radius:10px;
        font-size:26px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        text-align:center;
        line-height:56px;
    }
    .txt2:nth-child(3){
        margin-right:0;
    }
    .confirm{
        padding:95px 0 10px 0;
    }
    .txt3{
        width:620px;
        height:90px;
        margin:0 auto;
        text-align:center;
        line-height:90px;
        background:rgba(29,141,243,1);
        border-radius:45px;
        font-size:36px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
</style>