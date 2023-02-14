import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
//引入组件
import Home from '../views/Home/index.vue'
import Search from '../views/Search/index.vue'
import Register from '../views/Register/index.vue'
import Login from '../views/Login/index.vue'
const routes = [
  {
    path:"/home",
    name:'home',
    component:Home,
    meta:{
      footerShow:true
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      footerShow: false
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      footerShow: false
    }
  },
  {
    path: "/search/:keyWord?",
    component: Search,
    name:'search',
    meta: {
      footerShow: true
    }
  },
  {
    path:'/',
    redirect:'/home',
  }

]

const router = new VueRouter({
  routes
})

export default router
