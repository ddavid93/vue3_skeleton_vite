<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <!--begin::Search-->
    <div class="d-flex align-items-stretch ms-1 ms-lg-3">
      <KTSearch></KTSearch>
    </div>
    <!--end::Search-->

    <!--begin::Activities-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->
      <div
        id="kt_activities_toggle"
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/general/gen032.svg"/>
        </span>
      </div>
      <!--end::drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Quick links-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu-->
      <div
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/general/gen025.svg"/>
        </span>
      </div>
      <KTQuickLinksMenu></KTQuickLinksMenu>
      <!--end::Menu-->
    </div>
    <!--end::Quick links-->

    <!--begin::Chat-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu wrapper-->
      <div
        id="kt_drawer_chat_toggle"
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/communication/com012.svg"/>
        </span>

        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        >
        </span>
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->

    <!--begin::Notifications-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu-->
      <div
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/general/gen022.svg"/>
        </span>
      </div>
      <KTNotificationsMenu></KTNotificationsMenu>
      <!--end::Menu-->
    </div>
    <!--end::Notifications-->

    <!--begin::User-->
    <div
      id="kt_header_user_menu_toggle"
      class="d-flex align-items-center ms-1 ms-lg-3"
    >
      <!--begin::Menu-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <img
          src="https://cdn-staging.yanovis.cloud/avatar/5/ISm4TpdH5EfdXQBKTXVVfG2dm6u959wLYFvsYiUQ.png?d=50x50x1"
          alt="metronic"
        />
      </div>
      <KTUserMenu></KTUserMenu>
      <!--end::Menu-->
    </div>
    <!--end::User -->

    <!--begin::Heaeder menu toggle-->
    <div
      class="d-flex align-items-center d-lg-none ms-2 me-n3"
      title="Show header menu"
    >
      <div
        id="kt_header_menu_mobile_toggle"
        class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/text/txt001.svg"/>
        </span>
      </div>
    </div>
    <!--end::Heaeder menu toggle-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KTSearch from "@/_metronic/layout/header/partials/Search.vue";
import KTNotificationsMenu from "@/_metronic/layout/header/partials/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/_metronic/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/_metronic/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "HeaderTopbar",
  components: {
    KTSearch,
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
  },
});
</script>
