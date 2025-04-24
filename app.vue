<template>
  <v-app>
    <header></header>
    <v-main><index /> </v-main>
    <footer></footer>
  </v-app>
</template>
<script>
import index from "./pages/index.vue"

export default {
  components: {
    index,
  },
}
</script>
