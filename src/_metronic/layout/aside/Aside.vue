<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside aside-hoverable"
    :class="[
      asideTheme === 'light' && 'aside-light',
      asideTheme === 'dark' && 'aside-dark',
    ]"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Brand-->
    <div id="kt_aside_logo" class="aside-logo flex-column-auto">
      <!--begin::Logo-->
      <a v-if="asideTheme === 'dark'" href="#">
        <img alt="Logo" :src="darkLogo" class="h-25px logo"/>
      </a>
      <a v-if="asideTheme === 'light'" href="#">
        <img alt="Logo" :src="lightLogo" class="h-25px logo"/>
      </a>
      <!--end::Logo-->

      <!--begin::Aside toggler-->
      <div
        id="kt_aside_toggle"
        class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
        data-kt-toggle="true"
        data-kt-toggle-state="active"
        data-kt-toggle-target="body"
        data-kt-toggle-name="aside-minimize"
      >
        <span class="svg-icon svg-icon-1 rotate-180">
          <inline-svg src="/media/icons/duotune/arrows/arr080.svg"/>
        </span>
      </div>
      <!--end::Aside toggler-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div
      id="kt_aside_footer"
      class="aside-footer flex-column-auto pt-5 pb-7 px-5"
    >
      <a
        href="#"
        class="btn btn-custom btn-primary w-100"
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        data-bs-delay-show="8000"
        title="Check out the complete documentation with over 100 components"
      >YanovisSuiteImage
        <span class="svg-icon btn-icon svg-icon-2">
          <inline-svg src="/media/icons/duotune/general/gen005.svg"/>
        </span>
      </a>
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useI18n} from "vue-i18n";
import KTMenu from "@/_metronic/layout/aside/Menu.vue";
import {asideTheme} from "@/_metronic/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const {t} = useI18n();

    return {
      asideTheme,
      t,
    };
  },
});
</script>
