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
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
					<div class="button-warpper">
						<div class="button">北京</div>
					</div>
				</div>
			</div> 
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
				</div>
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
				</div>
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
					<div class="item border-bottom">AAAAAA</div>
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
    name: 'List',
			data() {
		return {
			hotCities: [],
			cities: [],
		}
	},
	mounted() {
		let scroll = new BScroll(this.$refs.warpper);
		this.cityData();
	},
	methods: {
		cityData() {
			axios.get('api/city.json')
				.then((resp) => {
					console.log(resp);
					if(resp.data.code === 0){
						let hotCities = resp.data.data.hotCities;
						let cities = resp.data.data.cities;
						this.hotCities = hotCities;
						this.cities = cities;
						console.log(this.hotCities);
						console.log(this.cities);
					}
				})
		}
	},
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