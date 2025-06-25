<script setup lang="ts">
import { useAPI } from "~/composables/useAPI"
import type { ResponseData } from "~/types"

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
  <PageWrap title="Namaste" img-src="HomePage 1.jpeg">
    <AnimatedCarousel
      :images="[
        { URL: 'HomePage 1.jpeg' },
        { URL: 'HomePage.jpg' },
        { URL: 'HomePage 1.jpeg' },
        { URL: 'HomePage.jpg' },
        { URL: 'HomePage 1.jpeg' },
        { URL: 'HomePage.jpg' },
      ]"
    />
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

    <SeparatorComponent :separator-title="'Events'"/>

    <h2 class="titleSubsection">OUR ACTIVITIES</h2>
    <card-grid :length="data?.activities.length || 0">
      <template #card="{ index }">
        <activity-card :activity-prop="data?.activities[index]!" />
      </template>
    </card-grid>
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
.titleSubsection {
  padding: 20px;
}
</style>
