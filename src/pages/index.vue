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

const { data } = response;

console.log(response);

/*const benefits = [
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
]*/
</script>

<template>
  <div>
    <PageWrap title="Namaste" img-src="HomePage 1.jpeg">
      <!--<div height="400px" width="100%">
        <v-sheet class="mx-auto" elevation="0" max-width="1400px">
          <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item
              v-for="(item, index) in data?.highlights.highlightActivities ||
              []"
              :key="index"
            >
              <div
                class="ma-4 pa-4 d-flex fill-height justify-center align-center"
              >
                <ActivityCard :activity-prop="item" />
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>

      <div height="400px" width="100%">
        <v-sheet class="mx-auto" elevation="0" max-width="1400px">
          <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item
              v-for="(item, index) in data?.highlights.highlightEvents || []"
              :key="index"
            >
              <div
                class="ma-4 pa-4 d-flex fill-height justify-center align-center"
              >
                <eventCard :event-prop="item" />
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>-->

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
      </motion.div>
    </PageWrap>

    <HomePageElement
      :home-page-element="{
        title: data?.yogaCenter.title || 'Yoga Center',

        description:
          data?.yogaCenter.description ||
          'Discover our Yoga Center, a serene space for relaxation and rejuvenation.',
        imgUrl: '/images/center/yogaCenter.jpg',
        altDescription: 'Yoga center image',
      }"
    ></HomePageElement>

    <div class="slideSection">
      <HomePage3Slides></HomePage3Slides>
    </div>
    <!-- <SeparatorComponent :separator-title="'Events'" /> -->
    <BenefitsWrapper />

    <TrendingActivities :activities-prop="response.data.value?.highlights.highlightActivities"/>
  </div>
</template>

<style scoped>
.cardYogaCenter {
  width: 100%;
  height: 100%;
  padding: 11px;
  background: rgb(255, 255, 255);
  /*box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);*/
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  /*outline: 1px rgba(0, 0, 0, 0.17) solid;
  outline-offset: -1px;*/
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
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
}
.slideSection {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 5%;
}
</style>
