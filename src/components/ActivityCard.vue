<template>
  <NuxtLink :to="`/activities/${activityProp.url}`" class="card">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${activityProp.image})` }"
    ></div>
    <div class="card-title">{{ activityProp.title }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Activity } from "~/types"

const { activityProp } = defineProps<{
  activityProp: Activity
}>()
</script>

<style scoped>
div {
  border: 0 solid black;
}

.card {
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  height: 275px;
  text-decoration: none;
  padding: 10px;
  background: rgb(147, 210, 158);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 15px;
  outline: 1px rgba(0, 0, 0, 0.17) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
  gap: 10px;
  border: 0px solid black;

  .mobile-layout & {
    max-width: 1080px;
  }
}

.card-image {
  width: 100%;
  height: 90%;
  border-radius: 7px;
  align-self: stretch;
  background-size: cover;
  border: 0 solid black;
  background-position: center; /* Centers the image both vertically and horizontally */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  /*flex: none
        */
}

.card-title {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: rgb(255, 255, 255);
  font-size: 110%;
  font-family: Instrument Sans;
  font-weight: 400;
  word-wrap: break-word;
}
</style>
