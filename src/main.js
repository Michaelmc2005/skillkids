import Vue from "vue";
import Frame from "./screens/Frame.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Frame)
}).$mount("#app");