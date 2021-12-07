import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-208188193-1" }
});
// import firebase from 'firebase';
// import { firestorePlugin } from 'vuefire'

// Vue.use(firestorePlugin)

Vue.use(VueAnalytics, {
  id: 'UA-208188193-1'
});

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)






Vue.config.productionTip = false

// const firebaseConfig = {
//   apiKey: "AIzaSyBHfHqofD-08feKLT-0SJW3hftXlwsGk_g",
//   authDomain: "greenlines-69a5c.firebaseapp.com",
//   projectId: "greenlines-69a5c",
//   storageBucket: "greenlines-69a5c.appspot.com",
//   messagingSenderId: "965232689144",
//   appId: "1:965232689144:web:a4548cafffb8db013c200d",
//   measurementId: "G-VK1P69RQ7J"
// // };

// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
