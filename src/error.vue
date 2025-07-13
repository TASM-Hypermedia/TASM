<script setup lang="ts">
import type { NuxtError } from "#app"

const viewport = useViewport()
const layout = computed(() =>
  viewport.isLessThan("tablet") ? "mobile" : "default"
)

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
})
</script>

<template>
  <div id="app-container">
    <LoadingIndicator />
    <NuxtLayout :name="layout">
      <main class="error-page">
        <h1>Error {{ error?.statusCode }}</h1>
        <strong>{{ error?.statusMessage }}</strong>
        <p>{{ error?.message }}</p>
        <NuxtLink class="link-button" to="/">Go back home</NuxtLink>
      </main>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
.link-button {
  color: white;
  background-color: #020202;
  border-radius: 8px;
  padding: 8px 32px;
  margin: 32px;
  text-decoration: none;
}

main.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  width: 100vw;
  padding-top: 128px;
  height: 100%;
  margin-bottom: 32px;
  border: 0 solid black;

  h1 {
    font-size: 64px;
    margin: 0;
  }

  strong {
    font-size: 24px;
  }

  .data {
    font-style: italic;
    font-size: 32px;
    opacity: 0.6;
  }

  p {
    font-size: 20px;
  }
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
  height: 100%;
  width: 100vw;
  align-items: center;
}
</style>
