<script setup lang="ts">
import { useStore } from "vuex";
import { nextTick, onMounted } from "vue";
import { Mutations } from "@/_metronic/store/enums/StoreEnums";
import { initializeComponents } from "@/_metronic/core/plugins/keenthemes";

const store = useStore();
onMounted(() => {
  /**
   * this is to override the layout config using saved data from localStorage
   * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
   */
  store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
  nextTick(() => initializeComponents());
});
</script>

<template>
  <router-view />
</template>


<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~apexcharts/dist/apexcharts.css";
@import "~animate.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~element-plus/dist/index.css";
@import "~nprogress/nprogress.css";
// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";

</style>

