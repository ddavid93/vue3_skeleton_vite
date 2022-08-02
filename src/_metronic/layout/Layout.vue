<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"/>

  <!-- begin:: Body -->
  <div id="kt_layout" class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside
      v-if="asideEnabled"
      :light-logo="themeLightLogo"
      :dark-logo="themeDarkLogo"
    />
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
      <KTHeader :title="pageTitle"/>

      <!-- begin:: Content -->
      <div id="kt_content" class="content d-flex flex-column flex-column-fluid">

        <!-- begin:: Content Body -->
        <div class="post d-flex flex-column-fluid">
          <div
            id="kt_content_container"
            :class="{
              'container-fluid': contentWidthFluid,
              'container-xxl': !contentWidthFluid,
            }"
          >
            <router-view/>
          </div>
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter/>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop/>
  <KTUserMenu/>

  <KTToolButtons/>
  <KTDemosDrawer/>
  <KTHelpDrawer/>
</template>

<script lang="ts">
import {computed, defineComponent, nextTick, onMounted, watch} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import KTAside from "@/_metronic/layout/aside/Aside.vue";
import KTHeader from "@/_metronic/layout/header/Header.vue";
import KTFooter from "@/_metronic/layout/footer/Footer.vue";
import HtmlClass from "@/_metronic/core/services/LayoutService";
import KTScrollTop from "@/_metronic/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/_metronic/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/_metronic/components/Loader.vue";
import KTDemosDrawer from "@/_metronic/layout/extras/DemosDrawer.vue";
import KTHelpDrawer from "@/_metronic/layout/extras/HelpDrawer.vue";
import KTToolButtons from "@/_metronic/layout/extras/ToolButtons.vue";
import {Actions} from "@/_metronic/store/enums/StoreEnums";
import {MenuComponent} from "@/assets/ts/components";
import {removeModalBackdrop} from "@/_metronic/core/helpers/dom";
import {reinitializeComponents} from "@/_metronic/core/plugins/keenthemes";
import {
  asideEnabled,
  contentWidthFluid,
  loaderEnabled,
  loaderLogo,
  subheaderDisplay,
  themeDarkLogo,
  themeLightLogo,
  toolbarDisplay,
} from "@/_metronic/core/helpers/config";

export default defineComponent({
  name: "ThemeLayout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTUserMenu,
    KTDemosDrawer,
    KTHelpDrawer,
    KTToolButtons,
    KTLoader,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    const pageTitle = computed(() => store.getters.pageTitle);

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      //check if current user is authenticated
      /**
       * TODO Auth
       */
      if (!store.getters.isUserAuthenticated) {
        // router.push({ name: "sign-in" });
      }

      nextTick(() => {
        reinitializeComponents();
      });

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        // check if current user is authenticated
        if (!store.getters.isUserAuthenticated) {
          // router.push({name: "sign-in"});
        }

        nextTick(() => {
          reinitializeComponents();
        });
        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>

<style>
#kt_wrapper {
  padding-top: 70px;
}
</style>