import Vue from 'vue'
import App from './App.vue'
import router  from './router/router.js'
import  store from './store/store.js'

Vue.config.productionTip = false
Vue.prototype.$store=store

//监控路由跳转 
router.beforeEach((to, from, next) => {
  // 跳转后滚动条回到顶部
  scrollTo(0,0);
  // 若设置了title，则切换为设置的title 设置title 需要可打开使用
  //if (to.meta && typeof to.meta.title !== 'undefined') document.title = to.meta.title;
  // 其他则继续通过
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
