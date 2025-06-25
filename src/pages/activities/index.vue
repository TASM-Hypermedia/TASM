<script setup lang="ts">
import ActivityCard from "~/components/ActivityCard.vue"

const resCategories = await useAPI<
  {
    title: string
    description: string
  }[]
>("getAllYogaCategories")

if (resCategories.error.value) throw resCategories.error.value
const categoriesList = resCategories.data.value


const resActivites = await useAPI<
  {
    title: string
    shortDescription: string
    image: string
    url: string
    yogaCategory: number
  }[]
>("/getAllActivities")

if (resActivites.error.value) throw resActivites.error.value
const activitiesListTraditional = resActivites.data.value!.filter((a) => a.yogaCategory === 1)
const activitiesListModern = resActivites.data.value!.filter((a) => a.yogaCategory === 2)
</script>

<template>
  <page-wrap
    :title="'Activities'"
    subtitle="All the types of yoga we offer"
    img-src="/banners/activities-banner.jpg"
  >
    <section>
      <h2>{{ categoriesList![0].title }}</h2>
      <p>{{ categoriesList![0].description }}</p>
      <template v-if="activitiesListTraditional.length > 0">
        <card-grid :length="activitiesListTraditional.length">
          <template #card="{ index }">
            <activity-card :activity-prop="activitiesListTraditional[index]" />
          </template>
        </card-grid>
      </template>
      <template v-else>
        <div class="empty-state">No activities available at the moment.</div>
      </template>
    </section>

    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

    <section>
      <h2>{{ categoriesList![1].title }}</h2>
      <p>{{ categoriesList![1].description }}</p>
      <template v-if="activitiesListModern.length > 0">
        <card-grid :length="activitiesListModern.length">
          <template #card="{ index }">
            <activity-card :activity-prop="activitiesListModern[index]" />
          </template>
        </card-grid>
      </template>
      <template v-else>
        <div class="empty-state">No activities available at the moment.</div>
      </template>
    </section>
  </page-wrap>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: row;

  .mobile-layout & {
    width: 90%;
    flex-direction: column;
  }
}
</style>
