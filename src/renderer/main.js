import Vue from 'vue'
import { sync } from 'vuex-router-sync';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase'
/*
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
*/
import firebaseConfig from '@/common/firebaseConfig'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig)
//Dosnt work atm on electon
//Vue.prototype.$firebaseui = new firebaseui.auth.AuthUI(firebase.auth())
Vue.use(VueMaterial);

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
