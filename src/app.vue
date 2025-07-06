<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts"

const viewport = useViewport()
const getLayout: () => LayoutKey = () =>
  viewport.isLessThan("tablet") ? "mobile" : "default"
const layout = ref<LayoutKey>(getLayout())

onMounted(() => {
  window.addEventListener("resize", () => (layout.value = getLayout()))
})
</script>

<template>
  <div id="app-container">
    <LoadingIndicator />
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
