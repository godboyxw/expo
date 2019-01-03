<template>
    <div>
        <div class="lists">
            <div v-for="(item,index) in arr" :key="index" class="item">
                <image style="width:260px;height:200px" :src="item.img" />
                <div class="info">
                    <text class="seller-info">{{item.seller}}</text>
                    <text class="seller-contact">{{item.contact}}</text>
                    <text class="see">查看展品</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr:[
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        seller:'Amazon展商',
                        contact:'联系方式：628-030927'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        seller:'Amazon展商',
                        contact:'联系方式：628-030927'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        seller:'Amazon展商',
                        contact:'联系方式：628-030927'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        seller:'Amazon展商',
                        contact:'联系方式：628-030927'
                    },
                    {
                        img:'http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg',
                        seller:'Amazon展商',
                        contact:'联系方式：628-030927'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .lists{
        width:375px;
        background:rgba(255,255,255,1);
        
        
    }
    .item{
        padding-top:15px;
        padding-bottom:15px;
        padding-left:16px;
        flex-direction:row;
    }
    .info{
        flex:1;
    }
    .seller-info{
        padding-right:82.5px;
        margin-bottom:14.5px;
        text-align:right;
        line-height:17px;
        font-size:18px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(63,63,63,1);
    }
    .seller-contact{
        padding-right:55.5px;
        text-align:right;
        margin-bottom:32px;
        line-height:12px;
        font-size:12px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(171,171,171,1);
    }
    .see{
        width:80px;
        height:25px;
        /**align-self:center;**/
        margin-left:43px;
        border:1px solid rgba(29,141,243,1);
        border-radius:12.5px;
        text-align:center;
        font-size:12px;
        line-height:25px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(29,141,243,1);
    }
</style>