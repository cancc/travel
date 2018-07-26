<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<list></list>
		<city-alphabet></city-alphabet>
	</div>
</template>

<script>

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import List from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
	components: {
		CityHeader,
		CitySearch,
		List,
		CityAlphabet
	}
}
</script>

<style lang="stylus" scoped>

</style>