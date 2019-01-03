<template>
    <div class="goods">
        <div class="search">
            <input type="search" class="inp_search" placeholder="输入你喜欢的商品" value="" ref="input1"/>
            <text class="icon-search" :style="{fontFamily:'iconfont',color:'black',fontSize:'32px'}" >{{"\ue615"}}</text>
            <div class="all">
                <text class="all_txt">全部</text>
                <text class="icon-pulldown" :style="{fontFamily:'iconfont',color:'gray',fontSize:'32px'}" @click="setIcon">{{fontName}}</text>
                <list class="lists" v-if="show">
                    <cell v-for="(num,key) in lists" :key="key">
                        <div class="panel">
                            <text class="list_text">{{num}}</text>
                        </div>
                    </cell>
                </list>
            </div>
        </div>
        <div class="content">
            <div v-for="(item,index) in arr" :key="index">
                <div class="img"><image style="width:223px;height:176px" :src="item.img"/></div>
                <text class="content_txt">{{item.text}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                arr:[
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        text:'索尼a5100相机（含1...'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        text:'索尼a5100相机（含1...'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        text:'索尼a5100相机（含1...'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        text:'索尼a5100相机（含1...'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        text:'索尼a5100相机（含1...'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        text:'索尼a5100相机（含1...'
                    }
                ],
                fontName:"\ue617",
                lists:['潮玩科技','家庭影像','音响设备','视频游戏','数码影像','数码配件'],
                show:false
            }
        },
        methods:{
            setIcon(){
                this.fontName = "\ue616";
                this.show=!this.show;
                if(this.show){
                    this.fontName= "\ue617";
                }
            }
        }
    }
</script>

<style scoped>
    .search{
        width:375px;
        height:50px;
        padding:10px 0 10px 16px;
        box-sizing:border-box;
        background:rgba(255,255,255,1);
        position:relative;
        flex-direction:row;
        align-items:center;
    }
    .inp_search{
        width:270px;
        height:30px;
        margin:0;
        font-size:12px;
        padding-left:44px;
        background:rgba(241,241,241,1);
        border:1px solid rgba(187,187,187,1);
        border-radius:30px;
        outline:none;
    }
    .icon-search{
        position:absolute;
        left:30px;
        top:17px;
    }
    .all{
        flex:1;
        flex-direction:row;
        justify-content:space-around;
        position:relative;
    }
    .all_txt{
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(85,85,85,1);
    }
    .lists{
        background:rgba(255,255,255,1);
        border:1px solid #dfdfdf;
        border-radius:10px;
        position:absolute;
        z-index:100;
        right:16px;
        top:26px;
        
    }
    .panel{
        width:120px;
        height:45px;
    }
    .list_text{
        font-size:15px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(68,68,68,1);
        line-height:45px;
        text-align:center;
    }
    .content{
        width:375px;
        background:rgba(255,255,255,1);
        padding-left:16px;
        padding-right:16px;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .img{
        width:160px;
        height:160px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(220,220,220,1);
        border-radius:5px;
        justify-content:center;
        align-items:center;
    }
    .content_txt{
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(68,68,68,1);
        line-height:42px;
    }
</style>