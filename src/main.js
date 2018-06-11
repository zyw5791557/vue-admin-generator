import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css'
// A modern alternative to CSS resets
import '@/styles/index.scss'

// global control
import '@/permission'

// global css
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
