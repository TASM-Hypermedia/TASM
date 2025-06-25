<script setup lang="ts">
import HeroPage from "./HeroPage.vue"
import { motion } from "motion-v"

const viewport = useViewport()
const layout = computed(() =>
  viewport.isLessThan("tablet") ? "mobile" : "default"
)

const { y } = useCustomScroll()
const seen = computed(() => y.value > 600)

defineProps<{
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
  imgSrc?: string
}>()
</script>

<template>
  <main>
    <motion.div
      v-if="layout === 'mobile'"
      class="info-header-mobile"
      :variants="{
        visible: { opacity: 1, y: '0%' },
        hidden: { opacity: 0, y: '-10%' },
      }"
      initial="hidden"
      :animate="seen ? 'visible' : 'hidden'"
    >
      <span v-if="tagline" class="tagline">{{ tagline }}</span>
      <h2 class="title">{{ title }}</h2>
    </motion.div>
    <HeroPage
      :title="title"
      :url-img="imgSrc"
      :subtitle="subtitle"
      :tagline="tagline"
    />
    <article :ref="ref">
      <slot />
    </article>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  gap: 32px;
  margin-bottom: 32px;
  border: 0px solid black;
}

.info-header-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  margin: auto;
  width: 65vw;
  height: 75px;
  user-select: none;
  font-size: 1em;

  span {
    opacity: 0.6;
  }
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  height: 100%;
  border: 0px solid black;
}
</style>
