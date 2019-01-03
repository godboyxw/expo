<template>
    <div class="wrapper">
        <div class="header">
                <text class="icon-back" :style="{fontFamily:'iconfont',color:'#353535',fontSize:'32px'}" @click="back">{{"\ue618"}}</text>
                <text class="sell">我的订单</text>
        </div>
        <div class="content">
            <text class="amount">应付金额 ¥1200</text>
            <text class="amount">购买数量</text>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
     .wrapper{
        width:720px;
    }
    .header{
        width:720px;
        height:96px;
        padding-left:24px;
        background:rgba(255,255,255,1);
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    .sell{
        flex:1;
        text-align:center;
        line-height:96px;
        font-size:40px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(53,53,53,1);
        line-height:40px;
    }
    .content{
        width:720px;
        height:160px;
        background:rgba(81,90,126,1);
    }
    .amount{
        height:160px;
        font-size:40px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:160px;
        text-align: center;
    }
</style>
