import { computed } from "vue";
import store from "@/_metronic/store";

/**
 * Return name of the theme
 * @returns {string}
 */
export const themeName = computed(() => {
  return store.getters.layoutConfig("themeName");
});

/**
 * Return version of the theme
 * @returns {string}
 */
export const version = computed(() => {
  return store.getters.layoutConfig("themeVersion");
});

/**
 * Return demo name
 * @returns {string}
 */
export const demo = computed(() => {
  return store.getters.layoutConfig("demo");
});

