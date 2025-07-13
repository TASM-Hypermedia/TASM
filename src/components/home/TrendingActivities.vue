<template>
  <div class="component">
    <div class="title">Trending Activities</div>
    <motion.div
      initial="hidden"
      while-in-view="visible"
      :transition="{
        ease: easeInOut,
        staggerChildren: 0.15,
      }"
      class="activities"
    >
      <motion.div
        v-for="(activity, i) in activities"
        :key="i"
        :variants="variants"
        :transition="{
          duration: 0.7,
          ease: easeInOut,
        }"
        :style="{
          scale: activity.scale,
        }"
        class="card"
        @hover-start="activity.target.set(2)"
        @hover-end="activity.target.set(1)"
      >
        <NuxtLink
          :class="i % 2 == 0 ? 'reverse_card' : 'normal_card'"
          :to="`/activities/${activity.prop.url}`"
          style="text-decoration: none; height: 100%; width: 100%"
        >
          <GyroAnim class="card_image_wrapper">
            <NuxtImg
              preload
              format="webp"
              quality="75"
              class="card_image"
              :src="activity.prop.image"
              :alt="activity.prop.title"
            />
          </GyroAnim>

          <div class="title_container">
            <div class="card_title">
              <span>{{ (i + 1).toString().padStart(2, "0") }}</span>
              {{ activity.prop.title }}
            </div>

            <motion.div
              class="right_arrow"
              :style="{ rotate: activity.rotation }"
            >
              <arrow style="width: 100%; height: 100%" />
            </motion.div>
          </div>
        </NuxtLink>
      </motion.div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { easeInOut, motion } from "motion-v"
import type { Activity } from "~/types"
import arrow from "~/assets/images/right-arrow.svg"

const props = defineProps<{
  activitiesProp?: Array<Activity>
}>()

const variants = {
  hidden: {
    opacity: 0.5,
    y: -50,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

const activities = (props.activitiesProp || []).map((activity) => {
  const target = useMotionValue(1)
  const spring = useSpring(target, {
    bounce: 0,
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  })

  return {
    prop: activity,
    target,
    scale: useTransform(spring, [1, 2], [1, 1.02]),
    rotation: useTransform(spring, [1, 2], [-45, 0]),
  }
})
</script>

<style scoped>
.component {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  gap: 0px;
}

.title {
  text-align: center;
  justify-content: center;
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
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 280px;
  height: 375px;
  margin: 16px;
  padding: 18px;
  border-radius: 20px;
  background-color: #bdb2d4;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
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

.card_image_wrapper {
  width: 100%;
  flex: 1;
}

.card_image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  overflow: hidden;
}

.title_container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.card_title {
  flex: 1;
  color: white;
  height: 30px;
  font-size: 1.5rem;
  line-height: 30px;
  text-align: center;
  display: flex;
  position: relative;
  flex-direction: row;
  text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.6);
}

.card_title span {
  color: #fff4;
  z-index: -1;
  left: 0;
  bottom: 0;
  font-family: Italiana;
  position: absolute;
  font-size: 6rem;
  margin-top: -20px;
  line-height: 70px;
  font-weight: bold;
  text-shadow: none;
}

.reverse_card .card_title span {
  top: 0;
  bottom: auto;
}

.title_container .right_arrow {
  padding: 1px;
  width: 30px;
  height: 30px;
  fill: white;
}
</style>
