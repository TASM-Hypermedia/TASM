<template>
  <div class="teacherWrapper">
    <v-row>
      <v-col cols="12">
        <copertinaPag title="Namaste" subtitle="Welcome to the teacher page!" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            height="200px"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import copertinaPag from "~/components/copertinaPag.vue"
defineProps<{
  name?: string
  description?: string
}>()
</script>
<style scoped>
.teacherWrapper {
  width: 100%;
  height: 100%;
}
</style>
