<template>
  <div class="tags">
    <el-tag
      :key="tag.label"
      size="small "
      v-for="tag in tags"
      closable
      :disable-transitions="false"
      @click="changeMenu(tag)"
      @close="handleClose(tag)"
      :type="$route.path == tag.path ? 'dark ' : 'light '"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  computed: {
    ...mapState({ tags: state => state.tab.tabList })
  },
  data() {
    return {
      inputVisible: false,
      inputValue: ""
    }
  },
  methods: {
    ...mapMutations({
      close: "closeTab",
      selectmenu: "selectmenu"
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(tag) {
      this.$router.push(tag.path)
      this.selectmenu(tag)
    }
  }
}
</script>
<style lang="less" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
