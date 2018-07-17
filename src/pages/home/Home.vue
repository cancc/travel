<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icon :iconList="iconList"></home-icon>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
    
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }     
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json')
                .then((res) => {
                    if(res.data.code === 0) {
                        let info = res.data
                        console.log(info)
                        this.city = info.city
                        this.iconList = info.data.iconList
                        this.swiperList = info.data.swiperList
                        this.recommendList = info.data.recommendList
                        this.weekendList = info.data.weekendList
                    }else{
                            console.log("error")
                    }
                })
        }
    },
    mounted () {
     this.getHomeInfo()
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeekend
    }
}
</script>

<style lang="stylus" scoped>

</style>