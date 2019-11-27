<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item
      v-for="(item, index) in noChildren"
      :index="item.path"
      :key="index"
      @click="addmenu(item)"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title"> {{ item.label }}</span>
      </template>
      <el-menu-item
        v-for="chilrden in item.children"
        :key="chilrden.label"
        :index="chilrden.path"
        @click="addmenu(chilrden)"
        >{{ chilrden.label }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "el-icon-s-home"
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "el-icon-monitor"
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "el-icon-user"
        },
        {
          label: "其他",
          icon: "el-icon-setting",
          children: [
            { path: "/page1", label: "页面1" },
            { path: "/page2", label: "页面2" }
          ]
        }
      ]
    }
  },
  methods: {
    addmenu(item) {
      this.$router.push(item.path)
      this.$store.commit("selectmenu", item)
    }
  },
  computed: {
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    },
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.el-menu-vertical {
  height: 100%;
  border: none;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
