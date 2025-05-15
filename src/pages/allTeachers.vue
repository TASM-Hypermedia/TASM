<template>
  <PageWrap
    title="Our Tean"
    subtitle="Discover our instructors"
    tagline="The Teachers:"
    img-src="Team.jpg"
  >
    <v-row>
      <v-col v-for="t in teachers" :key="t.TeacherId" class="pa-3" cols="4">
        <content-preview
          :content-preview="{
            title: t.Name,
            subtitle: t.Mantra,
            urlImg: t.MainImageURL,
          }"
          @click="goToTeacher(t.TeacherId)"
        />
      </v-col>
    </v-row>
  </PageWrap>
</template>

<script setup lang="ts">
import PageWrap from "~/components/PageWrap.vue"
//import ContentPreview from "~/components/ContentPreview.vue"
import { useAPI } from "~/composables/useAPI"

const teachers = ref()
// GET API CALL - all teachers
const { data } =
  await useAPI<
    { TeacherId: number; Name: string; Mantra: string; MainImageURL: string }[]
  >("/getAllTeachers")
if (!data.value || data.value.length === 0) {
  throw new Error("No data found")
}
console.log(data.value)
teachers.value = data.value

const router = useRouter()
function goToTeacher(id: number) {
  router.push(`/teacher/${id}`)
}
</script>
