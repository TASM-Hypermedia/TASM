<script setup lang="ts">
// const route = useRoute()

// const a = route.params.activity
// const title = typeof a === "string" ? a : a.join("")

interface ActivityType {
  title: string
  mainImageURL: string
  description: string
  nextLessons?: {
    date: string
    time: string
    name: string
    difficulty: string
  }[]
}

const activity: ActivityType = {
  title: "Vinyasa Yoga",
  mainImageURL: "Teacher1.jpg",
  description:
    "Vinyasa Yoga is a dynamic and flowing style of yoga that emphasizes the seamless connection between breath and movement. In a Vinyasa practice, each posture is synchronized with an inhale or exhale, creating a continuous flow from one asana (yoga posture) to the next. This rhythmic movement not only builds strength, flexibility, and endurance but also encourages mindfulness, helping practitioners stay present in the moment. The practice often includes creative sequences, which can range from slow and meditative to fast-paced and intense, providing a holistic workout for both the body and mind. \nVinyasa Yoga is known for its versatility and adaptability, allowing practitioners to tailor the experience to their own level of fitness and personal goals. Whether you're looking for a gentle practice to calm your mind or a vigorous session to challenge your body, Vinyasa offers a balance of flow, power, and relaxation.",
}

const selectedDifficulty = ref(0)
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
    <SlideCarousel
      :width="750"
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
        <div class="next-lesson"></div>
      </div>
    </section>
  </PageWrap>
</template>

<style scoped>
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

.pair {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: stretch;
  gap: 16px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

li::marker {
  font-weight: bold;
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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &.selected {
      background-color: #e2e2e2;
    }
  }
}
</style>
