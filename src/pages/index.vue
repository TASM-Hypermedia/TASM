<template>
  <div>
    <test-component />
  </div>
</template>
<script lang="ts">
import testComponent from "~/components/TestComponent.vue"

export default {
  components: {
    testComponent,
  },
}
</script>
<style scoped>
div {
  background-color: #f0f0f0;
  flex: 1;
  max-width: 800px;
  width: 100%;
  padding: 32px;
}
</style>
