<template>
  <header>
    <div class="navbar">
      <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="" class="logo"/>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"  class="el-menu-demo">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

    <span class="download-login">
      <a href="Javascript:;">下载APP</a>
      <el-divider direction="vertical"></el-divider>
      <a href="//m.imooc.com/account/login">登录</a>
    </span>
    </div>
  </header>
</template>


<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  methods:{
    handleSelect(){

    }
  }
}
</script>

<style scoped>

</style>
