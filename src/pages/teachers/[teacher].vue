<script setup lang="ts">
import { useRoute } from "vue-router"
import { useAPI } from "~/composables/useAPI"

const route = useRoute()
const TeacherURL = route.params.teacher

const data = await useAPI<{
  name: string
  mantra: string
  description: string
  history: string
  bannerImageURL: string
  mainImageURL: string
  certifications: Array<{
    title: string
  }>
  activities: Array<{
    title: string
    bannerImageURL: string
    url: string
  }>
  images: Array<{
    URL: string
    alt: string
  }>
  events: Array<{
    name: string
    shortIntroduction: string
    date: string
    startTime: string
    endTime: string
    location: string
    url: string
    guests: Array<{
      name: string
      mainImageURL: string
    }>
    bannerImageURL: string
  }>
}>("/postTeacher", {
  method: "POST",
  body: JSON.stringify({ TeacherURL }),
})

if (data.error.value || !data.data.value)
  throw createError({
    fatal: true,
    ...(data.error.value ?? {
      statusCode: 404,
    }),
  })

const teacher = data.data.value

console.log(teacher.certifications)
</script>

<template>
  <PageWrap
    :title="teacher.name"
    :subtitle="teacher.mantra"
    tagline="The Teachers:"
    :img-src="teacher.bannerImageURL"
  >
    <ContentCard
      :content-card-prop="{
        title: teacher.name,
        description: teacher.description,
        imgUrl: teacher.mainImageURL,
        altDescription: 'Teacher Image',
        imageOnTheRight: true,
      }"
    ></ContentCard>

    <!-- ACTIVITIES WITH ME - CONTENT PREVIEW-->
    <div v-if="teacher.activities.length > 0" class="divWithMe">
      <h3>ACTIVITIES WITH ME</h3>
      <card-grid :length="teacher.activities.length">
        <template #card="{ index }">
          <ActivityCard
            :activity-prop="{
              title: teacher.activities[index].title,
              image: teacher.activities[index].bannerImageURL,
              url: teacher.activities[index].url,
            }"
          >
          </ActivityCard>
        </template>
      </card-grid>
    </div>

    <!-- EVENTS WITH ME -->
    <div v-if="teacher.events.length > 0" class="divWithMe">
      <h3>EVENTS WITH ME</h3>
      <card-grid :length="teacher.events.length">
        <template #card="{ index }">
          <EventCard
            :event-prop="{
              date: teacher.events[index].date,
              title: teacher.events[index].name,
              endTime: teacher.events[index].endTime,
              location: teacher.events[index].location,
              url: teacher.events[index].url,
              startTime: teacher.events[index].startTime,
              eventImage: teacher.events[index].bannerImageURL,
              hostImage: teacher.events[index].guests[0].mainImageURL,
              hostName: teacher.events[index].guests[0].name,
              activityTags: teacher.activities.map((ta) => ({
                text: ta.title,
              })),
            }"
          >
          </EventCard>
        </template>
      </card-grid>
    </div>

    <!-- IL MIO PERCORSO -->
    <div class="myJourney">
      <h3>My history:</h3>
      <p>{{ teacher.history }}</p>
    </div>

    <!-- SPECIALIZZAZIONI & CERTIFICAZIONI -->
    <div class="SpecCert"></div>
    <p><b>Specializations: </b> {{ teacher.activities.map((a) => a.title).join(",") }}</p>
    <p><b>Certifications: </b> {{ teacher.certifications.join(",") }}</p>

    <!-- CAROSELLO -->
    <!--<SlideCarousel
      :images="teacher.TeacherImages.map((img) => img.Image)"
      :width="1000"
    ></SlideCarousel>-->

    <NuxtLink class="link-button" to="/teachers"> View all teachers </NuxtLink>
  </PageWrap>
</template>

<style scoped>
.divWithMe {
  width: 100%;
  text-align: center;

  h3 {
    margin-top: 60px;

    .mobile-layout & {
      text-align: center;
    }
  }
}

.myJourney {
  width: 100%;

  h3 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    .mobile-layout & {
      width: 90%;
      margin: auto;
      text-align: center;
    }
  }
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
