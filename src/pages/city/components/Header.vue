<template>
    <div class="header">
        <div>城市选择</div>
				<router-link to="/">
					<div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        	</div>
				</router-link>
        
    </div>
  
</template>

<script>
export default {
    name: 'CityHeader',
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';  
	.header
		position relative
		overflow hidden
		height $headerHeight
		line-height $headerHeight
		color #fff
		text-align center
		font-size 0.36rem
		background $bgColor
		.header-left
			position absolute
			left 0
			top 0
			color #fff
			width: 0.64rem
			float: left
			.back-icon
				text-align: center
				font-size: 0.4rem
</style>