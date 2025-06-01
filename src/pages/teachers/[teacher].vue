<template>
  <PageWrap
    :title="teacher.Name"
    :subtitle="teacher.Mantra"
    tagline="The Teachers:"
    :img-src="teacher.BannerImageURL"
  >
    <!-- QUI CI ANDRA' CONTENT CARD -->
    <ContentCard
      :content-card-prop="{
        title: teacher.Name,
        //subtitle: teacher.Mantra,
        description: teacher.Description,
        imgUrl: '/images/' + teacher.MainImageURL,
        altDescription: 'Teacher Image',
        imageOnTheRight: true,
      }"
    ></ContentCard>

    <!-- ACTIVITIES WITH ME - CONTENT PREVIEW-->
    <div v-if="teacher.TeacherActivity.length > 0" class="divWithMe">
      <h3>ACTIVITIES WITH ME</h3>
      <card-grid :length="teacher.TeacherActivity.length">
        <template #card="{ index }">
          <ActivityCard
            :activity-prop="{
              title: teacher.TeacherActivity[index].Activity.Title,
              image:
                '/images/' +
                teacher.TeacherActivity[index].Activity.BannerImageURL,
            }"
          >
          </ActivityCard>
        </template>
      </card-grid>
    </div>
    <!-- EVENTS WITH ME -->

    <div v-if="teacher.TeacherEvent.length > 0" class="divWithMe">
      <h3>EVENTS WITH ME</h3>
      <card-grid :length="teacher.TeacherEvent.length">
        <template #card="{ index }">
          <EventCard
            :event-prop="{
              date: teacher.TeacherEvent[index].Event.Date,
              title: teacher.TeacherEvent[index].Event.Name,
              endTime: teacher.TeacherEvent[index].Event.EndTime,
              eventId: teacher.TeacherEvent[index].Event.EventId,
              location: teacher.TeacherEvent[index].Event.Location,
              startTime: teacher.TeacherEvent[index].Event.StartTime,
              eventImage:
                '/images/' + teacher.TeacherEvent[index].Event.BannerImageURL,
              hostImage:
                '/images/' +
                teacher.TeacherEvent[index].Event.GuestEvent[0].Guest
                  .MainImageURL,
              hostName:
                teacher.TeacherEvent[index].Event.GuestEvent[0].Guest.Name,
              activityTags: teacher.TeacherActivity.map((ta) => ({
                text: ta.Activity.Title,
              })),
            }"
          >
          </EventCard>
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

    <NuxtLink class="link-button" to="/teachers"> View all teachers </NuxtLink>
  </PageWrap>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useAPI } from "~/composables/useAPI"

const route = useRoute()
const teacherName = route.params.teacher
console.log(teacherName)

//const teacher = ref()

// Chiamata all’API per ottenere i dettagli della teacher

console.log("teacherName che sto passando:", teacherName)
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
        Date: string
        Name: string
        EndTime: string
        EventId: number
        Location: string
        StartTime: string
        GuestEvent: [
          {
            Guest: {
              Name: string
              MainImageURL: string
            }
          },
        ]
        BannerImageURL: string
        ShortIntroduction: string
      }
    }>
  }[]
>("/postTeacherInfo", {
  method: "POST",
  body: JSON.stringify({ TeacherName: teacherName }),
})

if (error.value || !data.value) {
  console.error("Errore nel caricamento teacher:", error.value)
  throw new Error("Teacher non trovato")
}
console.log(data.value)
const teacher = data.value[0]

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
<style scoped>
.divWithMe {
  width: 100%;
}
.link-button {
  color: white;
  background-color: #020202;
  border-radius: 8px;
  padding: 8px 32px;
  margin: 16px;
  text-decoration: none;
}
</style>
