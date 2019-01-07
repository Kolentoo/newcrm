import Vue from 'vue'
import App from './App.vue'
/*全局样式*/
import './assets/css/style.scss'
/*国际化*/
import i18n from './i18n'
/*路由*/
import router from './router/router'
/*vuex*/
import store from './vuex/store'
/*element ui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*axios*/
import axios from './utils/http'

/*element ui 默认不支持 6.x 的 vue-i18n 兼容处理*/
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
})

/*把axios 挂载到vue原型上*/
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
