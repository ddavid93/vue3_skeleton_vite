<template>

  <Structure v-if="!onlyForm" title="Add Ticket">
    <template #card-body>
      <DynamicFormNative :schema="schema"></DynamicFormNative>
    </template>

    <template #card-footer>
      <slot name="buttons"></slot>
      <div v-if="showButtons" class="d-flex justify-content-end">
        <button @click="goBack()" class="btn btn-white btn-active-light-primary me-2">
          Discard
        </button>
        <button @click="$emit('save-event')" class="btn btn-primary">
          <span class="indicator-label"> Save Changes </span>
        </button>
      </div>
    </template>
  </Structure>
  <DynamicFormNative v-else :schema="schema"></DynamicFormNative>


</template>
<script setup lang="ts">
import Structure from "@/views/components/layout/Structure.vue";
import DynamicFormNative from "@/views/components/dynamic-form/DynamicFormNative.vue";
import {useRouter} from "vue-router";
import {IDynamicFormConfig} from "@/_core/interfaces/i-dinamic-form-config";
import {IDefault} from "@/_core/interfaces/i-utils";

const router = useRouter()

const props = defineProps({
  showButtons: {type: Boolean, default: true},
  onlyForm: {type: Boolean, default: false},
  schema: {
    type: Object as () => IDynamicFormConfig<IDefault>,
    required: true,
  },
})

const goBack = () => window.history.length > 2 ? router.go(-1) : router.push('/')

</script>