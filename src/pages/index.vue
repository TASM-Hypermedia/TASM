<script setup lang="ts">
import { useAPI } from "~/composables/useAPI"
import type { ResponseData } from "~/types"
import { motion } from "motion-v"

const response = await useAPI<ResponseData>("/getHomePage", {
  method: "GET",
})

if (response.error.value || !response.data.value)
  throw createError({
    fatal: true,
    ...(response.error.value ?? {
      statusCode: 404,
      message: `${response.error.value}`,
    }),
  })

const { data } = response

const benefits = [
  {
    title: "CONNECTION",
    description:
      "Reconnect with yourself, others, and the world around you—on and off the mat.",
    image: "Connessione.svg",
  },
  {
    title: "CLARITY",
    description:
      "Find mental focus and inner stillness through breath and mindful movement.",
    image: "Lampadina.svg",
  },
  {
    title: "STRENGTH",
    description:
      "Build physical resilience and emotional balance from the inside out.",
    image: "Forza.svg",
  },
  {
    title: "FREEDOM",
    description: "Release tension in the body and let go of limiting thoughts.",
    image: "Liberta.svg",
  },
]
</script>

<template>
  <PageWrap title="Namaste" img-src="HomePage 1.jpeg">
    <AnimatedTitle title="Namaste" />
    <div height="400px" width="100%">
      <v-sheet class="mx-auto" elevation="0" max-width="1080px">
        <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item
            v-for="(item, index) in data?.highlights.highlightActivities || []"
            :key="index"
          >
            <div class="d-flex fill-height justify-center align-center">
              <ActivityCard :activity-prop="item" />
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <div height="400px" width="100%">
      <v-carousel :autoplay="true" :interval="5000">
        <v-carousel-item
          v-for="(item, index) in data?.highlights.highlightEvents || []"
          :key="index"
        >
          <div class="d-flex fill-height justify-center align-center">
            <EventCard :event-prop="item" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>

    <motion.div
      :style="{
        width: '100%',
        height: '100%',
        display: 'flex',
      }"
      :transition="{
        duration: 0.5,
        ease: 'easeInOut',
      }"
      :variants="{
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
      }"
      initial="initial"
      while-in-view="animate"
    >
      <!-- Usare transizione MATCH CUT per andare nello yoga center-->
      <NuxtLink to="/teachers" class="cardYogaCenter">
        <ContentCard
          :content-card-prop="{
            title: data?.yogaCenter.title || 'Yoga Center',
            //subtitle: data?.yogaCenter.Mantra,
            description: data?.yogaCenter.description,
            imgUrl: '/images/center/yogaCenter.jpg',
            altDescription: 'Yoga center image',
            imageOnTheRight: false,
          }"
        ></ContentCard>
      </NuxtLink>
    </motion.div>

    <NuxtLink to="/teachers" class="cardYogaCenter">
      <HomePageElement
        :content-card-prop="{
          title: data?.yogaCenter.title || 'Yoga Center',
          subtitle: data?.yogaCenter.subtitle || 'Namaste',
          description: data?.yogaCenter.description,
          imgUrl: '/images/center/yogaCenter.jpg',
          altDescription: 'Yoga center image',
          imageOnTheRight: false,
        }"
      />
    </NuxtLink>

    <h2 class="titleSubsection">OUR TEACHERS</h2>

    <card-grid :length="data?.teachers.length || 0">
      <template #card="{ index }">
        <teacher-card :teacher-prop="data?.teachers[index]!" />
      </template>
    </card-grid>

    <h2 class="titleSubsection">OUR EVENTS</h2>

    <card-grid :length="data?.events.length || 0">
      <template #card="{ index }">
        <event-card :event-prop="data?.events[index]!" />
      </template>
    </card-grid>

    <h2 class="titleSubsection">OUR ACTIVITIES</h2>
    <card-grid :length="data?.activities.length || 0">
      <template #card="{ index }">
        <activity-card :activity-prop="data?.activities[index]!" />
      </template>
    </card-grid>

    <div class="benefitsSection">
      <AnimatedTitle title="BENEFITS" />

      <div class="cardBenefits">
        <v-row no-gutters>
          <v-col
            v-for="i in benefits.length || 0"
            :key="i"
            class="pa-3"
            cols="12"
            sm="12"
            md="6"
            lg="3"
          >
            <BenefitsContentCard :benefits-prop="benefits[i - 1]" />
          </v-col>
        </v-row>
      </div>
    </div>
  </PageWrap>
</template>

<style scoped>
.cardYogaCenter {
  width: 100%;
  height: 100%;
  padding: 11px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  outline: 1px rgba(0, 0, 0, 0.17) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: flex;
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.benefitsSection {
  background-color: #a2d2ff;
}
</style>
