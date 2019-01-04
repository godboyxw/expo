<template>
    <div class="display" style="width:720px;height:1280px;position:fixed;top:0;bottom:0;left:0;right:0;">
        <div class="header" style=" width:720px;height:96px;padding-left:20px;margin-bottom:100px;">
            <text class="icon-back" :style="{fontFamily:'iconfont',color:'gray',fontSize:'32px'}" @click="back">{{"\ue618"}}</text>
            <text class="text" @click="back" style=" flex:1;margin-left:20px;line-height:40px;font-size:36px;font-family:SourceHanSansCN-Medium;font-weight:500;color:rgba(255,255,255,1);">参展商应用</text>
        </div>
        <Mortal :arr="arr" :isShow="isShow" :numSlice="numSlice"></Mortal>
    </div>
</template>

<script>
    import Mortal from './Mortal.vue'
    export default {
        components:{
            Mortal
        },
        data(){
            return{
                arr:['展会信息','会议室预约','展具租赁','广告申请','问题反馈','缴费中心','申请展位','表格填写','特装搭建','展品运输','清洁服务','清洁服务','清洁服务','清洁服务'],
                isShow:false,
                numSlice:12
            }
        },
        methods: {
            back(){
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
    .display{
        background-image:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);
    }
    .header{
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
    }
</style>