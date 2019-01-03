<template>
    <div class="introduction">
        <div class="ind-content">
            <text class="text">索尼公司是世界上民用及专业视听产品、游戏产品、通信产品、核心部件和信息技术等领域的创新先导之一，加之在音乐、影视互动娱乐以及在线业务方面的成就，索尼成为全球领先的电子和娱乐公司。公司在截止到2017年3月31日结束的2016财年中的合并销售额达678.86亿美元，实现营业利润25.78亿美元。</text>
        </div>
        <div class="display-content">
            <text class="person">展会负责人</text>
            <text class="contact">张先生：1938475984</text>
        </div>
        <div class="display-map">
            <text class="map_desc">展会地图</text>
            <div class="map_img">
                <!-- <img src="http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg" /> -->
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

<style scoped>
    .ind-content{
        width:375px;
        height:190px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        padding:14px 17.5px 11.5px 18.5px;
        box-sizing:border-box;
        margin-bottom:10px;
    }
    .text{
        text-indent:30px;
        font-size:15px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(85,85,85,1);
        line-height:25px;
        text-align:left;
    }
    .display-content{
        width:374px;
        height:65px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        margin-bottom:10px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
    .person{
        margin:11.5px 0 14px 16px;
        font-size:15px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(55,55,55,1);
    }
    .contact{
        margin-left:18.5px;
        font-size:12px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(152,152,152,1);
    }
    .display-map{
        width:375px;
        height:230px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        padding:11.5px 15px 8px 16px;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
     .map_desc{
        font-size:15px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(55,55,55,1);
    }
     .map_img{
        width:330px;
        height:135px;
        margin-bottom:16px;
    }
    
</style>