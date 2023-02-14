<template>
    <div>
        <navShop></navShop>
        <container/>
        <todayRecommend/>
        <rank/>
        <like/>
        <floor/>
        <floor/>
        <blank/>
        
    </div>
</template>

<script>
    import container from './container/index.vue'
    import todayRecommend from './todayRecommend/index.vue'
    import rank from './Rank/index.vue'
    import like from './like/index.vue'
    import floor from './floor/index.vue'
    import blank from './blank/index.vue'
    export default {
        name:'home',
        data() {
            return {
                
            }
        },
        components:{
            container,
            todayRecommend,
            rank,
            like,
            floor,
            blank
        }
    }
</script>

<style lang="less" scoped>

</style>