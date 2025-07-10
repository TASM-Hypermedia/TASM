<template>
  <div class="card-grid">
    <div v-for="i in length" :key="i" class="card-grid__item">
      <slot name="card" v-bind="{ index: i - 1 }"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  length: number
}>()
</script>

<style scoped>
.card-grid {
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 32px;
}

.card-grid__item {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: stretch;
}
</style>
