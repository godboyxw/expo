<template>
    <div class="container">
        <div class="wrapper">
            <card v-for="(item, index) in arr" :key="index" :desc="item" class="card"></card>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        components:{
            Card
        },
        data(){
            return {
                arr:[
                    {
                        src:"http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg/",
                        desc:'麒麟叶',
                        discount1:'租5送2',
                        discount2:'租7送3',
                        price:'¥25',
                    },
                     {
                        src:"http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg/",
                        desc:'金钻蔓绿绒',
                        discount1:'租5送2',
                        discount2:'租7送3',
                        price:'¥15',
                    },
                     {
                        src:"http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg/",
                        desc:'麒麟叶',
                        discount1:'租5送2',
                        discount2:'租7送3',
                        price:'¥25',
                    },
                     {
                        src:"http://img2.imgtn.bdimg.com/it/u=3830392766,3562967206&fm=26&gp=0.jpg/",
                        desc:'麒麟叶',
                        discount1:'租5送2',
                        discount2:'租7送3',
                        price:'¥25',
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .container{
        width:720px;
    }
    .wrapper{
       flex-direction:row;
       flex-wrap:wrap;
       justify-content:space-between;
       padding:10px 24px 0 24px;
    }
    .card{
        width:328px;
        margin-bottom:20px;
    }
</style>