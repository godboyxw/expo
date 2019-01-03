<template>
    <div class="introduction">
        <div class="ind-content">
            <text class="text">索尼公司是世界上民用及专业视听产品、游戏产品、通信产品、核心部件和信息技术等领域的创新先导之一，加之在音乐、影视互动娱乐以及在线业务方面的成就，索尼成为全球领先的电子和娱乐公司。公司在截止到2017年3月31日结束的2016财年中的合并销售额达678.86亿美元，实现营业利润25.78亿美元。</text>
        </div>
        <div class="display-content">
            <text class="person" style="margin:23px 0 28px 32px;font-size:30px;">展会负责人</text>
            <text class="contact" style=" margin-left:37px;font-size:24px;">张先生：1938475984</text>
        </div>
        <div class="display-map">
            <text class="map_desc">展会地图</text>
            <div class="map_img">
                <image style="width:660px;height:270px" src="http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // created(){
        //     console.log(this.data.scale
        // }
        
    }
</script>

<style>
    .introduction{
        width:750px;
    }
    .ind-content{
        width:750px;
        height:380px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        padding:28px 35px 23px 37px;
        box-sizing:border-box;
        margin-bottom:20px;
    }
    .text{
        text-indent:60px;
        font-size:30px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(85,85,85,1);
        line-height:50px;
        text-align:left;
    }
    .display-content{
        width:750px;
        height:130px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        margin-bottom:20px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
    .person{
        margin:23px 0 28px 32px;
        font-size:30px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(55,55,55,1);
    }
    .contact{
        margin-left:37px;
        font-size:24px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(152,152,152,1);
    }
    .display-map{
        width:750px;
        height:460px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        padding:24px 30px 16px 32px;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
     .map_desc{
        font-size:30px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(55,55,55,1);
    }
     .map_img{
        width:660px;
        height:270px;
        margin-bottom:32px;
    }
    
</style>