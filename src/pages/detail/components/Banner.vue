<template>
	<div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1605/97/970d5ffe183b4f2190.img.jpg_600x330_f2e06330.jpg" alt="">
		<div class="banner-info">
			<div class="banner-number"><span class="iconfont banner-icon">&#xe64b;</span>13</div>
			<div class="banner-title">郑州方特水上乐园</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'DetailBanner',
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

