<script setup lang="ts">
import SvgImage from "~/assets/images/homepage/Sfondo-yogacenter-homepage.svg"
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
      <div class="sheet"></div>
      <SvgImage class="svg-image" />

      <div
        style="
          display: flex;
          width: 100%;
          max-width: 1080px;
          z-index: 1;
          gap: 64px;
          align-items: center;
        "
      >
        <SvgTizia class="svg-tizia" />

        <div
          style="
            width: 100%;
            height: 100%;
            background: none;
            overflow: hidden;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 18px;
            display: inline-flex;
            flex: 1.5;
          "
        >
          <div
            style="
              align-self: stretch;
              color: black;
              font-size: 50px;
              font-family: Inter;
              font-weight: 400;
              word-wrap: break-word;
            "
          >
            YOGA CENTER
          </div>
          <div
            style="
              align-self: stretch;
              text-align: right;
              color: black;
              font-size: 60px;
              font-family: Inter;
              font-weight: 700;
              word-wrap: break-word;
            "
          >
            {{ homePageElement.title }}
          </div>
          <div
            style="
              align-self: stretch;
              height: 216px;
              color: black;
              font-size: 30px;
              font-family: Inter;
              font-weight: 400;
              word-wrap: break-word;
            "
          >
            {{ homePageElement.description }}
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 300px;
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
  height: auto;
  left: 0;
  top: 300px;
  position: absolute;
}
.sheet {
  width: 100vw;
  height: 300px;
  left: 0;
  top: 140px;
  position: absolute;
  background-color: #d9cfe7;
}
.svg-tizia {
  width: 100%;
  height: auto;
  flex: 1;
}
</style>
