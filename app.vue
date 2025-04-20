<template>
  <v-app>
    <header></header>
    <v-main><index /> </v-main>
    <footer></footer>
  </v-app>
  <div class="root"></div>
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
