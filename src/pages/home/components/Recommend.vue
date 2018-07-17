<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc"><span></span><span>{{item.desc}}</span></p>
					<button class="item-button">查看详情</button>	
				</div>
			</li>
		</ul>
	</div>
		

</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		recommendList: Array
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'

	.title
		margin-top: 0.2rem
		line-height: 0.8rem
		background: #eee
		text-indent: 0.2rem
	.item
		overflow: hidden
		display: flex
		height: 2rem
		.item-img
			width: 1.8rem
			height: 1.8rem
			padding: 0.1rem
		.item-info
			flex: 1
			padding: 0.1rem
			min-width: 0
			.item-title
				line-height: 0.54rem
				font-size: 0.32rem
				ellipsis()
			.item-desc
				line-height: 0.4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: 0.44rem
				margin-top: 0.26rem
				background: #ff9300
				padding: 0 0.2rem
				border-radius: 0.1rem
				color: #fff
			

</style>