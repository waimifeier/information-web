<template>
  <header class="page-header">
    <div class="navbar">
      <a href="/" class="logo">
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="logo" />
      </a>

      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"  class="navbar-menu">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">我的工作台</el-menu-item>
        <el-menu-item index="4">消息中心</el-menu-item>
      </el-menu>

      <span class="download-login">
        <a href="Javascript:;">下载APP</a>
        <el-divider direction="vertical"></el-divider>
        <a href="//m.imooc.com/account/login">登录</a>
      </span>
      <div class="navbar-from">
        <span>登陆</span> / <span>注册</span>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: 'Index',
  data() {
    return {
      activeIndex:"1"
    }
  },
  methods:{
    handleSelect(){

    }
  }
}
</script>

<style scoped>

</style>
