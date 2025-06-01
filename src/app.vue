<script setup lang="ts">
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()

watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})
</script>

<template>
  <v-app>
    <template v-if="$viewport.isLessThan('tablet')">
      <NuxtLayout name="mobile"></NuxtLayout>
    </template>

    <template v-else>
      <NuxtLayout name="default"></NuxtLayout>
    </template>

    <NuxtPage />
  </v-app>
</template>