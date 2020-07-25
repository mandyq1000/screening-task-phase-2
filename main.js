import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase/app'
import { store } from './store/store'
import 'firebase/firestore'


Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyDKmrJsHyDlNI4_A0eK5GCnvQPhYJB7Tq8",
  authDomain: "developer-screening.firebaseapp.com",
  databaseURL: "https://developer-screening.firebaseio.com",
  projectId: "developer-screening",
  storageBucket: "developer-screening.appspot.com",
  messagingSenderId: "103834743924",
  appId: "1:103834743924:web:0160f1dbd27ae3dd2f4d21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

firebase.auth().onAuthStateChanged(() => {
  if(!App){
    App = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});


new Vue({
  vuetify,
  router,
  store: store,
  
  render: h => h(App)
}).$mount('#app')




