import App from './App'
import Vue from 'vue'
// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'

import MallLogin from '@/components/login/login.vue'
Vue.component(MallLogin.name, MallLogin)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
