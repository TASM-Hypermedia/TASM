<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts"

const viewport = useViewport()
const getLayout: () => LayoutKey = () =>
  viewport.isLessThan("tablet") ? "mobile" : "default"

const route = useRoute()

useHead({
  titleTemplate: (t) => {
    return t ? `${t} - TASM Yoga` : "TASM Yoga"
  },
})

useSeoMeta({
  title: "TASM Yoga",
  description: "Welcome to TASM Yoga, your journey to wellness begins here.",
  ogTitle: (route.meta.title as string) ?? "TASM Yoga",
  ogDescription:
    (route.meta.description as string) ??
    "Welcome to TASM Yoga, your journey to wellness begins here.",
})

const layout = ref<LayoutKey>(getLayout())

onMounted(() => {
  window.addEventListener("resize", () => (layout.value = getLayout()))
})
</script>

<template>
  <div id="app-container">
    <LoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
}
</style>
