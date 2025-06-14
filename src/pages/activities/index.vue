<template>
  <page-wrap
    :title="'Activities'"
    subtitle="All the types of yoga we offer"
    img-src="/banners/activities-banner.jpg"
  >
    <template v-if="activitiesList && activitiesList.length > 0">
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
import ActivityCard from "~/components/ActivityCard.vue"

const res = await useAPI<
  {
    title: string
    image: string
  }[]
>("/getAllActivities")

if (res.error.value) throw res.error.value
const activitiesList = res.data.value
</script>

<style scoped>
div {
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  flex-direction: row;

  .mobile-layout & {
    width: 90%;
    flex-direction: column;
  }
}
</style>
