export default {
  state: {
    isCollapse: false, //折叠
    menu: [],
    tabList: []
  },
  mutations: {
    selectmenu(state, val) {
      //面包屑
      if (val.label !== "首页") {
        state.menu = val
      } else {
        state.menu = []
      }
      const item = state.tabList.find(item => item.label === val.label)
      item ? "" : state.tabList.push(val)
    },
    closeTab(state, val) {
      const index = state.tabList.findIndex(item => item.label === val.label)
      state.tabList.splice(index, 1) //删除
    },
    CollapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
