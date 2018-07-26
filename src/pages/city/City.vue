<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<list></list>
	</div>
</template>

<script>

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import List from './components/List'
export default {

	components: {
		CityHeader,
		CitySearch,
		List,
	}
}
</script>

<style lang="stylus" scoped>

</style>