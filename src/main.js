import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局CSS样式文件
import '@/assets/less/global.css'
// dataV组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
// antv组件库
import { Icon, Progress } from 'ant-design-vue'
Vue.use(Icon)
Vue.use(Progress)
// 挂载时间
import moment from 'moment'
moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
