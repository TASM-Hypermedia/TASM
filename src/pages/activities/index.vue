<script setup lang="ts">
import ActivityCard from "~/components/ActivityCard.vue"

definePageMeta({
  title: "Activities",
  description: "Explore the various types of yoga we offer.",
})

const resCategories = await useAPI<
  {
    title: string
    description: string
  }[]
>("getAllYogaCategories")

if (resCategories.error.value) throw resCategories.error.value
const categoriesList = resCategories.data.value

const resActivities = await useAPI<
  {
    title: string
    shortDescription: string
    image: string
    url: string
    yogaCategory: number
  }[]
>("/getAllActivities")

if (resActivities.error.value) throw resActivities.error.value
const activitiesListTraditional = resActivities.data.value!.filter(
  (a) => a.yogaCategory === 1
)
const activitiesListModern = resActivities.data.value!.filter(
  (a) => a.yogaCategory === 2
)
</script>

<template>
  <page-wrap
    :title="'Activities'"
    subtitle="All the types of yoga we offer"
    img-src="/banners/activities-banner.jpg"
  >
    <section>
      <div class="category">
        <h1>{{ categoriesList![0].title }}</h1>
        <p>{{ categoriesList![0].description }}</p>
      </div>
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

    <section>
      <div class="category">
        <h1 id="dynamic">{{ categoriesList![1].title }}</h1>
        <p>{{ categoriesList![1].description }}</p>
      </div>
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

<style scoped lang="scss">
div {
  width: 100%;
  display: flex;
  flex-direction: row;

  .mobile-layout & {
    width: 90%;
    margin: auto;
    flex-direction: column;
  }
}

.category {
  width: 80%;
  display: block;
  margin: auto;
  text-align: center;

  h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #7265b4;
  }

  #dynamic {
    margin-top: 60px;
  }

  p {
    margin-bottom: 20px;
    justify-content: center;
  }
}
</style>
