<script setup lang="ts">
import SvgTizia from "~/assets/images/homepage/Yogacenter-image.svg"

const { homePageElement } = defineProps<{
  homePageElement: {
    imgUrl: string
    altDescription: string
    title: string
    description: string
  }
}>()
</script>

<template>
  <div class="container">
    <LazyHomeWaves />
    <div class="wrapper">
      <SvgTizia class="svg-tizia" />
      <div class="not-the-image">
        <div
          class="title"
          style="
            align-self: stretch;
            color: black;
            font-weight: bold;
            font-size: 4rem;
          "
        >
          {{ homePageElement.title }}
        </div>
        <div
          class="title"
          style="
            opacity: 0.8;
            align-self: stretch;
            font-style: italic;
            color: black;
            font-weight: bolder;
          "
        >
          Yoga Center
        </div>
        <div class="body-text" style="flex: 1; font-size: 1.2rem">
          {{ homePageElement.description }}
        </div>
        <NuxtLink class="link-button" to="/yogacenter">
          Explore our Center
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- </nuxt-link> -->
</template>

<style scoped lang="scss">
.container {
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 280px; // to account for the waves
}

.wrapper {
  display: flex;
  width: 100%;
  max-width: 800px;
  z-index: 1;
  gap: 64px;
  align-items: stretch;
  padding: 16px;

  .mobile-layout & {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .not-the-image {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;

    .mobile-layout & {
      align-items: center;
      text-align: center;
    }
  }
}

.sheetImg {
  width: 50%;
  height: 100%;
  background-color: rgba(92, 91, 91, 0.388);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.svg-image {
  width: 100vw;
  top: 50%;
  left: 0;
  position: absolute;
}

.link-button {
  color: black;
  background-color: rgb(183, 152, 184);
  margin: 0;
  margin-bottom: 12px;
  font-size: 1.2rem;
  border-radius: 8px;
  padding: 12px 36px;
  text-decoration: none;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
}
</style>
