<template>
  <div id="app">
    <!-- exclude 重新刷新获得数据，清除本地储存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive> 
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
