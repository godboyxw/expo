<template>
    <div class="container">
        <div class="bgimg"  @click="to">
            <image style="width:750px;height:360px" resize="stretch" src="http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg"/>
        </div>
        <div class="header">
            <div class="avatar"></div>
            <div class="info" >
                <text class="text">索尼展商</text>
                <text class="pub_time" >展期：2018/8/15-8/18</text>
            </div>
            <div class="nav_btn">
                <text class="font" @click="push" >导航</text>
            </div>
        </div>
        <div class="tab" >
            <text v-for="(item,index) in arr" :key="index" @click="jump(index)" :class="key===index? 'active':''" class="txt" >{{item}}</text>
        </div>
       <router-view></router-view>
        <div class="map_menu" >
            <text class="business_debate">商业洽谈</text>
            <text class="custom_service">客服</text>
        </div>
    </div>
</template>

<script>
    import intro from './intro.vue'
    import goods from './goods.vue'
    import seller from './seller.vue'
    // var navigator = weex.requireModule('navigator')
    //const navigator = weex.requireModule("navigator");
    // var modal = weex.requireModule('modal')
    export default {
        data(){ 
            return{
                key:0,
                arr:['简介','展品','同期展商'],
                routers:['/intro','goods','seller'],
                //show:true,
            }
        },
        components:{
            intro,
            goods,
            seller
        },
        methods:{
            jump(index){
                //this.$router.push(url)
                this.key=index;
                //this.show=!this.show;
                // if(this.show){
                //     this.display=true
                // }
               // this.$refs['l'].display="none"
                this.$router.push(this.routers[index])
                //windows.location.href(this.routers[index])
                // navigator.push({url:this.routers[index]})
                // navigator.push({
                //     url: "./goods.vue",
                //     animated: "true"
                // });
            },
            to(){
                this.$router.push('/foo')
            },
            push(){
                this.$router.push('/tools')
            }
        }
    }
</script>

<style scoped>
    .container{
        width:750px;
    }
    .active{
       border-bottom-width:4px;
       border-bottom-style: solid; 
       border-bottom-color: rgba(29,141,243,1);
       color:rgba(29,141,243,1);
    }
    .bgimg{
        width:750px;
        height:360px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
    }
    .header{
        width:750px;
        height:120px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        padding:0 32px 0 36px;
        box-sizing:border-box;
        background:rgba(255,255,255,1);
        margin-bottom:20px;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
    }
    .avatar{
        width:140px;
        height:140px;
        position:relative;
        top:-30px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px 0px rgba(57,57,57,0.23);
        border-radius:50%;
    }
    .info{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin-left:27px;
    }
    .text{
        font-size:32px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(53,53,53,1);
    }
    .pub_time{
        font-size:24px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .nav_btn{
       width:140px;
        height:60px;
        background:rgba(8,117,209,1);
        border-radius:30px;
    }
    .font{
        font-size:30px;
        line-height:60px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        color:rgba(255,255,255,1);
        text-align:center;
    }
    .tab{
        width:750px;
        height:100px;
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        background:rgba(255,255,255,1);
        border-bottom:1px solid rgba(238,238,238,1);
        flex-direction: row;
        justify-content:space-around;
        align-items:center;
    }
    .txt{
        font-size:32px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        line-height: 100px;
    }
    .map_menu{
        width:657px;
        height:89px;
        align-self:center;
        position:fixed;
        bottom:15px;
        border:1px solid rgba(219,236,245,1);
        box-shadow:0px 2px 10px 0px rgba(228,234,246,1);
        border-radius:44px;
        overflow:hidden;
        flex-direction: row;
    }
    .business_debate,.custom_service{
        width:328.5px;
        height:89px;
        font-size:32px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        line-height:89px;
        text-align: center；
    }
    .business_debate{
        background:rgba(29,141,243,1);
        color:rgba(255,255,255,1);
    }
    .custom_service{
        background:rgba(255,255,255,1);
        color:rgba(102,102,102,1);
    }
</style>