<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :letter="letter" :hotCities="hotCities" :cities="cities"></city-list>
		<city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
	data() {
		return {
			hotCities: [],
			cities: {},
			letter: ''
		}
	},
	mounted() {
		this.cityData();
	},
	methods: {
		cityData() {
			axios.get('/api/city.json')
				.then((res) => {
					console.log(res);
					if (res.data.code === 0) {
						let hotCities = res.data.data.hotCities;
						let cities = res.data.data.cities;
						this.hotCities = hotCities;
						this.cities = cities;
						console.log(this.hotCities);
						console.log(this.cities);
					}
				})
		},
		handleLetterChange(letter) {
			this.letter = letter;
			// console.log(letter);
		}
	},
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	}
}
</script>

<style lang="stylus" scoped>

</style>