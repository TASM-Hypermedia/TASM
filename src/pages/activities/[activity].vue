<script setup lang="ts">
//import type { Title } from "#components"
//import type { Teacher } from "~/types"

// const route = useRoute()

// const a = route.params.activity
// const title = typeof a === "string" ? a : a.join("")

interface ActivityType {
  Title: string
  MainImageURL: string
  Description: string
  NextLessons: {
    Date: string
    Time: string
    Name: string
    Difficulty: string
  }[]
}

const activity: ActivityType = {
  Title: "Vinyasa Yoga",
  MainImageURL: "activities/vinyasaYoga-banner.jpg",
  Description:
    "Vinyasa Yoga is a dynamic and flowing style of yoga that emphasizes the seamless connection between breath and movement. In a Vinyasa practice, each posture is synchronized with an inhale or exhale, creating a continuous flow from one asana (yoga posture) to the next. This rhythmic movement not only builds strength, flexibility, and endurance but also encourages mindfulness, helping practitioners stay present in the moment. The practice often includes creative sequences, which can range from slow and meditative to fast-paced and intense, providing a holistic workout for both the body and mind. \n\n\nVinyasa Yoga is known for its versatility and adaptability, allowing practitioners to tailor the experience to their own level of fitness and personal goals. Whether you're looking for a gentle practice to calm your mind or a vigorous session to challenge your body, Vinyasa offers a balance of flow, power, and relaxation.",
  NextLessons: [
    {
      Date: "2023-10-30",
      Time: "10:00 - 11:00 (1h)",
      Name: "Lesson 1",
      Difficulty: "🌀 Medium",
    },
    {
      Date: "2023-10-31",
      Time: "14:00 - 15:00 (1h)",
      Name: "Lesson 2",
      Difficulty: "🌿 Easy",
    },
    {
      Date: "2023-11-01",
      Time: "09:00 - 10:00 (1h)",
      Name: "Lesson 3",
      Difficulty: "🔥 Hard",
    },
    {
      Date: "2023-11-02",
      Time: "13:00 - 14:00 (1h)",
      Name: "Lesson 4",
      Difficulty: "🌀 Medium",
    },
    {
      Date: "2023-11-03",
      Time: "11:00 - 12:00 (1h)",
      Name: "Lesson 5",
      Difficulty: "🌿 Easy",
    },
  ],
}

/*const teachersList: Teacher[] = [
  {
    Name: "string",
    MainImageURL: "https://placehold.co/226x218",
    Mantra: "Come quando fuori piove",
    ActivityTags: [
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
    ],
  },
  {
    Name: "string",
    MainImageURL: "https://placehold.co/226x218",
    Mantra: "Come quando fuori piove",
    ActivityTags: [
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
    ],
  },
  {
    Name: "string",
    MainImageURL: "https://placehold.co/226x218",
    Mantra: "Come quando fuori piove",
    ActivityTags: [
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
    ],
  },
  {
    Name: "string",
    MainImageURL: "https://placehold.co/226x218",
    Mantra: "Come quando fuori piove",
    ActivityTags: [
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
    ],
  },
]*/

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
]

const selectedDifficulty = ref(0)
const setDifficulty = (n: number) => {
  selectedDifficulty.value = n
}
</script>
<template>
  <PageWrap
    :img-src="activity.MainImageURL"
    tagline="Our Activities:"
    :title="activity.Title"
  >
    <section>
      <p class="description">
        {{ activity.Description }}
      </p>
    </section>
    <SlideCarousel
      :width="1000"
      :images="[
        { URL: 'Teacher1.jpg' },
        { URL: 'Team.jpg' },
        { URL: 'Teacher1.jpg' },
        { URL: 'Teacher1.jpg' },
        { URL: 'Teacher1.jpg' },
      ]"
    />
    <section class="pair">
      <div>
        <h1>What You'll Do</h1>
        <span class="label">Difficulty level:</span>
        <div class="buttons">
          <button
            :class="selectedDifficulty === 0 ? 'selected' : undefined"
            @click="setDifficulty(0)"
          >
            Easy
          </button>
          <button
            :class="selectedDifficulty === 1 ? 'selected' : undefined"
            @click="setDifficulty(1)"
          >
            Medium
          </button>
          <button
            :class="selectedDifficulty === 2 ? 'selected' : undefined"
            @click="setDifficulty(2)"
          >
            Hard
          </button>
        </div>
        <ol>
          <li>
            <strong>Child's Pose (Balasana)</strong> – Start with a grounding
            pose to center your breath and set the intention for the practice.
          </li>
          <li>
            <strong>Child's Pose (Balasana)</strong> – Start with a grounding
            pose to center your breath and set the intention for the practice.
          </li>
          <li>
            <strong>Child's Pose (Balasana)</strong> – Start with a grounding
            pose to center your breath and set the intention for the practice.
          </li>
          <li>
            <strong>Child's Pose (Balasana)</strong> – Start with a grounding
            pose to center your breath and set the intention for the practice.
          </li>
          <li>
            <strong>Child's Pose (Balasana)</strong> – Start with a grounding
            pose to center your breath and set the intention for the practice.
          </li>
        </ol>
      </div>
      <div>
        <h1>Next Lessons</h1>
        <div
          v-for="(lesson, index) in activity.NextLessons"
          :key="index"
          class="next-lesson"
        >
          <img class="logo" src="../../assets/images/calendar.svg" alt="logo" />
          <div>
            <div>
              <span style="font-weight: bold">{{ lesson.Name }}</span>
              <span>{{ lesson.Difficulty }}</span>
            </div>
            <div style="font-size: 0.9em; opacity: 0.7">
              <span>{{ lesson.Date.split("-").reverse().join("/") }}</span>
              <span>{{ lesson.Time }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section style="align-items: center; text-align: center">
      <h1>Teaching {{ activity.Title }}</h1>
      <div class="temp-grid">
        <teacher-card :teacher-prop="teachersList[0]" />
        <teacher-card :teacher-prop="teachersList[1]" />
        <teacher-card :teacher-prop="teachersList[2]" />
      </div>
    </section>-->
    <section style="align-items: center; text-align: center">
      <h2>Similar Activities</h2>
      <div class="temp-grid">
        <activity-card :activity-prop="activitiesList[0]" />
        <activity-card :activity-prop="activitiesList[1]" />
        <activity-card :activity-prop="activitiesList[2]" />
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

  button {
    flex: 1;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &.selected {
      background-color: #e2e2e2;
    }
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
