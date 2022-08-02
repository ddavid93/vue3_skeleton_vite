<template>
  <div class="card">
    <div v-if="cardHeader" class="card-header">
      <div v-if="title" class="card-title">
        {{ title }}
      </div>
      <slot name="card-header"></slot>
    </div>
    <div class="card-body">
      <slot name="card-body"></slot>
    </div>
    <div class="card-footer">
      <slot name="card-footer"></slot>
    </div>
  </div>

</template>

<script setup lang="ts">

defineProps({
  title: {type: String},
  cardHeader: {type: Boolean, default: true},
})
</script>
