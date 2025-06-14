<script setup lang="ts">
import DesktopHeader from "~/components/layout/DesktopHeader.vue"
import AppFooter from "~/components/layout/AppFooter.vue"
</script>

<template>
  <div class="desktop-layout">
    <DesktopHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style scoped>
p {
  text-align: center;
}

.desktop-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
