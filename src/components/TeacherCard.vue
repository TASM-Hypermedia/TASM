<template>
  <NuxtLink :to="`/teachers/${teacherProp.url}`" class="card">
    <img
      class="teacher_image"
      :src="'/images/' + teacherProp.image"
      :alt="teacherProp.name"
    />
    <div class="teacher_name" style="">{{ teacherProp.name }}</div>
    <div class="mantra" style="">&ldquo;{{ teacherProp.mantra }}&rdquo;</div>

    <v-container class="tag_container">
      <activity-tag
        v-for="(tag, index) in teacherProp.activityTags"
        :key="index"
        :text="tag.text"
      />
    </v-container>
  </NuxtLink>
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
  padding: 11px;
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
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
  font-size: 24px;
  font-family: Instrument Sans;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  color: inherit;
}

.mantra {
  align-self: stretch;
  flex: 1;
  text-align: center;
  display: flex;
  font-style: italic;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
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
