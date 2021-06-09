import vueRouter from 'vue-router'
import Vue from 'vue'







const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path:'/home',
    component:()=>import('@/views/home/Home')
  },
  {
    path:'/category',
    component:()=>import('@/views/category/Category')
  },
  {
    path:'/profile',
    component:()=>import('@/views/profile/Profile')
  },
  {
    path:'/cart',
    component:()=>import('@/views/cart/Cart')
  }
]


Vue.use(vueRouter)
const router = new vueRouter({
  routes
})


export default router