<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts"

// Layout management
const viewport = useViewport()
const getLayout: () => LayoutKey = () =>
  viewport.isLessThan("tablet") ? "mobile" : "default"
const updateLayout = () => {
  setPageLayout(getLayout())
}

onMounted(() => {
  updateLayout()
  window.addEventListener("resize", () => updateLayout())
})

// SEO management
const route = useRoute()

useHead({
  titleTemplate: (t) => {
    return t ? `${t} - Inner Bloom` : "Inner Bloom"
  },
})

useSeoMeta({
  title: "Inner Bloom - Yoga Center",
  description: "Welcome to Inner Bloom, your journey to wellness begins here.",
  ogTitle: (route.meta.title as string) ?? "Inner Bloom",
  ogDescription:
    (route.meta.description as string) ??
    "Welcome to Inner Bloom, your journey to wellness begins here.",
})
</script>

<template>
  <div id="app-container">
    <LoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="getLayout()">
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
