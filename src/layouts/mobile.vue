<script setup lang="ts">
import MobileHeader from "@/components/layout/MobileHeader.vue"
import AppFooter from "@/components/layout/AppFooter.vue"
</script>

<template>
  <!-- This class is used in CSS to apply mobile-specific styles -->
  <!-- The reason this is used rather than media queries is to ensure consistent behavior across all components -->
  <div class="mobile-layout">
    <MobileHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.mobile-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
