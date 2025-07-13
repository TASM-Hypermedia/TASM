<script setup lang="ts">
import type { ActivityType } from "~/types"

const route = useRoute()

const a = route.params.activity
const ActivityURL = typeof a === "string" ? a : a.join("")

const response = await useAPI<ActivityType>("/postActivity", {
  method: "POST",
  body: JSON.stringify({ ActivityURL }),
})

if (response.error.value || !response.data.value)
  throw createError({
    fatal: true,
    ...response.error.value,
    statusCode: 404,
    statusMessage: "Activity not found",
    message: `"${ActivityURL}" - We don't offer this activity yet!`,
  })

const activity = response.data.value

const defaultDifficulty =
  activity.info[0].length > 0 ? 0 : activity.info[1].length ? 1 : 2

const selectedDifficulty = ref(defaultDifficulty)
const setDifficulty = (n: number) => {
  selectedDifficulty.value = n
}

// here we fetch all activities and select random ones at build time, in a production
// implementation this should be done on the backend to avoid loading all activities
// at once with an ACTUAL ranking algorithm of some sort
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
let activitiesList = resActivities.data
  .value!.filter((a) => a.yogaCategory === activity.yogaCategory)
  .filter((a) => a.url !== activity.url)

const similarActivities: typeof activitiesList = []

for (let i = 0; i < 3; i++) {
  const randomIndex = Math.floor(Math.random() * activitiesList.length)
  similarActivities.push(activitiesList[randomIndex])
  activitiesList = activitiesList.filter(
    (a) => a.url !== similarActivities[i].url
  )
}
</script>
<template>
  <PageWrap
    :img-src="activity.mainImageURL"
    tagline="Our Activities:"
    :title="activity.title"
  >
    <section>
      <p class="description body-text">
        {{ activity.description }}
      </p>
    </section>

    <AnimatedCarousel :images="activity.images" />

    <section class="pair">
      <div>
        <h1 class="title">What You'll Do</h1>
        <span class="label body-title">Difficulty level:</span>
        <div class="buttons body-text">
          <button
            v-if="activity.info[0].length > 0"
            :class="selectedDifficulty === 0 ? 'selected' : undefined"
            @click="setDifficulty(0)"
          >
            🌿 Easy
          </button>
          <button
            v-if="activity.info[1].length > 0"
            :class="selectedDifficulty === 1 ? 'selected' : undefined"
            @click="setDifficulty(1)"
          >
            🌀 Medium
          </button>
          <button
            v-if="activity.info[2].length > 0"
            :class="selectedDifficulty === 2 ? 'selected' : undefined"
            @click="setDifficulty(2)"
          >
            🔥 Hard
          </button>
        </div>
        <ol>
          <li
            v-for="(info, i) in activity.info[selectedDifficulty]"
            :key="`info-point-${i}`"
            class="body-text"
          >
            <strong>{{ info.name }}</strong> – {{ info.description }}
          </li>
        </ol>
      </div>

      <div class="lessons">
        <h1 class="title">Next Lessons</h1>
        <div
          v-for="(lesson, index) in activity.nextLessons"
          :key="index"
          class="next-lesson"
        >
          <Icon name="material-symbols:calendar-today" class="calendar" />
          <div>
            <div>
              <span style="font-weight: bold" class="body-text">{{
                lesson.name
              }}</span>
              <span class="body-text">{{ lesson.difficulty }}</span>
            </div>
            <div style="font-size: 1em; opacity: 0.7" class="body-text">
              <span>{{ lesson.date }}</span>
              <span>{{ lesson.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="align-items: center; text-align: center">
      <h1 class="title">Teaching {{ activity.title }}</h1>
      <CardGrid :length="activity.teachers.length">
        <template #card="{ index }">
          <card-teacher :teacher-prop="activity.teachers[index]" />
        </template>
      </CardGrid>
    </section>

    <ClientOnly>
      <section style="align-items: center; text-align: center">
        <h1 class="title">Similar Activities</h1>
        <card-grid :length="similarActivities.length">
          <template #card="{ index }">
            <card-activity :activity-prop="similarActivities[index]" />
          </template>
        </card-grid>
        <NuxtLink class="link-button body-text" to="/activities">
          View all activities
        </NuxtLink>
      </section>
    </ClientOnly>
  </PageWrap>
</template>

<style scoped lang="scss">
section {
  padding: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-weight: 400;
    font-size: 1.8em;
  }
}

.description {
  text-align: center;

  .mobile-layout & {
    max-width: 100%;
    width: 100%;
  }
}

h1 {
  font-size: 2.5em;
}

span.label {
  opacity: 0.8;
  font-size: 1.3em;
}

section.pair {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: stretch;
  gap: 64px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mobile-layout & {
    flex-direction: column;
  }
}

ol {
  padding-left: 20px;

  li::marker {
    font-weight: bold;
  }
}

div.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  gap: 8px;

  .mobile-layout & {
    margin-bottom: 15px;
  }

  button {
    flex: 1;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    padding: 2px;
    outline: 1px rgba(0, 0, 0, 0.17) solid;
    outline-offset: -1px;

    &.selected {
      background-color: #e8ddf1;
    }
  }
}

.lessons {
  .mobile-layout & {
    width: 100%;
  }
}

.next-lesson {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 12px;
  margin: 4px;
  outline: 1px rgba(0, 0, 0, 0.17) solid;
  outline-offset: -1px;

  .calendar {
    margin: 4px 0;
    width: 36px;
    height: 36px;
  }

  img {
    flex: 0;
    padding: 8px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
