<template>
  <div>
    <AppHeader />
    <test-component />
  </div>
</template>
<script lang="ts">
import testComponent from "~/components/TestComponent.vue"
import AppHeader from "~/components/AppHeader.vue"

export default {
  components: {
    testComponent,
    AppHeader,
  },
}
</script>
<style scoped>
div {
  background-color: #f0f0f0;
  flex: 1;
  width: 100%;
}
</style>
