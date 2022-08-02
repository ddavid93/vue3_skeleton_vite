<template>
  <DataTable
    :checkbox="true"
    :table-header="tableHeader"
    :store="'tickets'">
    <template #status>
      <span class="badge badge-light-primary">Success</span>
    </template>

    <template #title="{ row: item }">
      <div class="d-flex">
        <i
          v-tooltip
          title="High Priority"
          class="fa fa-genderless text-danger fs-1"
          style="margin-right: 5px"
        ></i>
        {{ item.title }}
      </div>
    </template>
    <template #assigned>
      <div class="symbol symbol-50px symbol-circle me-3">
        <img
          alt="Pic"
          src="https://cdn-staging.yanovis.cloud/avatar/5/ISm4TpdH5EfdXQBKTXVVfG2dm6u959wLYFvsYiUQ.png?d=50x50x1"
        />
      </div>
    </template>
    <template #project>
      <img src="/media/svg/card-logos/visa.svg" class="w-35px me-3" alt="" />
    </template>
    <template #created="{ row: ticket }">
      <span
        class="badge badge-light-success"
        v-time-ago="ticket.created_at"
      ></span>
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import DataTable from "@/views/components/table/DataTable.vue";
import { timeAgo as vTimeAgo } from "@/_core/directives/time";
import { toolTip as vTooltip } from "@/_core/directives/tooltip";

const fields = ["title", "status", "assigned", "project", "created"];
const tableHeader = fields.map((m) => ({ name: useI18n().t(`ticketing.tickets.table.${m}`), key: m }));

</script>
