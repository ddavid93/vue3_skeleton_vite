<template>
  <slot name="toggle"></slot>
  <slot name="content"></slot>
</template>

<script>
import {defineComponent, nextTick, onMounted} from "vue";
import {MenuComponent} from "@/assets/ts/components";

export default defineComponent({
  name: "KtMenuComponent",
  components: {},
  props: {
    menuSelector: {type: String},
  },
  setup(props) {
    onMounted(() => {
      nextTick(() => {
        MenuComponent.createInsance(props.menuSelector);
      });
    });
  },
});
</script>
