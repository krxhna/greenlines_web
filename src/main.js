import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import VueGtag from "vue-gtag";
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import Embed from 'v-video-embed';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.forceUpdate();

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// import firebase from "firebase";

// global register
Vue.use(Embed);
// Vue.use(firebase);

Vue.use(StripeCheckout);

Vue.use(VueGtag, {
  config: { id: "UA-208188193-1" }
});
// import firebase from 'firebase';
// import { firestorePlugin } from 'vuefire'

// Vue.use(firestorePlugin)

Vue.use(VueAnalytics, {
  id: 'UA-208188193-1',
  router
});

import { firestorePlugin } from 'vuefire'
import "@/assets/styles/main.css";

Vue.use(firestorePlugin)






Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
