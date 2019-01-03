<template>
    <div class="container-box">
        <div class="content">
            <div class="header">
                <text class="icon-back" :style="{fontFamily:'iconfont',color:'#353535',fontSize:'32px'}" @click="back">{{"\ue618"}}</text>
                <text class="sell">购物车</text>
            </div>
            <div><cart v-for="(item, index) in arr" :key="index" :obj="item"></cart></div>
        </div>
        <div class="footer">
            <text class="total">总金额  ¥5965.00</text>
            <text class="account" @click="jump">结算</text>
        </div>
    </div>
</template>

<script>
    import cart from './cart'
    export default {
        components:{
            cart
        },
        data(){
            return {
                arr:[
                    {
                        src:"http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg",
                        desc:'艾博斯（Airproce） 空气净化器AL-730',
                        rent:300,
                        deposit:500
                    },
                    {
                        src:"http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg",
                        desc:'艾博斯（Airproce） 空气净化器AL-730',
                        rent:300,
                        deposit:500
                    },
                    {
                        src:"http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg",
                        desc:'艾博斯（Airproce） 空气净化器AL-730',
                        rent:300,
                        deposit:500
                    },
                    {
                        src:"http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg",
                        desc:'艾博斯（Airproce） 空气净化器AL-730',
                        rent:300,
                        deposit:500
                    },
                    {
                        src:"http://img1.imgtn.bdimg.com/it/u=1536209972,2621737667&fm=26&gp=0.jpg",
                        desc:'艾博斯（Airproce） 空气净化器AL-730',
                        rent:300,
                        deposit:500
                    }
                ]
            }
        },
        methods:{
            back(){
                this.$router.push('/tools')
            },
            jump(){
                 this.$router.push('/order')
            }
        }
    }
</script>

<style scoped>
    .container-box{
        width:720px;
        display: flex; 
        flex-direction: column; 
       /** background: red;**/
        min-height: 100vh;
    }
    .header{
        width:720px;
        height:96px;
        padding-left:32px;
        border-bottom:10px solid #EEEEEE;
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
        flex:1;
    }
    .footer{
       /** position: fixed;
        bottom:0;
        left:0;
        right:0;**/
        flex: 0;
        /**height:146px;  **/   
    }
    .total{
        width:720px;
        height:50px;
        background:rgba(255,255,255,1);
        border-top:6px solid #EEEEEE;
        text-align:center;
        line-height:50px;
        font-size:28px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(85,85,85,1);
    }
    .account{
        width:720px;
        height:90px;
        background:rgba(8,117,209,1);
        text-align:center;
        line-height:90px;
        font-size:32px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
</style>