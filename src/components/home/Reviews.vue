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
        <div class="body body-text">
          {{ review.text }}
        </div>

        <div class="name body-text">{{ review.person }}</div>

        <div class="rating" :aria-label="`Rating: ${review.stars} out of 5`">
          <star
            v-for="k in review.stars"
            :key="`full-${k}`"
            style="height: 25px; width: 25px"
            fill="black"
          />
          <star
            v-for="k in 5 - review.stars"
            :key="`empty-${k}`"
            style="height: 25px; width: 25px; opacity: 0.3"
            fill="none"
          />
        </div>
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v"
import type { Review } from "~/types"
import star from "~/assets/images/homepage/star.svg"

defineProps<{
  reviewsProp?: Array<Review>
}>()
</script>

<style scoped>
.component {
  width: 100vw;
  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 32px;
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

  font-weight: 400;
  /* line-height: 96px;  */
  word-wrap: break-word;
}

.reviews {
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  margin: 0 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 24px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 240px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 10px;
  background-color: #f0e2f9;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
}

.body {
  height: 100%;
  text-align: left;
  color: black;
  font-size: 14px;
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
  font-family: Italiana;
  font-weight: 600;
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
