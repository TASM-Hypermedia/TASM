<script setup lang="ts">
import HeroPage from "./HeroPage.vue"

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
    <HeroPage
      :title="title"
      :url-img="imgSrc"
      :subtitle="subtitle"
      :tagline="tagline"
    />
    <article>
      <slot />
    </article>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 32px;
  margin-bottom: 32px;
  border : 0px solid black;
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  height: 100%;
  border : 0px solid black;

}
</style>
