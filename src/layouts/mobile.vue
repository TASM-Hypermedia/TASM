<script setup lang="ts">
import MobileHeader from "@/components/layout/MobileHeader.vue"
import AppFooter from "@/components/layout/AppFooter.vue"
</script>

<template>
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
