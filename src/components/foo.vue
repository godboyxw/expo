<template>
   <div style="width:720px;position:relative;">
        <div class="header" style="width:720px;height:500px;position:fixed;top:0;background:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);" >
            <text style="width:720px;line-height:40px;font-size:36px;font-family:MicrosoftYaHei;font-weight:400;color:#FFFFFF;padding-left:24px;padding-top:72px;">武汉国际博览中心</text>
        </div>
        <Mortal :arr="arr" :isShow="isShow" :numSlice="numSlice" :router="router" style="position:absolute;top:-250px;z-index:100;"></Mortal>
        <div class="tab">
            <text class="container" style="color:red">举办方</text>
            <text class="container"  @click="push">参展商</text>
            <text class="container"  @click="push">服务商</text>
        </div>
   </div>
</template>

<script>
    import Mortal from './Mortal.vue'
    export default {
        components:{
            Mortal
        },
        data() {
            return {
                arr:['展会信息','去买票','餐饮预定','媒体资讯','泊车寻车','全景国博','通勤车查询','问题反馈','行李托管','展品运输','清洁服务','清洁服务','清洁服务','清洁服务'],
                isShow:true,
                numSlice:9,
                router : ['/','/tickets','/food','/news','/tools']
            }
        },
        methods: {
            push(){
                this.$router.push('/display');
                this.$router.push('/service');
            }
        },
    }
</script>

<style scoped>
    .header{
        width:720px;
        height:500px;
        position:fixed;
        top:0;
        background:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);
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
</style>