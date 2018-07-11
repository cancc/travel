<template>
    <div>
        <home-header></home-header>
    </div>
    
</template>

<script>
import HomeHeader from './components/Header'
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Home'
        }     
    },
    components: {
        HomeHeader
    }
}
</script>

<style>

</style>