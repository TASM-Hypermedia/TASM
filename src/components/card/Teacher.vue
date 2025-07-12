<template>
  <NuxtLink :to="`/teachers/${teacherProp.url}`" class="card">
    <NuxtImg
      preload
      format="webp"
      quality="75"
      class="teacher_image"
      :src="'/images/' + teacherProp.image"
      alt=""
    />
    <div class="teacher_name title" style="">{{ teacherProp.name }}</div>
    <!-- <div class="mantra" style="">&ldquo;{{ teacherProp.mantra }}&rdquo;</div> -->
    <div class="mantra body-text" style="">{{ teacherProp.mantra }}</div>

    <v-container class="tag_container">
      <card-activity-tag
        v-for="(tag, index) in teacherProp.activityTags"
        :key="index"
        :text="tag.text"
      />
    </v-container>
  </NuxtLink>
  <!-- 
   1-motion wrapping 
   2-hover in css
   -->
</template>

<script setup lang="ts">
import type { Teacher } from "~/types"

defineProps<{
  teacherProp: Teacher
}>()
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 375px;
  height: 100%;
  padding: 20px;
  background: rgb(255, 255, 255);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  outline: 1px rgba(0, 0, 0, 0.17) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  color: rgb(0, 0, 0);
  text-decoration: none;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.02);
  background-color: #d8cfe7;
}

.teacher_image {
  width: 226px;
  height: 218px;
  transform-origin: top left;
  object-fit: cover;
  background: #d9d9d9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 114px;
}

.teacher_name {
  align-self: stretch;
  height: 43px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 26px;
  /* font-family: Instrument Sans; */
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
  color: inherit;
}

.mantra {
  align-self: stretch;
  flex: 1;
  text-align: center;
  display: flex;
  /* font-style: italic; */
  flex-direction: column;
  color: #1e1e1e;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28.8px;
  word-wrap: break-word;
  color: inherit;
}

.tag_container {
  width: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}
</style>
