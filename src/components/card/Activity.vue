<template>
  <NuxtLink :to="`/activities/${activityProp.url}`" class="card">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${activityProp.image})` }"
    ></div>
    <div class="card-title">{{ activityProp.title }}</div>
    <div v-if="activityProp.shortDescription !== null" class="card-description">
      {{ activityProp.shortDescription }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ActivityCardProps } from "~/types"

const { activityProp } = defineProps<{
  activityProp: ActivityCardProps
}>()
</script>

<style scoped lang="scss">
div {
  border: 0 solid black;
}

.card {
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  height: 445px;
  text-decoration: none;
  padding: 10px;
  background: rgb(255, 255, 255);
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
  border: 0 solid black;
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  .mobile-layout & {
    max-width: 1080px;
  }
}

.card:hover {
  transform: scale(1.02);
  background-color: #D8CFE7;
}

.card-image {
  width: 100%;
  min-height: 300px;
  border-radius: 7px;
  align-self: stretch;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-title {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 120%;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 5px;
}

.card-description {
  color: black;
  font-size: 14px;
  text-align: center;
  justify-content: center;
}
</style>
