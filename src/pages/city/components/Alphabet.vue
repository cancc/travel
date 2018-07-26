<template>
	<ul class="list">
		<li class="item" v-for="(item, key) in cities"
		 :key="key">
		 {{key}}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';  
	.list
		display flex
		flex-direction column
		justify-content center
		position absolute
		width 0.4rem
		top 1.58rem
		right 0
		bottom 0
		.item
			text-align center
			height 0.4rem
			color $bgColor
</style>