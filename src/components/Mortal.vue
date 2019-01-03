<template>
   <div>
        <div class='container' style="width:720px;padding-top: 79px;padding-right: 60px;padding-bottom: 68px;padding-left: 60px; border-radius:20px;" v-if="display1">
            <div class="icon" v-for="(item,key) in arrSlice1" :key="key" style="width:33.33%;margin-bottom:30px;">     
                <div class="avatar" style=" width:84px;height:84px;margin-bottom: 13px;border-width: 1px;border-radius:42px;">
                    <image style="width:84px;height:84px;" resize="stretch" src="http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg"/>
                </div>
                <text class="text" style="height:52px;font-size:28px; line-height:60px;">{{item}}</text> 
            </div> 
            <div class="bnt" style="position:absolute;bottom:52px;left:350px" v-if="arr.length > 9" v-show="isShow">
                <div style="width:20px;height:10px;background:rgba(95,67,220,1);border-radius:5px;" @click="show"></div>
                <div style="width:10px;height:10px;background:rgba(98,162,252,1);border-radius:50%;margin-left:10px;" @click="show"></div>
            </div>
        </div>
        <div class='container' v-show="isShow" style="width:720px;padding-top: 79px;padding-right: 60px;padding-bottom: 98px;padding-left: 60px; border-radius:20px;" v-if="display2">
            <div class="icon" v-for="(item,key) in arrSlice2" :key="key" style="width:33.33%;margin-bottom:30px;">     
                <div class="avatar" style=" width:84px;height:84px;margin-bottom: 13px;border-width: 1px;border-radius:42px;">
                    <image style="width:84px;height:84px;" resize="stretch" src="http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg"/>
                </div>
                <text class="text" style="height:52px;font-size:28px; line-height:60px;">{{item}}</text> 
            </div>
            <div class="bnt" style="position:absolute;bottom:52px;left:350px">
                <div style="width:20px;height:10px;background:rgba(95,67,220,1);border-radius:5px;" @click="show"></div>
                <div style="width:10px;height:10px;background:rgba(98,162,252,1);border-radius:50%;margin-left:10px;" @click="show"></div>
            </div>
        </div>
   </div>

</template>

<script>
   
    export default {
        props:{
            arr:{
                type:Array,
            },
            isShow:{
                type:Boolean,
                default:true
            },
            numSlice:{
                type:Number,
                default:9
            }
        },
        data(){
            return {
               // dataArr : ['展会信息','会议室预约','展具租赁','广告申请','问题反馈','缴费中心','申请展位','表格填写','特装搭建','展品运输','清洁服务','清洁服务','清洁服务','清洁服务'],
                arrSlice1 : [],
                arrSlice2 : [],
                display1:true,
                display2:false
            }
        },
        mounted(){
            this.arrSlice1 = this.arr.slice(0,this.numSlice);
            //console.log(this.arrSlice1);
            this.arrSlice2 = this.arr.slice(this.numSlice,this.arr.length);
            //console.log(this.arrSlice2);
        },  
        methods: {
            show(){
                this.display1 = !this.display1;
                this.display2 = !this.display2;
            }
        },
    }
   
</script>

<style scoped >
    .container{
        width:672px;
       /** height:671px;**/
        margin-left:auto;
        margin-right:auto;
        margin-top: 0;
        margin-bottom: 0;
        padding:79px 95px 98px 95px;
        padding-top: 79px;
        padding-right: 95px;
        padding-bottom: 98px;
        padding-left: 95px;
        box-sizing:border-box;
        background-color:rgba(255,255,255,1);
        box-shadow:0px 1px 16px 5px rgba(53, 53, 53, 0.35);
        border-radius:20px;
        position:relative;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        
    }
    .bnt{
        flex-direction:row;
    }
    .icon{
        width:160.667px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
    }
    .avatar{
        width:84px;
        height:84px;
        margin-bottom: 13px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(65,95,255,1);
        border-radius:42px;
        overflow:hidden;
    }
    .text{
        height:52px;
        font-size:28px;
        font-family:DengXian;
        font-weight:400;
        color:rgba(53,53,53,1);
        line-height:40px;
    }
</style>