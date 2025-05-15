<template>
  <div class="card">
    <img
      class="teacher_image"
      style=""
      :src="'/images/' + teacherProp.MainImageURL"
    />
    <div class="teacher_name" style="">{{ teacherProp.Name }}</div>
    <div class="mantra" style="">{{ teacherProp.Mantra }}</div>

    <v-container class="tag_container">
      <activity-tag
        v-for="(tag, index) in teacherProp.ActivityTags"
        :key="index"
        :text="tag.text"
      />
    </v-container>
  </div>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
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
}

.teacher_image {
  width: 226px;
  height: 218px;
  transform-origin: top left;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  height: 63px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: var(--Text-Default-Default, #1e1e1e);
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
