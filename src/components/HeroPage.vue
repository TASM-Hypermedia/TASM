<script setup lang="ts">
import { useScroll } from "@/composables/useScroll"

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

const { y } = useScroll()
const scrollAmount = computed(() => clamp(y.value, 0, 600))
</script>

<template>
  <div class="copertina-page">
    <img
      v-if="props.urlImg !== undefined"
      :src="`/images/${props.urlImg}`"
      :alt="`Background Image - ${title}`"
      class="background-image"
      :style="{ top: scrollAmount / 3 + 'px' }"
    />
    <div class="hero-page" :style="{ marginTop: scrollAmount / 2 + 'px' }">
      <p v-if="tagline">{{ tagline }}</p>
      <h1>{{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
    </div>
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
  padding: 24px;
  border-radius: 32px;
  gap: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.1 linear;
}

.hero-page h1 {
  font-size: 54px;
  line-height: 64px;
}

.hero-page h2 {
  font-size: 24px;
  font-style: italic;
}

.hero-page p {
  font-size: 24px;
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
