<template>
	<div>
		<div class="banner" id="bannerId">
			<img @click="handleShowGallary" class="banner-img" 
			:src="bannerImg" alt="">
			<div class="banner-info">
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe64b;</span>
					13
				</div>
				<div class="banner-title">{{sightName}}</div>
			</div>
		</div>
		<common-gallary @handleCloseGallary="Close" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'DetailBanner',
	props: {
		bannerImg: String,
		gallaryImgs: Array,
		sightName: String,
	},
	data() {
		return {
			banner_height: 100,
			showGallary: false,
		}
	},
	mounted() {
		this.getBannerHeight()
	},
	computed: {
		...mapState(['bannerHeight'])
	},
	methods: {
		getBannerHeight() {
			let height = document.getElementById("bannerId").scrollHeight
			this.banner_height = height
		},
		changeBannerH(banner_height) {
			this.changeBannerHeight(this.banner_height)
			//console.log(this.banner_height)
		},
		...mapMutations(['changeBannerHeight']),
		handleShowGallary() {
			this.showGallary = true
		},
		Close() {
			this.showGallary = false
		}
	},
	activated() {
		this.changeBannerH()
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>    
	.banner
		position relative
		overflow hidden
		height 0
		padding-bottom 55%
		.banner-img
			width 100%
		.banner-info
			position absolute
			left 0
			bottom 0
			right 0
			line-height 0.6rem
			padding 0.2rem 0.2rem 
			color #fff
			text-shadow 0 1px 2px rgba(0,0,0,0.8);
			background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
			.banner-title
				font-size 0.36rem
			.banner-number
				height 0.4rem
				width 1.2rem
				line-height 0.4rem
				border-radius 0.2rem
				background rgba(0,0,0,0.6)
				.banner-icon
					margin 0 0.06rem 0 0.2rem
				
				
			
</style>

