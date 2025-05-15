<template>
  <page-wrap :title="'Activities'">
    <card-grid :length="activitiesList.length">
      <template #card="{ index }">
        <activity-card :activity-prop="activitiesList[index]" />
      </template>
    </card-grid>
  </page-wrap>
</template>

<script setup lang="ts">
const activitiesList = [
  {
    Title: "Meditazione",
    MainImageURL: "https://placehold.co/400x400",
  },
  {
    Title: "Mindfulness",
    MainImageURL: "https://placehold.co/400x400",
  },
  {
    Title: "Rituale",
    MainImageURL: "https://placehold.co/400x400",
  },
  {
    Title: "Better sleep",
    MainImageURL: "https://placehold.co/400x400",
  },
  {
    Title: "Golden Hour Sunset",
    MainImageURL: "https://placehold.co/400x400",
  },
]
</script>

<style scoped>
div {
  background-color: #f0f0f0;
  flex: 1;
  width: 100%;
}
</style>
