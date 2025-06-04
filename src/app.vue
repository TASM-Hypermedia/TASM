<script setup lang="ts">
import { useColors } from "@/stores/colors"
import { useNuxtApp } from "#app"

const { $viewport } = useNuxtApp()

const CATEGORY_COLORS: Record<string, string> = {
  teachers: "#A375BD",
  activities: "#FFAFCC",
  events: "#FFD275",
  pricing: "#9BDAED",
  contacts: "#41A64B",
}

const store = useColors()
const { rootStyle } = storeToRefs(store)

function updateRootStyle() {
  if (!document) return
  for (const [key, value] of Object.entries(rootStyle.value)) {
    document.documentElement.style.setProperty(key, value ?? null)
  }
}

watch(rootStyle, () => updateRootStyle())
onPrehydrate(() => updateRootStyle())

const route = useRoute()
watch(
  route,
  () => {
    if (!document) return
    const section = route.path.split("/")[1]
    store.setColor(CATEGORY_COLORS[section] ?? "#E7564B")
  },
  { immediate: true }
)
</script>

<template>
  <div id="app-container">
    <LoadingIndicator />
    <template v-if="$viewport.isLessThan('tablet')">
      <NuxtLayout name="mobile"></NuxtLayout>
    </template>

    <template v-else>
      <NuxtLayout name="default"></NuxtLayout>
    </template>

    <NuxtPage />
    <AppFooter />
  </div>
</template>
