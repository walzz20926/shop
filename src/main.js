import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServe'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//注册三级联动全局组件
import navShop from './views/Home/navShop/index.vue'
Vue.use(ElementUI);
Vue.component(navShop.name,navShop)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
