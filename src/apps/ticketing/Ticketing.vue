<template>
  <router-view/>
</template>

<script setup lang="ts">
import {onBeforeMount} from "vue";
import TicketingMessages from "@/apps/ticketing/i18n";
import {UtilService} from "@/_core/services/util-service";

onBeforeMount(() => {
  UtilService.mergeLocaleMessage("ticketing", TicketingMessages);
});
</script>
