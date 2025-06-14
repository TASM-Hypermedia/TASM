<script setup lang="ts">
const viewport = useViewport()
</script>

<template>
  <v-app>
    <LoadingIndicator />
    <template v-if="viewport.isLessThan('tablet')">
      <NuxtLayout name="mobile"></NuxtLayout>
    </template>

    <template v-else>
      <NuxtLayout name="default"></NuxtLayout>
    </template>
  </v-app>
</template>
