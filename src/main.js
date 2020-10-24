import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import _ from 'lodash'
import vuetify from '@/plugins/vuetify'
import store from '@/data/data'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

//Import lodash as global dependency
Vue.prototype._ = _ 

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Use element UI
Vue.use(ElementUI);

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
