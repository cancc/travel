<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-image" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>  
    
</div>
</template>

<script>

export default {
    name: 'HomeIcon',
    props: {
      iconList: Array
    },
    data() {
      return {
        swiperOption: {},
        
      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconList.forEach((item,index) => {
          const page = Math.floor(index/8)
          if(!pages[page]) {
            pages[page] = []
          }
            pages[page].push(item)
        
        })
        return pages
      }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
        overflow: hidden
        height: 0
        padding-bottom: 50%
  .icons
    margin-top: 0.1rem
    .icon
      position: relative
      overflow: hidden
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      .icon-img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: 0.44rem
        box-sizing: border-box
        padding: 0.1rem
        .icon-image
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0 
          height: 0.44rem
          line-height: 0.44rem 
          text-align: center
          color: $darkTextColor
          ellipsis()

</style>