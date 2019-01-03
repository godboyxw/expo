<template>
   <div style="width:750px;position:relative;">
        <div class="header" style="width:750px;height:500px;position:fixed;top:0;background:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);" >
            <text style="width:750px;line-height:40px;font-size:36px;font-family:MicrosoftYaHei;font-weight:400;color:#FFFFFF;padding-left:24px;padding-top:72px;">武汉国际博览中心</text>
        </div>
        <Mortal :arr="arr" :isShow="isShow" :numSlice="numSlice" style="position:absolute;top:-250px;left:16px;z-index:100;"></Mortal>
        <div class="tab" style="width:750px">
            <text class="container" style="width:250px;height:96px;line-height:96px;color:red">举办方</text>
            <text class="container" style="width:250px;height:96px;line-height:96px;" @click="push">参展商</text>
            <text class="container" style="width:250px;height:96px;line-height:96px;" @click="push">服务商</text>
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
                arr:['展会信息','会议室预约','展具租赁','广告申请','问题反馈','缴费中心','申请展位','表格填写','特装搭建','展品运输','清洁服务','清洁服务','清洁服务','清洁服务'],
                isShow:true,
                numSlice:9
            }
        },
        methods: {
            push(){
                this.$router.push('/display');
                this.$router.push('/service')
            }
        },
    }
</script>

<style scoped>
    .header{
        width:750px;
        height:500px;
        position:fixed;
        top:0;
        background:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);
    }
    .tab{
        flex-direction:row;
        background:rgba(255,255,255,1);
        position:fixed;
        bottom:0;
    }
    .container{
        flex:1;
        height:96px;
        text-align:center;
    }
</style>