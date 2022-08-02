import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./_metronic/store";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
//imports for app initialization
import { initInlineSvg } from "./_metronic/core/plugins/inline-svg";
import i18n from "./_metronic/core/plugins/i18n";
import router from "./router";

export const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(createPinia());
initInlineSvg(app);
app.use(i18n);

app.mount("#app");

