import Vue from "vue";
import VueCesium from 'vue-cesium';
import 'vue-cesium/lib/vc-navigation.css';
import { MdSwitch } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import lang from 'vue-cesium/lang/zh-hans';
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueCesium, {
  lang: lang // 2.0.3+ //  zh-hans
});

Vue.use(MdSwitch);

new Vue({
  render: h => h(App)
}).$mount("#app");
