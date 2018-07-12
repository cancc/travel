<template>
<div class="swiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.url">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>

</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 3000
            },
            swiperList: [{
                    id: '01',
                    url: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
                },{

                    id: '02',
                    url: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
                },{

                    id: '03',
                    url: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
                },{

                    id: '04',
                    url: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
                }]
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
    padding-bottom: 26.67%
    .swiper-img
        width: 100%
    
</style>