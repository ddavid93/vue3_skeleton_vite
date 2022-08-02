<template>
  <DynamicForm :schema="config"></DynamicForm>
</template>

<script setup lang="ts">

import DynamicForm from "@/views/components/dynamic-form/DynamicForm.vue";
import {Ticketing} from "@/apps/ticketing/models/ticketing";
import {IDynamicFormConfig} from "@/_core/interfaces/i-dinamic-form-config";
import {ticketingValidation} from "@/apps/ticketing/models/validations/ticketing-validations";

const config: IDynamicFormConfig<Ticketing> = {
  validation: ticketingValidation,
  fields: [
    {
      label: 'Project',
      name: 'project_id',
      classDiv: 'col-md-8'
    },
    {
      label: 'Supervisor',
      name: 'supervising_user_id',
      classDiv: 'col-md-4'
    },
    {
      label: 'Title',
      name: 'title',
      classDiv: 'col-md-8'
    },
    {
      label: 'Priority',
      name: 'ticket_priority',
      classDiv: 'col-md-4'
    },
    {
      label: 'Assigned to',
      name: 'assigned_user_id',
      classDiv: 'col-md-8'
    },
    {
      label: 'Tags',
      name: 'tags',
      classDiv: 'col-md-4'
    },
    {
      label: 'Estimation',
      name: 'estimated_time',
      classDiv: 'col-md-4'
    },
    {
      label: 'Planned start',
      name: 'planned_start',
      classDiv: 'col-md-4'
    },
    {
      label: 'Planned end',
      name: 'planned_end',
      classDiv: 'col-md-4'
    },
    {
      label: 'Description',
      name: 'description',
      classDiv: 'col-md-12',
      as: 'textarea'
    }
  ]
}

</script>