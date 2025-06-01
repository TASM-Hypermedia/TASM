<script setup lang="ts"></script>

<template>
  <div class="desktop-layout">
    <AppHeader />
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
