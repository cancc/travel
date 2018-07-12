<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-image" :src="item.iconUrl">
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
    data() {
      return {
        swiperOption: {},
        iconList: [{
          id: '01',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },{
          id: '02',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },{
          id: '03',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '郑州必游'
        },{
          id: '04',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        },{
          id: '05',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '名胜古迹'
        },{
          id: '06',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '自然风光'
        },{
          id: '07',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
          desc: '当地好玩'
        },{
          id: '08',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/a6521252870ea402.png',
          desc: '学生专享'
        },{
          id: '09',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
          desc: '生活休闲'
        },{
          id: '10',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '牡丹花会'
        }]
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
@import '~styles/varibles.styl';
.icons >>> .swiper-container
      overflow: hidden
      height: 0
      padding-bottom: 50%
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


</style>