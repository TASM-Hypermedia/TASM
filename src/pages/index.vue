<script setup lang="ts">
import { useAPI } from "~/composables/useAPI"
import type { ResponseData } from "~/types"

definePageMeta({
  title: "Inner Bloom",
  description: "Welcome to Inner Bloom, your journey to wellness begins here.",
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
    <!-- This page was split into components due to its complexity -->
    <HeroPage
      title="Namaste"
      subtitle="Welcome to Inner Bloom yoga center!"
      url-img="HomePage 1.jpeg"
    />
    <HomeCenter
      :home-page-element="{
        title: data?.yogaCenter.title || 'Yoga Center',

        description:
          data?.yogaCenter.description ||
          'Discover our Yoga Center, a serene space for relaxation and rejuvenation.',
        imgUrl: '/images/center/yogaCenter.jpg',
        altDescription: 'Yoga center image',
      }"
    />

    <LazyHomeTrendingActivities
      :activities-prop="response.data.value?.highlights.highlightActivities"
    />

    <LazyHomeHighlightedEvents
      v-if="
        response.data.value?.highlights.highlightEvents &&
        response.data.value.highlights.highlightEvents.length
      "
      :highlighted-events="
        response.data.value?.highlights.highlightEvents ?? []
      "
    />

    <div class="slideSection">
      <HomeSlides />
    </div>
    <!-- <SeparatorComponent :separator-title="'Events'" /> -->
    <LazyHomeBenefits />
    <LazyHomeReviews :reviews-prop="response.data.value?.reviews" />

    <LazyHomeCertifications
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
  overflow: hidden;
  max-width: 100vw;
  height: 100%;
  gap: 100px;
  margin-bottom: 32px;
  border: 0 solid black;
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
  padding: 16px;
}
</style>
