<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="showHeaderFixed">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" :style="opacityShow" v-show="!showHeaderFixed">
            <div>景区详情</div>
            <router-link to="/" tag="div" class="header-left">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'DetailHeader',
    data() {
        return {
            showHeaderFixed: true,
            opacityShow: {
                opacity: 0
            },
        }
    },
    computed: {
        ...mapState(['bannerHeight'])
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop
            //console.log(top)
            if(top > 1 || top > this.bannerHeight ) {
                this.showHeaderFixed = false
                this.opacityShow.opacity = top/(this.bannerHeight - 53)
            }else {
                this.showHeaderFixed = true
                
            }
        }
    }
	
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';  
    .header-abs
        position absolute
        top 0
        left 0
        width 0.8rem
        height 0.8rem
        line-height 0.8rem
        border-radius 0.4rem
        text-align center
        background rgba(0, 0, 0, 0.6)
        .back-icon
            color #fff
            font-size 0.4rem
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        .header-left
            position absolute
            top 0
            left 0
            width 0.64rem
            .back-icon
                text-align center
                font-size 0.4rem
            
</style>