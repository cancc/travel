<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" @focus="focus" @blur="blur" type="text" :placeholder="placeholder">
		</div>
	
			<div class="search-content" v-show="keyword" ref="search">
				<ul>
					<li class="search-item border-bottom" v-show="this.noData">暂无匹配数据...</li>
					<li class="search-item border-bottom" 
						v-for="item in list" 
						:key="item.id"
						@click="changeCity(item.name)"
						>
						{{item.name}}
					</li>
				</ul>
			</div>

		
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CitySearch',
		props: {
			cities: Object
		},
    data() {
        return {
					placeholder: '请输入城市名或拼音',
					list: [],
					timer: null,
					keyword: ''
        }
    },
		mounted () {
			this.scroll = new BScroll(this.$refs.search)
		},
		methods: {
			changeCity(city) {
				this.$store.commit('changeCityValue', city);
				this.$router.push('/');
			},
			focus() {
				this.placeholder = ''
			},
			blur() {
				this.placeholder = "请输入城市名或拼音"
			}
		},
		watch: {
			keyword() {
				if(this.timer) {
					clearTimeout(this.timer);
				}
				if(!this.keyword) {
					this.list = [];
					return
				}
				this.timer = setTimeout(() => {
					const result = [];
					for(let i in this.cities) {
						this.cities[i].forEach((value) => {
							if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1) {
								result.push(value)
							}
						});
					}
					this.list = result;
				})
			}
		},
		computed: {
			noData() {
				return !this.list.length
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
.search-content
	position absolute
	top 1.58rem
	left 0
	right 0
	bottom 0
	z-index 10
	overflow hidden
	.search-item
		padding-left 0.2rem
		line-height 0.62rem
		color #666
		background #fff

</style>