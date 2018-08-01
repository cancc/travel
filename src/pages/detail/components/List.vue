<template>
	<div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>  
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>    
            </div>
        </div>	
	</div>
</template>

<script>

export default {
    name: 'DetailList',
    props: {
        list: Array,
    }
	
}
</script>

<style lang="stylus" scoped>
.item-title
    height 0.8rem
    line-height 0.8rem
    padding 0 0.6rem
    font-size 0.3rem
    .item-title-icon
        display: inline-block
        position: absolute
        width: .36rem
        height: .36rem
        top: .22rem
        left: .2rem
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
.item-children
    padding 0 0.5rem       
</style>    