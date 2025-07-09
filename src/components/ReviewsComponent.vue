<template>
  <div class="component" style="">
    <div class="title">Customer Reviews</div>

    <div ref="containerRef" class="reviews">
      <motion.div
        v-for="(review, i) in reviewsProp"
        :key="i"
        class="card"
        :while-hover="{ scale: 1.015, backgroundColor: '#debbfb' }"
        :transition="{
          type: 'tween',
          duration: 0.1,
          ease: 'linear',
        }"
      >
        <div class="body">
          {{review.text}}
        </div>
        
        <div class="name">{{ review.person }}</div>

        <div class="rating">
          <img
            v-for="k in review.stars"
            :key="k"
            src="https://www.svgrepo.com/show/513408/star.svg"
            style="height: 25px; width: 25px"
          />
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { motion } from "motion-v"
import type { Review } from "~/types"

  defineProps<{
    reviewsProp?: Array<Review>;
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
    { threshold: 0.25 } //Array.from({length: 101}, (_, i) => i / 100)
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
  padding: 4% 10%;
  /* border: 1px solid black; */
}

.title {
  height: fit-content;
  text-align: center;
  justify-content: center;
  /* display: flex;  */
  flex-direction: column;
  color: black;
  font-size: 40px;
  font-family: Italiana;
  font-weight: 400;
  /* line-height: 96px;  */
  word-wrap: break-word;
}

.reviews {
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 45px 2.5%;
  display: flex;
  /* flex-direction: row;  */
  justify-content: space-around;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
}

.card {
  width: 23.5%;
  min-width: 260px;
  height: fit-content;
  padding: 27.5px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 5px;
  background-color: #e8cbff;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
}

/* .card:hover {
    transform: scale(1.02);
    background-color: #ffdaa9; 
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
} */

.body {
  height: 100%;
  text-align: left;
  color: black;
  font-size: 14px;
  font-family: "Roboto";
}

.image {
  width: 60px;
  height: 60px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  object-fit: cover;
}

.name {
  width: fit-content;
  text-align: center;
  color: black;
  font-size: 22px;
  font-family: "Roboto";
  font-weight: 500;
}

.rating {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1px;
}
</style>
