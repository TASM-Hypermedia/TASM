<template>
  <PageWrap
    :title="teacher.Name"
    :subtitle="teacher.Mantra"
    tagline="The Teachers:"
    :img-src="teacher.BannerImageURL"
  >
    <!-- QUI CI ANDRA' CONTENT CARD -->

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <v-img :src="'/images/' + teacher.BannerImageURL"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>{{ teacher.Name }}</v-card-title>
          <v-card-subtitle>Who am I?</v-card-subtitle>
          <v-card-text>
            <p>{{ teacher.Description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- ACTIVITIES WITH ME - CONTENT PREVIEW-->
    <div v-if="teacher.TeacherActivity.length > 0">
      <h3>ACTIVITIES WITH ME</h3>
      <card-grid :length="teacher.TeacherActivity.length">
        <template #card="{ index }">
          <ContentPreview
            :content-preview="{
              title: teacher.TeacherActivity[index].Activity.Title,
              subtitle: teacher.TeacherActivity[index].Activity.Description,
              urlImg: teacher.TeacherActivity[index].Activity.BannerImageURL,
            }"
            @click="
              goToPage(
                'activities',
                teacher.TeacherActivity[index].Activity.ActivityId
              )
            "
          />
        </template>
      </card-grid>
    </div>
    <!-- EVENTS WITH ME -->

    <div v-if="teacher.TeacherEvent.length > 0">
      <h3>EVENTS WITH ME</h3>
      <card-grid :length="teacher.TeacherEvent.length">
        <template #card="{ index }">
          <ContentPreview
            :content-preview="{
              title: teacher.TeacherEvent[index].Event.Name,
              subtitle: teacher.TeacherEvent[index].Event.ShortIntroduction,
              urlImg: teacher.TeacherEvent[index].Event.BannerImageURL,
            }"
            @click="
              goToPage('events', teacher.TeacherEvent[index].Event.EventId)
            "
          />
        </template>
      </card-grid>
    </div>
    <!-- IL MIO PERCORSO -->

    <h3>Il mio percorso:</h3>
    <p>{{ teacher.History }}</p>

    <!-- SPECIALIZZAZIONI & CERTIFICAZIONI -->

    <p><b>Specializzazioni: </b> {{ txtSpecialization }}</p>
    <p><b>Certificazioni: </b> {{ txtCertification }}</p>
    <!-- CAROSELLO -->

    <SlideCarousel
      :images="teacher.TeacherImages.map((img) => img.Image)"
      :width="1000"
    ></SlideCarousel>
  </PageWrap>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useAPI } from "~/composables/useAPI"

const route = useRoute()
const teacherId = route.params.id
console.log(teacherId)

//const teacher = ref()

// Chiamata all’API per ottenere i dettagli della teacher

console.log("TeacherId che sto passando:", teacherId)
const { data, error } = await useAPI<
  {
    TeacherId: number
    Name: string
    Mantra: string
    Description: string
    History: string
    BannerImageURL: string
    MainImageURL: string
    TeacherCert: Array<{
      Certification: { Title: string; CertificationId: number }
    }>
    TeacherActivity: Array<{
      Activity: {
        Title: string
        ActivityId: number
        BannerImageURL: string
        Description: string
      }
    }>
    TeacherImages: Array<{
      Image: { URL: string }
    }>
    TeacherEvent: Array<{
      Event: {
        EventId: number
        Name: string
        ShortIntroduction: string
        BannerImageURL: string
      }
    }>
  }[]
>("/postTeacherInfo", {
  method: "POST",
  body: JSON.stringify({ TeacherId: teacherId }),
})

if (error.value || !data.value) {
  console.error("Errore nel caricamento teacher:", error.value)
  throw new Error("Teacher non trovato")
}
console.log(data.value)
const teacher = data.value[0]
//teacher.value = data.value
//console.log(teacher.value.Name)

const router = useRouter()
function goToPage(category: string, id: number) {
  router.push(`/${category}/${id}`)
}

const txtSpecialization = computed(() => {
  return teacher.TeacherActivity.map(
    (activity: { Activity: { Title: string } }) => activity.Activity.Title
  ).join(", ")
})

const txtCertification = computed(() => {
  return teacher.TeacherCert.map(
    (c: { Certification: { Title: string } }) => c.Certification.Title
  ).join(", ")
})
</script>
