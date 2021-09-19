import Vue from 'vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import 'bulma/css/bulma.css'
import './assets/css/main.css';

import App from './App.vue'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  ElementUI,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
