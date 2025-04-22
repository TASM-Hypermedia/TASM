<template>
  <div class="teacherWrapper">
    <v-row>
      <v-col cols="12">
        <copertinaPag title="Namaste" subtitle="Welcome to the teacher page!" />
        <!-- obj teacher only -->
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <div>
          <p v-if="teacher">Name: {{ teacher.name }}</p>
          <p v-if="teacher">{{ teacher.description }}</p>
        </div>
      </v-col>
      <v-col cols="">
        <v-card>
          <v-card-title>Teacher Details</v-card-title>
          <v-card-text>
            <p v-if="teacher">Name: {{ teacher.name }}</p>
            <p v-if="teacher">Description: {{ teacher.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import copertinaPag from "~/components/copertinaPag.vue"
interface Teacher {
  name: string
  description: string
}

defineProps<{
  teacher?: Teacher
}>()
</script>
<style scoped>
.teacherWrapper {
  width: 100%;
  height: 100%;
}
</style>
