import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from "axios";

axios.defaults.baseURL= "https://test1-c3ba1-default-rtdb.firebaseio.com";
axios.defaults.baseURL= "https://test1-c3ba1-default-rtdb.firebaseio.com";


axios.defaults.headers.common["Authorization"]="kablosuzkedi_auth_key"
axios.defaults.headers.get["Accepts"]= "application/json"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
