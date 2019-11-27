<template>
  <header class="header">
    <div class="l-content">
      <el-button
        class="btn-menu"
        icon="el-icon-menu"
        @click="CollapseMenu"
      ></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="selelctmenu.label">{{
          selelctmenu.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-image src="http://wnhja.cn/images/user.jpg"></el-image>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    }
  },
  methods: {
    ...mapMutations({
      CollapseMenu: "CollapseMenu"
    }),
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    ...mapState({
      selelctmenu: state => state.tab.menu
    })
  }
}
</script>
<style lang="less" scoped>
.header {
  background-color: rgb(84, 92, 100);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    .el-breadcrumb {
      margin-left: 15px;
    }
    .btn-menu {
      background-color: #545c64;
      color: white;
    }
  }
  .r-content {
    .el-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
}
</style>
<style>
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: white;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: white;
}
</style>
