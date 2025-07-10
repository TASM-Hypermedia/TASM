<script setup lang="ts">
import { useAPI } from "~/composables/useAPI"
import type { ResponseData } from "~/types"

definePageMeta({
  title: "TASM Yoga",
  description: "Welcome to TASM Yoga, your journey to wellness begins here.",
})

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
</script>

<template>
  <main>
    <HeroPage title="Namaste" url-img="HomePage 1.jpeg" />

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
    <div class="slideSection">
      <HomePage3Slides></HomePage3Slides>
    </div>
    <!-- <SeparatorComponent :separator-title="'Events'" /> -->
    <BenefitsWrapper />
    <ReviewsComponent :reviews-prop="response.data.value?.reviews" />

    <CertificationComponent
      :certification-prop="response.data.value?.certifications"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  gap: 32px;
  margin-bottom: 32px;
  border: 0px solid black;
}

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
