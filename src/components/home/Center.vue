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
  <nuxt-link to="/yogacenter" class="textImg">
    <div class="container">
      <HomeWaves />
      <div
        style="
          display: flex;
          width: 100%;
          max-width: 900px;
          z-index: 1;
          gap: 64px;
          align-items: center;
        "
      >
        <SvgTizia class="svg-tizia" />

        <div
          style="
            background: none;
            /* overflow: hidden; */
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 18px;
            display: inline-flex;
            flex: 1;
          "
        >
          <div
            class="title"
            style="align-self: stretch; color: black; font-weight: bold"
          >
            YOGA CENTER
          </div>
          <div
            class="title"
            style="
              align-self: stretch;
              text-align: right;
              color: black;
              font-weight: bolder;
            "
          >
            {{ homePageElement.title }}
          </div>
          <div
            class="body-text"
            style="align-self: stretch; height: 216px; color: black"
          >
            {{ homePageElement.description }}

            <i style="color: gray">click to discover more about our center</i>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>
.container {
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 50px;
  margin-bottom: 280px;
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
.textImg {
  color: white;
  text-decoration: none;
}
.svg-image {
  width: 100vw;
  top: 50%;

  /* height: auto; */
  left: 0;
  /* top: 300px; */
  position: absolute;
}
</style>
