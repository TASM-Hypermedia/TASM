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

const teachersList = ref<Teacher[]>([])
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
console.log(data.value)

const tempteachers = data.value.map((teacher) => {
  return {
    TeacherId: teacher.TeacherId,
    Name: teacher.Name,
    MainImageURL: teacher.MainImageURL,
    Mantra: teacher.Mantra,
    ActivityTags: teacher.TeacherActivity.map((ta) => ({
      text: ta.Activity.Title,
    })),
  }
})

teachersList.value = tempteachers
</script>

<style scoped>
div {
  background-color: #a2a2a2;
  flex: 1;
  width: 100%;
}
</style>
