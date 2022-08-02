import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Mutations } from "./_metronic/store/enums/StoreEnums";
import store from "./_metronic/store";
import TicketingRoutes from "../src/apps/ticketing/routes";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "dashboard",
    component: () => import("@/_metronic/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue")
      },
      TicketingRoutes
    ]
  },
  {
    path: "/",
    component: () => import("@/_metronic/components/page-layouts/Auth.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue")
      }
    ]
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/crafted/authentication/Error404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  // store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
