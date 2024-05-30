import { createApp } from "vue";
// import { createPinia } from "pinia";
import router from "@/router/index.js";
import AdminDefault from "@/layout/AdminDefault.vue";

// 在根元件(Main)的樣版中，可使用 RouterView、RouterLink 兩個標籤
// createApp(AdminDefault).use(router).use(pinia).mount("#app");
createApp(AdminDefault).use(router).mount("#app");