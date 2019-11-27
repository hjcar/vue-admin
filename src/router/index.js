import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("../views/main.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home/home.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import("../views/user/user.vue")
      },
      {
        path: "video",
        name: "video",
        component: () => import("../views/video/video.vue")
      },
      {
        path: "page1",
        name: "page1",
        component: () => import("../views/other/page1.vue")
      },
      {
        path: "page2",
        name: "page2",
        component: () => import("../views/other/page2.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

//解决路由重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
