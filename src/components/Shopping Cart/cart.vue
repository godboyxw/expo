<template>
    <div class="container">
        <div class="image">
            <image style="width:247px;height:230px;"/>
        </div>
        <div class="info">
            <text class="desc">{{obj.desc}}</text>
            <text class="rent">租金    ¥{{obj.rent}}/天</text>
            <text class="deposit">押金    ¥{{obj.deposit}}</text>
            <text class="count"></text>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            obj:{
                type:Object,
                default: {
                        desc:'艾博斯（Airproce） 空气净化器AL-730',
                        rent:300,
                        deposit:500
                    }  //Props with type Object/Array must use a factory function to return the default value.
            } 
        }
    }
</script>

<style scoped>
    .container{
        width:720px;
        height:280px;
        background:rgba(255,255,255,1);
    }
    .image{
        width:247px;
        height:230px;
    }
</style>