<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-warpper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        <span></span>
                        <span>{{item.desc}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    },
    data() {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'

    .title
        margin-top: 0.2rem
        line-height: 0.8rem
        background: #eee
        text-indent: 0.2rem
    .item-img-warpper
        overflow: hidden
        height: 0
        padding-bottom: 37%
        .item-img
            width: 100%
    .item-info
        padding: 0.1rem
        .item-title
            line-height: 0.54rem
            font-size: 0.32rem
            ellipsis()
        .item-desc
            line-height: 0.4rem
            color: #ccc
            ellipsis()
</style>