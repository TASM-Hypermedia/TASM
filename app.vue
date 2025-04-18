<template>
  <div class="root">
    <index />
  </div>
</template>
<script>
import index from "./pages/index.vue"

export default {
  components: {
    index,
  },
}
</script>

<style>
.root {
  flex: 1;
}
</style>
