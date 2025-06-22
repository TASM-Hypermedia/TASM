<script setup lang="ts">
import type { Activity, ActivityType } from "~/types"

const route = useRoute()

const a = route.params.activity
const ActivityURL = typeof a === "string" ? a : a.join("")

console.log(ActivityURL)

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

const activityProp: Activity = {
  title: activity.title,
  image: `/images/${activity.mainImageURL}`,
  url: activity.url,
}

const defaultDifficulty =
  activity.info[0].length > 0 ? 0 : activity.info[1].length ? 1 : 2

const selectedDifficulty = ref(defaultDifficulty)
const setDifficulty = (n: number) => {
  selectedDifficulty.value = n
}
</script>
<template>
  <PageWrap
    :img-src="activity.mainImageURL"
    tagline="Our Activities:"
    :title="activity.title"
  >
    <section>
      <p class="description">
        {{ activity.description }}
      </p>
    </section>

    <AnimatedCarousel :images="activity.images" />

    <section class="pair">
      <div>
        <h1>What You'll Do</h1>
        <span class="label">Difficulty level:</span>
        <div class="buttons">
          <button
            v-if="activity.info[0].length > 0"
            :class="selectedDifficulty === 0 ? 'selected' : undefined"
            @click="setDifficulty(0)"
          >
            Easy
          </button>
          <button
            v-if="activity.info[1].length > 0"
            :class="selectedDifficulty === 1 ? 'selected' : undefined"
            @click="setDifficulty(1)"
          >
            Medium
          </button>
          <button
            v-if="activity.info[2].length > 0"
            :class="selectedDifficulty === 2 ? 'selected' : undefined"
            @click="setDifficulty(2)"
          >
            Hard
          </button>
        </div>
        <ol>
          <li
            v-for="(info, i) in activity.info[selectedDifficulty]"
            :key="`info-point-${i}`"
          >
            <strong>{{ info.name }}</strong> – {{ info.description }}
          </li>
        </ol>
      </div>

      <div class="lessons">
        <h1>Next Lessons</h1>
        <div
          v-for="(lesson, index) in activity.nextLessons"
          :key="index"
          class="next-lesson"
        >
          <img class="logo" src="../../assets/images/calendar.svg" alt="logo" />
          <div>
            <div>
              <span style="font-weight: bold">{{ lesson.name }}</span>
              <span>{{ lesson.difficulty }}</span>
            </div>
            <div style="font-size: 0.9em; opacity: 0.7">
              <span>{{ lesson.date }}</span>
              <span>{{ lesson.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="align-items: center; text-align: center">
      <h1>Teaching {{ activity.title }}</h1>
      <div class="temp-grid">
        <teacher-card :teacher-prop="activity.teachers[0]" />
        <teacher-card
          v-if="activity.teachers[1]"
          :teacher-prop="activity.teachers[1]"
        />
        <teacher-card
          v-if="activity.teachers[2]"
          :teacher-prop="activity.teachers[2]"
        />
      </div>
    </section>

    <section style="align-items: center; text-align: center">
      <h2>Similar Activities</h2>
      <div class="temp-grid">
        <!-- TODO: similar activities -->
        <activity-card :activity-prop="activityProp" />
        <activity-card :activity-prop="activityProp" />
        <activity-card :activity-prop="activityProp" />
      </div>
      <NuxtLink class="link-button" to="/activities">
        View all activities
      </NuxtLink>
    </section>
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
      background-color: #e2e2e2;
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

div.temp-grid {
  display: flex;
  width: 100%;
  padding: 24px 0;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;

  .mobile-layout & {
    flex-direction: column;
  }
}

.link-button {
  color: white;
  background-color: #020202;
  border-radius: 8px;
  padding: 8px 32px;
  margin: 16px;
  text-decoration: none;
}
</style>
