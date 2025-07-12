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
  specializations: Array<{
    title: string
  }>
  activities: Array<{
    title: string
    shortDescription: string
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
      <h3 class="title title-teacher">Activities with me</h3>
      <card-grid :length="teacher.activities.length">
        <template #card="{ index }">
          <CardActivity
            :activity-prop="{
              title: teacher.activities[index].title,
              shortDescription: teacher.activities[index].shortDescription,
              image: teacher.activities[index].bannerImageURL,
              url: teacher.activities[index].url,
              yogaCategory: 0,
            }"
          >
          </CardActivity>
        </template>
      </card-grid>
    </div>

    <!-- EVENTS WITH ME -->
    <div v-if="teacher.events.length > 0" class="divWithMe">
      <h3 class="title title-teacher">Events with me</h3>
      <card-grid :length="teacher.events.length">
        <template #card="{ index }">
          <CardEvent
            :event-prop="{
              date: teacher.events[index].date,
              title: teacher.events[index].name,
              endTime: teacher.events[index].endTime,
              location: teacher.events[index].location,
              url: teacher.events[index].url,
              startTime: teacher.events[index].startTime,
              eventImage: teacher.events[index].bannerImageURL,
              hostImage:
                teacher.events[index].guests[0]?.mainImageURL ??
                teacher.mainImageURL,
              hostName: teacher.events[index].guests[0]?.name ?? teacher.name,
              activityTags: teacher.activities.map((ta) => ({
                text: ta.title,
              })),
            }"
          />
        </template>
      </card-grid>
    </div>

    <!-- IL MIO PERCORSO -->
    <div class="myJourney">
      <h3 class="title teacher-title">My history:</h3>
      <p>{{ teacher.history }}</p>
    </div>

    <!-- SPECIALIZZAZIONI & CERTIFICAZIONI -->
    <div class="specCert body-text">
      <div class="column">
        <h4>Specializations:</h4>
        <div v-for="(item, index) in teacher.specializations" :key="index">
          <ul>
            <li>{{ item.title }}</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <h4>Certifications:</h4>
        <div v-for="(item, index) in teacher.certifications" :key="index">
          <ul>
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CAROSELLO -->
    <AnimatedCarousel :images="teacher.images" />

    <NuxtLink class="link-button" to="/teachers"> View all teachers </NuxtLink>
  </PageWrap>
</template>

<style scoped lang="scss">
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
  width: 60%;

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

  .mobile-layout & {
    width: 90%;
    margin: auto;
  }
}

.specCert {
  display: flex;
  margin-top: 25px;
  width: 60%;
  flex-direction: row;

  .column {
    flex: 50%;

    .mobile-layout & {
      margin-bottom: 10px;
    }
  }

  .mobile-layout & {
    flex-direction: column;
    text-align: center;
  }
}

ul {
  list-style-type: none;
}

.link-button {
  color: white;
  background-color: #7265b4;
  border-radius: 8px;
  padding: 8px 32px;
  margin: 16px;
  text-decoration: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.title-teacher {
  font-weight: bold;
}
</style>
