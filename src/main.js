import Vue from "vue";
import VueResource from "vue-resource";
import Axios from 'axios';
import App from "./App.vue";

// Use vue-resource package
Vue.use(VueResource);
Vue.use(Axios);


new Vue({
  el: "#app",
  render: h => h(App)
});
