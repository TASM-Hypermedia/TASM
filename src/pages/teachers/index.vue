<template>
  <page-wrap
    title="Our Team"
    subtitle="Discover our instructors"
    tagline="The Teachers:"
    img-src="Team.jpg"
  >
    <card-grid :length="teachersList.length">
      <template #card="{ index }">
        <teacher-card :teacher-prop="teachersList[index]" />
      </template>
    </card-grid>
  </page-wrap>
</template>

<script setup lang="ts">
import type { Teacher } from "~/types"

import { useAPI } from "~/composables/useAPI"
// GET API CALL - all teachers
const { data } = await useAPI<
  {
    TeacherId: number
    Name: string
    Mantra: string
    MainImageURL: string
    TeacherActivity: Array<{
      Activity: { Title: string; ActivityId: number; BannerImageURL: string }
    }>
  }[]
>("/getAllTeachers")
if (!data.value || data.value.length === 0) {
  throw new Error("No data found")
}

console.log("Teachers data:", data.value)
const teachersList: Teacher[] = data.value.map((teacher) => {
  return {
    teacherId: teacher.TeacherId,
    name: teacher.Name,
    image: teacher.MainImageURL,
    mantra: teacher.Mantra,
    activityTags: teacher.TeacherActivity.map((ta) => ({
      text: ta.Activity.Title,
    })),
  }
})
</script>

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
