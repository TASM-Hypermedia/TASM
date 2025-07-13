<script setup lang="ts">
import DesktopHeader from "@/components/layout/DesktopHeader.vue"
import AppFooter from "@/components/layout/AppFooter.vue"
</script>

<template>
  <!-- This class is used in CSS to apply desktop-specific styles -->
  <!-- The reason this is used rather than media queries is to ensure consistent behavior across all components -->
  <div class="desktop-layout">
    <DesktopHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.desktop-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
