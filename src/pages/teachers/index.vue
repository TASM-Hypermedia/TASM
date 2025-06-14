<script setup lang="ts">
import { useAPI } from "~/composables/useAPI"

const res = await useAPI<{
  teacherId: number,
  name: string,
  image: string,
  mantra: string,
  activityTags: Array<{ text: string }>,
}[]>("/getAllTeachers")

if (res.error.value) throw res.error.value
const teachersList = res.data.value
</script>

<template>
  <page-wrap
    title="Our Team"
    subtitle="Discover our instructors"
    tagline="The Teachers:"
    img-src="Team.jpg"
  >
    <card-grid :length="teachersList!.length">
      <template #card="{ index }">
        <teacher-card :teacher-prop="teachersList![index]" />
      </template>
    </card-grid>
  </page-wrap>
</template>

<style scoped>
div {
  background-color: #a2a2a2;
  width: 100%;
  display: flex;
  flex-direction: row;

  .mobile-layout & {
    width: 90%;
    flex-direction: column;
  }
}
</style>
