<template>
  <div class="component" style="">
    <div class="title">Trending Activities</div>

    <div ref="containerRef" class="activities">
      <motion.div
        v-for="(trendingActivity, i) in activitiesProp"
        :key="i"
        :class="i % 2 == 0 ? 'reverse_card' : 'normal_card'"
        :initial="{ x: -150, opacity: 0 }"
        :animate="
          isTotallyVisible ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }
        "
        :transition="{
          type: 'tween',
          duration: 0.6,
          delay: i * 0.05,
          ease: 'linear',
        }"
      >
        <img class="card_image" :src="trendingActivity.image" />
        <div class="card_title">
          {{ "0" + (i + 1).toString() + " " + trendingActivity.title }}
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { motion } from "motion-v"
import type { Activity } from "~/types"

defineProps<{
  activitiesProp?: Array<Activity>
}>()

const isTotallyVisible = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const intersectionParam = ref(0)

onMounted(() => {
  if (!containerRef.value) {
    console.log("Container reference is null")
    return
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      // console.log("Intersection ratio:", entry.intersectionRatio)
      intersectionParam.value = 1 - entry.intersectionRatio

      if (entry.intersectionRatio >= 0.25) {
        isTotallyVisible.value = true
      }
    },
    { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } //Array.from({length: 101}, (_, i) => i / 100)
  )
  observer.observe(containerRef.value)
})
</script>

<style scoped>
div {
  border: 0px solid black;
}

.component {
  width: 100%;
  height: fit-content;
  align-items: center;
  /* position: relative; */
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0px;
  /* border: 0px solid black; */
}

.title {
  text-align: center;
  justify-content: center;
  /* display: flex;  */
  flex-direction: column;
  color: black;
  font-size: 80px;
  font-family: Italiana;
  font-weight: 400;
  line-height: 96px;
  word-wrap: break-word;
}

.activities {
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 40px 1.75%;
  display: flex;
  /* flex-direction: row;  */
  justify-content: space-around;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
  /* border: 0px solid black; */
}

.normal_card {
  width: 23.5%;
  min-width: 260px;
  height: 375px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.reverse_card {
  width: 23.5%;
  min-width: 260px;
  height: 375px;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;
}

.card_image {
  width: 100%;
  height: 85%;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  object-fit: cover;
}

.card_title {
  text-align: center;
  color: black;
  font-size: 24px;
  font-weight: 600;
  font-family: Italiana;
}
</style>
