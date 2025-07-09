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

console.log("ciaoooooo")
console.log(response)
</script>

<template>
  <div>
    <PageWrap title="Namaste" img-src="HomePage 1.jpeg">
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

    <TrendingActivities
      :activities-prop="response.data.value?.highlights.highlightActivities"
    />

    <HighlightedEvents
      v-if="
        response.data.value?.highlights.highlightEvents &&
        response.data.value.highlights.highlightEvents.length
      "
      :highlighted-events="
        response.data.value?.highlights.highlightEvents ?? []
      "
    />
    <ReviewsComponent :reviews-prop="response.data.value?.reviews"/>

    <CertificationComponent :certification-prop="response.data.value?.certifications" />
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
