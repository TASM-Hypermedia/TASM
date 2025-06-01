<script setup lang="ts">
import type { NuxtError } from "#app"
import { useNuxtApp } from "#app"
const { $viewport } = useNuxtApp()

// VIEWPORT
watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint)
})

// ERROR HANDLING
const _props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
  <div
    style="
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    "
  >
    <LoadingIndicator />
    <template v-if="$viewport.isLessThan('tablet')">
      <NuxtLayout name="mobile"></NuxtLayout>
    </template>

    <template v-else>
      <NuxtLayout name="default"></NuxtLayout>
    </template>

    <div style="margin: auto; text-align: center">
      <h1>{{ error?.statusCode }}</h1>
      <button @click="handleError">Go back home</button>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped></style>
