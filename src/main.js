import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import '../src/assets/css/vantui.css'
import '../src/assets/css/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element.css'
import VCharts from 'v-charts'
import echarts from 'echarts'
import './utils/chart.resize.js'
import {
    Base64
} from 'js-base64'
import NavigatorApi from '@/utils/navigator';
import '@a/js/rem.js'
import '@/assets/font/font.css'

const android = window.android
export {
    android
}


Vue.use(VCharts)
Vue.use(ElementUI)
Vue.use(Vant)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$Base64 = Base64;



window.navigatorApi = new NavigatorApi()
window.navigatorApi.getCurrentPosition()
window.navigatorApi.watchPosition()

router.beforeEach((to, form, next) => {
    window.document.title = to.meta.title == undefined ? '津南养老服务' : to.meta.title
    next()
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')