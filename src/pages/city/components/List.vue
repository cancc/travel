<template>
	<div class="list" ref="warpper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-warpper" v-for="item in hotCities" :key="item.id">
						<div class="button">{{item.name}}</div>
					</div>	
				</div>
			</div>
			<div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" 
						v-for="cityName in item" 
						:key="cityName.id">
						{{cityName.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'List',
	props: {
		hotCities: Array,
		cities: Object,
		letter: String,
	},
	mounted() {
		this.scrollList = new BScroll(this.$refs.warpper);
	},
	watch: {
		letter() {
			if(this.letter) {
				const element = this.$refs[this.letter][0];
				console.log(element);
				this.scrollList.scrollToElement(element);
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-bottom
		&:before
			border-color #777
	.list
		position absolute
		top 1.58rem
		left 0
		right 0
		bottom 0
		overflow hidden
		.title
			font-size 0.4rem
			line-height 0.5rem
			background #ccc
			padding-left 0.2rem
			color #666
		.button-list
			overflow hidden
			padding 0.1rem 0.6rem 0.1rem 0.1rem
			.button-warpper
				float left
				width 33.33%
				.button
					margin 0.1rem
					text-align center
					padding 0.1rem
					font-size 0.3rem
					color #666
					border 1px solid #ccc
					border-radius 0.1rem
		.item-list
			.item
				line-height 0.76rem
				padding-left 0.2rem
</style>