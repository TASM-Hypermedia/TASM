<script setup lang="ts">
// This file is a bit of a mess, but it's all basicly animations

// Interface describing the animated object for each image
interface ImageDef {
  id: number
  url: string
  scale: number
  opacity: number
  width: number
}

const props = defineProps<{
  images: {
    URL: string
  }[]

  // with occupied by the images alone
  width: number
}>()

const animTime = 250 // length in ms of the transition

// lil helper function to make sure to never get out of bounds
const getIdx = (n: number) => {
  while (n < 0) n += props.images.length
  return n % props.images.length
}
const currIdx = ref(0) // this is the index of the central image relative to the array from the props
const x = ref(0) // animation variable, 1 => scrolling to the right, -1 => scrolling to the left

// the array of the 5 image urls (3 displayed + previous and next)
const loadedImages: ComputedRef<string[]> = computed((prev) => {
  if (x.value !== 0 && prev) return prev // only update when the animation ends

  const shown = [
    props.images[getIdx(currIdx.value - 2)],
    props.images[getIdx(currIdx.value - 1)],
    props.images[getIdx(currIdx.value)],
    props.images[getIdx(currIdx.value + 1)],
    props.images[getIdx(currIdx.value + 2)],
  ]

  // map it to the correct URL
  return shown.map(
    (i) => `/images/${i.URL}` // new URL(`../assets/images/${i.URL}`, import.meta.url).href
  )
})

// array with objects describing the animated values for an image
const imgs: ComputedRef<ComputedRef<ImageDef[]>> = computed((prev) => {
  if (x.value !== 0 && prev) return prev // only update when the animation ends

  return useAnimatedComputed<ImageDef[]>(
    x,
    (v) => [
      // calculating a bunch of values for the cool animations
      {
        id: currIdx.value - 2,
        url: loadedImages.value[0],
        scale: v > 0 ? maprange(v, 0, 1, 0, 0.5) : 0,
        opacity: v > 0 ? v : 0,
        width: v > 0 ? maprange(v, 0, 1, 0, props.width / 4) : 0,
      },
      {
        id: currIdx.value - 1,
        url: loadedImages.value[1],
        scale: maprange(v, -1, 1, 0, 1),
        opacity: v < 0 ? 1 + v : 1,
        width: maprange(v, -1, 1, 0, props.width / 2),
      },
      {
        id: currIdx.value,
        url: loadedImages.value[2],
        scale: maprange(Math.abs(v), 0, 1, 1, 0.5),
        opacity: 1,
        width: maprange(Math.abs(v), 0, 1, props.width / 2, props.width / 4),
      },
      {
        id: currIdx.value + 1,
        url: loadedImages.value[3],
        scale: maprange(v, -1, 1, 1, 0),
        opacity: v > 0 ? 1 - v : 1,
        width: maprange(v, -1, 1, props.width / 2, 0),
      },
      {
        id: currIdx.value + 2,
        url: loadedImages.value[4],
        scale: v < 0 ? maprange(-v, 0, 1, 0, 0.5) : 0,
        opacity: v < 0 ? -v : 0,
        width: v < 0 ? maprange(-v, 0, 1, 0, props.width / 4) : 0,
      },
    ],
    animTime,
    Ease.bezier
  )
})

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
      <template v-for="image in imgs.value" :key="image.id">
        <img
          v-if="image !== null"
          :src="image.url"
          :style="{
            display: image.opacity > 0 ? 'block' : 'none', // improves render performance
            width: `${image.width}px`,
            opacity: image.opacity,
            transform: `scale(${image.scale})`,
          }"
        />
      </template>
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

  img {
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.3);
  }
}

.mdi {
  cursor: pointer;
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
