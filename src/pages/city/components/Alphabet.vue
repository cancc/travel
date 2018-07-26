<template>
	<div class="list">
		<div class="item">A</div>
		<div class="item">A</div>
		<div class="item">A</div>
		<div class="item">A</div>
		<div class="item">A</div>
		<div class="item">A</div>
	</div>
</template>

<script>
export default {
	name: 'CityAlphabet',
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