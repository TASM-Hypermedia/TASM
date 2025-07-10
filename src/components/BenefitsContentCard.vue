<script setup lang="ts">
import SvgBlob from "~/assets/images/homepage/Blob-Fill.svg"
import SvgBlobOutline from "~/assets/images/homepage/Blob-outline.svg"
import { motion } from "motion-v"

const { benefitsProp } = defineProps<{
  benefitsProp: {
    title: string
    description: string
    image: string
    position: number
  }
}>()

const variations = {
  hidden: {
    scale: 1,
    opacity: 0,
    x: -150,
  },
  shown: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  hover: {
    scale: 1.015,
  },
}
</script>

<template>
  <motion.div
    while-hover="hover"
    initial="hidden"
    animate="shown"
    :variants="variations"
    style="
      flex: 1;
      padding: 30px;
      /* background: #bde0fe; */
      overflow: hidden;
      border-radius: 100px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      display: inline-flex;
      position: relative;
    "
  >
    <svg-blob class="svg-blob" />
    <svg-blob-outline class="svg-blob-outline" />
    <div
      style="
        align-self: stretch;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 50px;
        display: flex;
      "
    >
      <div style="width: 196.12px; height: 117.99px">
        <img
          class="teacher_image"
          style="
            width: 100%;
            height: 100%;
            object-fit: fill;

            /*border-radius: 7px;*/
          "
          :src="'/images/icons/benefits/' + benefitsProp.image"
          :alt="benefitsProp.title"
        />
      </div>
    </div>
    <div class="cardDescription">
      {{ benefitsProp.description }}
    </div>
  </motion.div>
</template>

<style scoped>
.cardTitle {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  /*font-size: 48px;
  line-height: 57.6px;*/
  font-family: Inter;
  font-weight: 700;

  word-wrap: break-word;
}

.cardDescription {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  /*font-size: 32px;
  line-height: 38.4px;*/
  font-family: Inter;
  font-weight: 400;
  height: 100%;
  word-wrap: break-word;
}
.benefit-card {
  position: relative;
}
.svg-blob {
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  z-index: -1;
  transform: translate(-50%, -50%);
}
.svg-blob-outline {
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  z-index: -1;
  transform: translate(-40%, -40%);
  opacity: 0.5;
}
div {
  border: 1px solid black;
}
</style>
