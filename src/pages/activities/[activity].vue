<script setup lang="ts">
// const route = useRoute()

// const a = route.params.activity
// const title = typeof a === "string" ? a : a.join("")

interface ActivityType {
  title: string
  mainImageURL: string
  description: string
}

const activity: ActivityType = {
  title: "Vinyasa Yoga",
  mainImageURL: "Teacher1.jpg",
  description:
    "Vinyasa Yoga is a dynamic and flowing style of yoga that emphasizes the seamless connection between breath and movement. In a Vinyasa practice, each posture is synchronized with an inhale or exhale, creating a continuous flow from one asana (yoga posture) to the next. This rhythmic movement not only builds strength, flexibility, and endurance but also encourages mindfulness, helping practitioners stay present in the moment. The practice often includes creative sequences, which can range from slow and meditative to fast-paced and intense, providing a holistic workout for both the body and mind. \nVinyasa Yoga is known for its versatility and adaptability, allowing practitioners to tailor the experience to their own level of fitness and personal goals. Whether you're looking for a gentle practice to calm your mind or a vigorous session to challenge your body, Vinyasa offers a balance of flow, power, and relaxation.",
}
</script>
<template>
  <PageWrap
    :img-src="activity.mainImageURL"
    tagline="Our Activities:"
    :title="activity.title"
  >
    <p class="description">
      {{ activity.description }}
    </p>
    <SlideCarousel
      :images="[
        { URL: 'Teacher1.jpg' },
        { URL: 'Teacher1.jpg' },
        { URL: 'Teacher1.jpg' },
      ]"
    />
  </PageWrap>
</template>

<style scoped>
.description {
  text-align: center;
}
</style>
