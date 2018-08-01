<template>
	<div class="detail">
		<detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="categoryList"></detail-list>
		<div class="content"></div>
	</div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
	name: 'Detail',
	data() {
		return {
			sightName: '',
			bannerImg: '',
			categoryList: [],
			gallaryImgs: [],
		}
	},
	mounted() {
		this.getDetailData()
	},
	methods: {
		getDetailData() {
			axios.get('/api/detail.json',{
				params: {
					id: this.$route.params.id
				}
			}).then((res) => {
				console.log(res)
				if(res.data.code === 0) {
					this.bannerImg = res.data.data.bannerImg
					this.categoryList = res.data.data.categoryList
					this.gallaryImgs = res.data.data.gallaryImgs
					this.sightName = res.data.data.sightName
				}else {
					console.log("error")
				}
			})
		},
		activated() {
			console.log('123')
			this.getDetailData()
		},
	},
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	}
}
</script>

<style lang="stylus" scoped>
.content
	height 50rem
</style>

