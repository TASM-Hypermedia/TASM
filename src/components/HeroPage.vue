<script setup lang="ts">
import { motion, useScroll } from "motion-v"

const props = defineProps<{
  /**
   * Hero page title
   */
  title: string
  /**
   * @optional Hero page subtitle, below the title
   */
  subtitle?: string
  /**
   * @optional Hero page tagline, above the title
   */
  tagline?: string
  /**
   * @optional URL for the hero image (Takes the image name from the `assets/images` folder)
   */
  urlImg?: string
}>()

const { scrollY } = useScroll()
const y = useTransform(() => scrollY.get() / 3)
const hero = useTransform(() => clamp(scrollY.get() / 2, 0, 100))
const marginTop = useMotionTemplate`${hero}px`
</script>

<template>
  <div class="copertina-page">
    <motion.img
      v-if="props.urlImg !== undefined"
      :src="`/images/${props.urlImg}`"
      :alt="`Background Image - ${title}`"
      class="background-image"
      :style="{ y }"
    />
    <motion.div class="hero-page" :style="{ marginTop }">
      <p v-if="tagline" class="body-text">{{ tagline }}</p>
      <h1 class="title">{{ title }}</h1>
      <h2 v-if="subtitle" class="body-text">{{ subtitle }}</h2>
    </motion.div>
  </div>
</template>

<style scoped>
.hero-page {
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: 700;
  max-width: 1080px;
  padding: 48px 64px;
  border-radius: 16px;
  gap: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.1 linear;
}

.hero-page h1 {
  font-size: 5rem;
  line-height: 64px;
}

.hero-page h2 {
  font-size: 24px;
  line-height: 22px;
  margin-top: 8px;
  font-style: italic;
}

.hero-page p {
  font-size: 24px;
  line-height: 16px;
  font-weight: 400;
  opacity: 0.6;
  align-self: flex-start;
}

.copertina-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 60vh;
  height: 100%;
  padding: 32px;
  flex: 1;
  width: 100vw;
  overflow: hidden;
  padding-top: 112px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  transition: all 0.1 linear;
}
</style>
