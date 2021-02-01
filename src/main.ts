import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import router from '@/app-modules/router'
import store from '@/app-modules/store'
import vuetify from './plugins/vuetify';
import Helpers from '@/plugins/helpers';

Amplify.configure(aws_exports);
Helpers.init();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
