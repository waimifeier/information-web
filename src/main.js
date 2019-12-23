import Vue from 'vue'
import ElementUI from 'element-ui'
import layout from './pages/layout/Index.vue'
import router from './router'
import 'lib-flexible'

import 'element-ui/lib/theme-chalk/index.css'
import './style/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(layout)
})
