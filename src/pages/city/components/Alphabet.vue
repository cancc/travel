<template>
	<ul class="list">
		<li class="item" v-for="item in letters" :key="item"
		 @click="handleClick"
		 @touchstart="handerTouchStart"
		 @touchmove="handerTouchMove" 
		 @touchend="handerTouchEnd"
		 :ref="item"
		 >
			{{item}}
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
			touchStatus: false,
			timer: null,
		}
	},
	computed: {
		letters() {
			const letters = [];
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop;
	},
	methods: {
		handleClick(e) {
			this.$emit('change', e.target.innerText);
			// console.log(e.target.innerText)
		},
		handerTouchStart(e) {
			this.touchStatus = true;
		//	console.log(e.target.innerText)
	},
		handerTouchMove(e) {
			if(this.touchStatus) {
				if(this.timer) {
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				const touchY = e.touches[0].clientY - 79;
				const index = Math.floor((touchY - this.startY)/20);
				//console.log(index)
				if(index>=0 && index<this.letters.length) {
					this.$emit('change', this.letters[index]);
				}
			}, 16)
			}
		},
		handerTouchEnd() {
			this.touchStatus = false;
		},
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