import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import CinemaRouter from './cinema'

const routes = [
  movieRouter,
  mineRouter,
  CinemaRouter,
  // /是默认的路径，页面第一打开的时候，就会访问这个路径
  { 
    path: '/', 
    redirect: '/movie' 
  },
  { 
    // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: "/:pathMatch(.*)*",
    redirect: '/mine'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
