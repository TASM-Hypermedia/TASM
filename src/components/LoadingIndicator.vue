<script setup lang="ts">
const loading = useLoadingIndicator({
  throttle: 50,
})
</script>

<template>
  <div class="loading-container">
    <div
      v-if="loading.isLoading.value"
      class="loading-bar"
      :style="`width: ${loading.progress.value}%;`"
    />
  </div>
</template>

<style scoped lang="scss">
.loading-container {
  position: fixed;
  background-color: transparent;
  width: 100vw;
  height: 4px;
  top: 80px;

  .loading-bar {
    background-color: #b8f2e6;
    transition: all 0.1s linear;
    height: 100%;
    // width: 0%;
  }
}
</style>
