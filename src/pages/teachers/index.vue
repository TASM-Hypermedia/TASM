<script setup lang="ts">
import { useAPI } from "~/composables/useAPI"

definePageMeta({
  title: "Our Team",
  description:
    "Meet our dedicated instructors and learn about their unique approaches to yoga.",
})

const res = await useAPI<
  {
    teacherId: number
    name: string
    image: string
    mantra: string
    url: string
    activityTags: Array<{ text: string }>
  }[]
>("/getAllTeachers")

if (res.error.value) throw res.error.value
const teachersList = res.data.value
</script>

<template>
  <page-wrap
    title="Our Team"
    subtitle="Discover our instructors"
    img-src="/banners/team-banner.jpg"
  >
    <card-grid :length="teachersList!.length">
      <template #card="{ index }">
        <card-teacher :teacher-prop="teachersList![index]" />
      </template>
    </card-grid>
  </page-wrap>
</template>

<style scoped></style>
