<template>
    <div>
        <headerTop :title="title" :router="router"></headerTop>
        <detailsItem v-for="(item, index) in 5" :key="index" class="detailsItem"></detailsItem>
    </div>
</template>

<script>
    import headerTop from '../Common/headerTop'
    import detailsItem from './detailsItem'
    export default {
        components:{
            headerTop,
            detailsItem
        },
        data() {
            return {
                title : '购票',
                router : '/tickets'
            }
        },
    }
</script>

<style scoped>
    .detailsItem{
        margin-bottom:30px;
        align-self:center;
    }
</style>