<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';  
.search
	background $bgColor
	padding 0 0.1rem
	height 0.72rem
	.search-input
		box-sizing border-box
		height 0.62rem
		line-height 0.62rem
		width 100%
		border-radius 0.06rem
		text-align center
		padding 0 0.1rem
		color #666
</style>