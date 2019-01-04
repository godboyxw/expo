<template>
    <div class="goods">
        <div class="search" style=" width:720px;height:100px;padding:20px 0 20px 32px;box-sizing:border-box;background:rgba(255,255,255,1);position:relative;flex-direction:row;align-items:center;">
            <input type="search" class="inp_search" placeholder="输入你喜欢的商品" value="" ref="input1" style=" width:540px;height:60px;margin:0;font-size:24px;padding-left:88px;background:rgba(241,241,241,1);border:1px solid rgba(187,187,187,1);border-radius:60px; outline:none;"/>
            <text class="icon-search" :style="{fontFamily:'iconfont',color:'black',fontSize:'32px'}" style=" position:absolute;left:60px;top:34px;">{{"\ue615"}}</text>
            <div class="all" style="flex:1;flex-direction:row;justify-content:space-around;position:relative;">
                <text class="all_txt" style=" font-size:28px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(85,85,85,1);">全部</text>
                <text class="icon-pulldown" :style="{fontFamily:'iconfont',color:'gray',fontSize:'32px'}" @click="setIcon">{{fontName}}</text>
                <list class="lists" v-if="show" style=" background:rgba(255,255,255,1);border:1px solid #dfdfdf;border-radius:10px;position:absolute;z-index:100;right:32px;top:52px;">
                    <cell v-for="(num,key) in lists" :key="key">
                        <div class="panel" style="width:240px;height:90px;">
                            <text class="list_text" style="font-size:30px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(68,68,68,1);line-height:90px;text-align:center;">{{num}}</text>
                        </div>
                    </cell>
                </list>
            </div>
        </div>
        <div class="content" style="width:720px;background:rgba(255,255,255,1);padding-left:32px;padding-right:32px;flex-direction:row;flex-wrap:wrap;justify-content:space-between;">
            <div v-for="(item,index) in arr" :key="index" @click="push">
                <div class="img" style=" width:320px;height:320px;background:rgba(255,255,255,1);border:1px solid rgba(220,220,220,1);border-radius:10px;justify-content:center;align-items:center;"><image style="width:223px;height:176px" :src="item.img"/></div>
                <text class="content_txt" style=" font-size:28px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(68,68,68,1);line-height:84px;">{{item.text}}</text>
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
            },
            push(){
                this.$router.push('/banner')
            }
        }
    }
</script>

<style scoped>
    .search{
       /** width:720px;
        height:100px;
        padding:20px 0 20px 32px;
        box-sizing:border-box;
        background:rgba(255,255,255,1);
        position:relative;
        flex-direction:row;
        align-items:center;**/
    }
    .inp_search{
        width:540px;
        height:60px;
        margin:0;
        font-size:24px;
        padding-left:88px;
        background:rgba(241,241,241,1);
        border:1px solid rgba(187,187,187,1);
        border-radius:60px;
        outline:none;
    }
    .icon-search{
        position:absolute;
        left:60px;
        top:34px;
    }
    .all{
        flex:1;
        flex-direction:row;
        justify-content:space-around;
        position:relative;
    }
    .all_txt{
        font-size:28px;
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
        right:32px;
        top:52px;
        
    }
    .panel{
        width:240px;
        height:90px;
    }
    .list_text{
        font-size:30px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(68,68,68,1);
        line-height:90px;
        text-align:center;
    }
    .content{
        width:720px;
        background:rgba(255,255,255,1);
        padding-left:32px;
        padding-right:32px;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .img{
        width:320px;
        height:320px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(220,220,220,1);
        border-radius:10px;
        justify-content:center;
        align-items:center;
    }
    .content_txt{
        font-size:28px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(68,68,68,1);
        line-height:84px;
    }
</style>