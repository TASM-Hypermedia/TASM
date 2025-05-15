<template>
  <page-wrap :title="'Activities'">
    <template v-if="activitiesList.length > 0">
      <card-grid :length="activitiesList.length">
        <template #card="{ index }">
          <activity-card :activity-prop="activitiesList[index]" />
        </template>
      </card-grid>
    </template>
    <template v-else>
      <div class="empty-state">No activities available at the moment.</div>
    </template>
  </page-wrap>
</template>

<script setup lang="ts">
import type { Activity } from "~/types"

const activitiesList: Activity[] = [
  // {
  //     title: "Meditazione",
  //     image: "https://placehold.co/400x400",
  // },
  // {
  //     title: "Mindfulness",
  //     image: "https://placehold.co/400x400",
  // },
  // {
  //     title: "Rituale",
  //     image: "https://placehold.co/400x400",
  // },
  // {
  //     title: "Better sleep",
  //     image: "https://placehold.co/400x400",
  // },
  // {
  //     title: "Golden Hour Sunset",
  //     image: "https://placehold.co/400x400",
  // },
]
</script>

<style scoped>
div {
  background-color: #f0f0f0;
  flex: 1;
  width: 100%;
}
</style>
