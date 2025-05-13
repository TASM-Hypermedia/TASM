<!--<template>
  <PageWrap
    :title="teacher.name"
    :subtitle="teacher.mantra"
    tagline="The Teachers:"
    img-src="Team.jpg"
  >
    <v-row>
      <v-col cols="6">
        <v-card>
         <v-card-title>Teacher Mantra</v-card-title>
          <v-card-text>
            <v-img src="../assets/images/Teacher1.jpg"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>{{ teacher.name }}</v-card-title>
          <v-card-subtitle>Who am I?</v-card-subtitle>
          <v-card-text>
            <p>{{ teacher.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>What I've done</v-card-title>
          <v-card-text>
            <p>{{ teacher.history }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          
          <v-card-text>
            <v-img src="../assets/images/Teacher1.jpg"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    
  </PageWrap>
</template>

<script setup lang="ts">

interface Teacher {
  name: string
  description: string
  mantra: string
  mantraSubtitle: string
  history: string
}
withDefaults(
  defineProps<{
    teacher?: Teacher
  }>(),
  {
    teacher: () => ({
      name: "",
      description: "",
      mantra: "",
      mantraSubtitle: "",
      history: "",
    }),
  }
)

const contentPrev = {
  title: "Yoga for Beginners",
  subtitle:
    "Mother, mentor, poet, artist, volunteer, bestselling author and host of the Practice You Podcast, Elena Brower graduated Cornell University in 1992, designed textiles and apparel for almost a decade before shifting her focus to yoga, meditation, writing and art. Teaching asana since 1999, studying and practicing Zen meditation since 2020, she received the Buddhist Precepts from Roshi Joan Halifax at Upaya Zen Center in 2023. Now a candidate for Buddhist Chaplaincy, Elena offers her time in hospice and penitentiary settings. Her bestselling journals and books explore stages of life and listening. Her next book, Hold Nothing, will be published by Shambhala Publications in late 2025",
  urlImg: "Team.jpg",
}
</script>
-->

<template>
  <PageWrap
    :title="teacher[0].Name"
    :subtitle="teacher[0].Mantra"
    tagline="The Teachers:"
    :img-src="teacher[0].BannerImageURL"
  ></PageWrap>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useAPI } from "~/composables/useAPI"

const route = useRoute()
const teacherId = route.params.id
console.log(teacherId)

const teacher = ref()

// Chiamata all’API per ottenere i dettagli della teacher

console.log("TeacherId che sto passando:", teacherId)
const { data, error } = await useAPI<{
  TeacherId: number
  Name: string
  Mantra: string
  Description: string
  History: string
  BannerImageURL: string
  MainImageURL: string
}>("/postTeacherInfo", {
  method: "POST",
  body: JSON.stringify({ TeacherId: teacherId }),
})

if (error.value || !data.value) {
  console.error("Errore nel caricamento teacher:", error.value)
  throw new Error("Teacher non trovato")
}
console.log(data.value)
teacher.value = data.value
console.log(teacher.value[0].Name)
</script>
