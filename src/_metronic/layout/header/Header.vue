<template>
  <!--begin::Header-->
  <div id="kt_header" style="" class="header align-items-stretch">
    <!--begin::Container-->
    <div
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
      class="d-flex align-items-stretch justify-content-between"
    >
      <!--begin::Aside mobile toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-n3 me-1"
        title="Show aside menu"
      >
        <div
          id="kt_aside_mobile_toggle"
          class="btn btn-icon btn-active-light-primary"
        >
          <span class="svg-icon svg-icon-2x mt-1">
            <inline-svg src="/media/icons/duotune/abstract/abs015.svg"/>
          </span>
        </div>
      </div>
      <!--end::Aside mobile toggle-->

      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <a href="#" class="d-lg-none">
          <img alt="Logo" src="/media/logos/logo-2.svg" class="h-30px"/>
        </a>
      </div>
      <!--end::Mobile logo-->

      <!--begin::Wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
      >
        <!--begin::Navbar-->
        <div id="kt_header_nav" class="d-flex align-items-stretch">
          <KTMenu></KTMenu>
        </div>
        <!--end::Navbar-->

        <!--begin::Topbar-->
        <div class="d-flex align-items-stretch flex-shrink-0">
          <KTTopbar></KTTopbar>
        </div>
        <!--end::Topbar-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KTTopbar from "@/_metronic/layout/header/Topbar.vue";
import KTMenu from "@/_metronic/layout/header/Menu.vue";

import {
  asideDisplay,
  headerLeft,
  headerWidthFluid,
} from "@/_metronic/core/helpers/config";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTTopbar,
    KTMenu,
  },
  props: {
    title: String,
  },
  setup() {
    return {
      headerWidthFluid,
      headerLeft,
      asideDisplay,
    };
  },
});
</script>
