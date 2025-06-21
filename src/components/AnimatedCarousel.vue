<script setup lang="ts">
// This file is a bit of a mess, but it's all basicly animations
import { easeOut, motion } from "motion-v"

const props = defineProps<{
  images: {
    URL: string
  }[]
}>()

const animTime = 250 // length in ms of the transition

// lil helper function to make sure to never get out of bounds
const getIdx = (n: number) => {
  while (n < 0) n += props.images.length
  return n % props.images.length
}
const currIdx = ref(0) // this is the index of the central image relative to the array from the props
const x = ref(0) // animation variable, 1 => scrolling to the right, -1 => scrolling to the left

// throttle the functions to make sure we don't destroy the animation
const forwards = throttle(() => {
  x.value = -1
  setTimeout(() => {
    currIdx.value = getIdx(currIdx.value + 1)
    x.value = 0
  }, animTime)
}, animTime + 1) // + 1 to make sure the timeout ended

const backwards = throttle(() => {
  x.value = 1
  setTimeout(() => {
    currIdx.value = getIdx(currIdx.value - 1)
    x.value = 0
  }, animTime)
}, animTime + 1)
</script>

<template>
  <div class="carousel">
    <ClientOnly fallback="Loading images...">
      <v-icon icon="mdi-menu-left" size="large" @click="backwards()"></v-icon>
      <div class="images">
        <motion.img
          v-for="(image, i) in props.images"
          :key="i"
          :src="`/images/${image.URL}`"
          :style="{
            order:
              getIdx(currIdx - 2) !== currIdx - 2 && i > props.images.length - 3
                ? 0
                : getIdx(currIdx + 2) !== currIdx + 2 && i < 2
                  ? 2
                  : 1,
          }"
          :variants="{
            hidden: {
              display: 'none',
              opacity: 0,
              scale: 0,
              width: '0px',
              flex: 0,
            },
            smallL: {
              display: 'flex',
              opacity: 1,
              scale: 0.5,
              flex: 1,
            },
            smallR: {
              display: 'flex',
              opacity: 1,
              scale: 0.5,
              flex: 1,
            },
            large: {
              display: 'flex',
              opacity: 1,
              scale: 1,
              flex: 2,
            },
          }"
          :transition="{
            duration: animTime / 1000,
            ease: easeOut,
          }"
          initial="hidden"
          :animate="
            currIdx === i
              ? 'large'
              : getIdx(currIdx - 1) === i
                ? 'smallL'
                : getIdx(currIdx + 1) === i
                  ? 'smallR'
                  : 'hidden'
          "
        />
      </div>
      <v-icon icon="mdi-menu-right" size="large" @click="forwards()"></v-icon>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  width: 100%;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: "hidden";
  position: relative;
  height: 450px;
  padding: 32px 0;

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      height: 100%;
      border-radius: 16px;
      object-fit: cover;
      box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.3);
    }
  }
}

.mdi {
  cursor: pointer;
  position: absolute;
  background-color: #e2e2e2;
  border-radius: 50%;

  &:nth-of-type(1) {
    margin-left: 0;
    margin-right: auto;
  }

  &:nth-of-type(2) {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
