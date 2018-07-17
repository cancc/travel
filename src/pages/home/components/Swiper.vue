<template>
<div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>

</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 3000
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length 
        }
    }
}
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active 
                background: #fff;
.swiper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 30.67%
    .swiper-img
        width: 100%
    
</style>