<template>
  <el-container style="  height: 100vh;">
    <el-aside width="auto">
      <commonAside></commonAside>
    </el-aside>
    <el-container>
      <el-header>
        <commonHeader></commonHeader>
      </el-header>
      <commonTab></commonTab>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue"
import commonAside from "@/components/commonAside.vue"
import commonTab from "@/components/commonTab.vue"
export default {
  components: {
    commonHeader,
    commonAside,
    commonTab
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
