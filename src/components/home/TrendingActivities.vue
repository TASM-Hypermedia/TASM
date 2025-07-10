<template>
  <motion.div
    initial="hidden"
    while-in-view="visible"
    :transition="{
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.1,
    }"
    class="component"
  >
    <div class="title">Trending Activities</div>
    <div ref="containerRef" class="activities">
      <motion.div
        v-for="(trendingActivity, i) in activitiesProp"
        :key="i"
        :while-hover="{
          scale: 1.015,
          transition: { duration: 0.15, ease: easeInOut },
        }"
        :variants="variants"
        :transition="{
          duration: 0.8,
          ease: easeOut,
        }"
        class="card"
        @mouseenter="setHoveredCard(i)"
        @focus="setHoveredCard(i)"
        @mouseleave="setHoveredCard(null)"
        @blur="setHoveredCard(null)"
      >
        <NuxtLink
          :class="i % 2 == 0 ? 'reverse_card' : 'normal_card'"
          :to="`/activities/${trendingActivity.url}`"
          style="text-decoration: none; height: 100%; width: 100%"
        >
          <img
            class="card_image"
            :src="trendingActivity.image"
            :alt="trendingActivity.title"
          />

          <div class="title_container">
            <div class="card_title">
              {{ "0" + (i + 1).toString() + " " + trendingActivity.title }}
            </div>

            <!-- This should became a motion div -->
            <motion.div
              id="motioncard"
              class="right_arrow"
              style="width: fit-content; height: 100%; overflow: hidden"
              :animate="{ rotate: hoveredCard === i ? 0 : -45 }"
              :transition="{ duration: 0.2, ease: 'easeInOut' }"
            >
              <arrow style="width: 100%; height: 100%; rotate: 0deg" />
            </motion.div>
          </div>
        </NuxtLink>
      </motion.div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { easeInOut, easeOut, motion } from "motion-v"
import type { Activity } from "~/types"
import arrow from "~/assets/images/right-arrow.svg"

const hoveredCard = ref<number | null>(null)
const setHoveredCard = (index: number | null) => {
  hoveredCard.value = index
}

defineProps<{
  activitiesProp?: Array<Activity>
}>()

const variants = {
  hidden: {
    opacity: 0,
    y: -50,
    filter: `blur(32px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: `blur(0px)`,
  },
}
</script>

<style scoped>
div {
  border: 0px solid black;
}

.component {
  width: 100%;
  height: fit-content;
  align-items: center;
  padding: 8% 0px;
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
  padding: 3% 1.75% 6% 1.75%; /*top right bottom left*/
  display: flex;
  /* flex-direction: row;  */
  justify-content: space-around;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
  /* border: 0px solid black; */
}

.card {
  width: 23.5%;
  min-width: 260px;
  height: 375px;
  padding: 20px;
  border-radius: 20px;
  background-color: rgb(183, 152, 184);
}

.normal_card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.reverse_card {
  width: 100%;
  height: 100%;
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

.title_container {
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}

.card_title {
  height: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: Italiana;
}
</style>
