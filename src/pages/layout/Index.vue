<template>
  <el-scrollbar style="height: 100%;">
    <Header />

    123123

    <router-view/>
  </el-scrollbar>
</template>


<script>
import Header from './Header/Index.vue'
export default {
  name: 'Index',
  data() {
    return {}
  },
  components:{Header}
}
</script>

<style>
.el-scrollbar__wrap{
  overflow:hidden;
  overflow-y: scroll !important;
}
</style>
