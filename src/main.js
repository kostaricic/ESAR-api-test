import Vue from "vue";
import App from "./App.vue";
// sumnjivo :)
import Axios from 'axios';

Vue.use(Axios)

new Vue({
  el: "#app",
  render: h => h(App)
});
