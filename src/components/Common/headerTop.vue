<template>
    <div class="header">
        <text class="icon-back" :style="{fontFamily:'iconfont',color:'gray',fontSize:'40px'}" @click="back(router)">{{"\ue618"}}</text>
        <text class="header-title">{{title}}</text>
    </div>
</template>

<script>
    export default {
        props:{
            title : String,
            router : String
        },
        methods:{
            back(router){
                this.$router.push(router)
            }
        }
    }
</script>

<style scoped>
    .header{
        width:720px;
        height:96px;
        padding-left:32px;
        background:rgba(255,255,255,1);
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    .header-title{
        flex:1;
        text-align:center;
        line-height:96px;
        font-size:40px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(53,53,53,1);
        line-height:40px;
    }
</style>