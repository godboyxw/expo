<template>
   <div class="home">
        <div class="header">
            <text class="text">武汉国际博览中心</text>
        </div>
        <Mortal class="mortal" :arr="arr" :isShow="isShow" :numSlice="numSlice" :router="router"></Mortal>
        <div class="tab">
            <router-link to="/"><text class="container active">举办方</text></router-link>
            <router-link to="/display"><text class="container">参展商</text></router-link>
            <router-link to="/service"><text class="container">服务商</text></router-link>
        </div>
   </div>
</template>

<script>
    import Mortal from '../Common/Mortal.vue'
    export default {
        components:{
            Mortal
        },
        data() {
            return {
                arr:['展会信息','去买票','餐饮预定','媒体资讯','泊车寻车','全景国博','通勤车查询','问题反馈','行李托管','展品运输','清洁服务','清洁服务','清洁服务','清洁服务'],
                isShow:true,
                numSlice:9,
                router : ['/producer','/tickets','/food','/news','/tools']
            }
        }
    }
</script>

<style scoped>
    .home{
        width:720px;
        margin:0 auto;
        position:relative;
    }
    .header{
        width:720px;
        height:500px;
        position:fixed;
        top:0;
        background:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);
    }
    .text{
        width:720px;
        line-height:40px;
        font-size:36px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:#FFFFFF;
        padding-left:24px;
        padding-top:72px;
    }
    .mortal{
        margin:0 auto;
        position:absolute;
        left:24px;
        top:-30 0px;
        z-index:100;
    }
    .tab{
        width:720px;
        flex-direction:row;
        background:rgba(255,255,255,1);
        position:fixed;
        bottom:0;
    }
    .container{
        width:250px;
        height:96px;
        line-height:96px;
        flex:1;
        text-align:center;
    }
    .active{
        color:red;
    }
</style>