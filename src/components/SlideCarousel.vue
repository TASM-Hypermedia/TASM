<script setup lang="ts">
import { Ease } from "~/composables/useAnimatedValue"

interface ImageDef {
  url: string
  scale: number
  translation: number
  opacity: number
}

const props = defineProps<{
  images: {
    URL: string
  }[]
}>()

const animTime = 500

const _getIndex = (n: number) => {
  while (n < 0) n += props.images.length
  return n % props.images.length
}
const _currentIndex = ref(0)
const x = ref(0)

const _loadedImages: ComputedRef<
  {
    URL: string
  }[]
> = computed((prev) => {
  if (x.value !== 0 && prev) return prev

  const shown = [
    props.images[_getIndex(_currentIndex.value - 1)],
    props.images[_getIndex(_currentIndex.value)],
    props.images[_getIndex(_currentIndex.value + 1)],
  ]

  return shown
})

const imgs: ComputedRef<ComputedRef<ImageDef[]>> = computed((prev) => {
  if (x.value !== 0 && prev) return prev

  return useAnimatedComputed<ImageDef[]>(
    x,
    (v) => [
      {
        url: new URL(
          `../assets/images/${_loadedImages.value[0].URL}`,
          import.meta.url
        ).href,
        scale: maprange(v, -1, 1, 0, 1),
        translation: v * 100,
        opacity: v < 0 ? 1 + v : 1,
      },
      {
        url: new URL(
          `../assets/images/${_loadedImages.value[1].URL}`,
          import.meta.url
        ).href,
        scale: maprange(Math.abs(v), 0, 1, 1, 0.5),
        translation: v * 100,
        opacity: 1,
      },
      {
        url: new URL(
          `../assets/images/${_loadedImages.value[2].URL}`,
          import.meta.url
        ).href,
        scale: maprange(v, -1, 1, 1, 0),
        translation: v * 100,
        opacity: v > 0 ? 1 - v : 1,
      },
    ],
    animTime,
    Ease.bezier
  )
})

function forwards() {
  x.value -= 1
  setTimeout(() => {
    _currentIndex.value -= 1
    x.value = 0
  }, animTime)
}

function backwards() {
  x.value += 1
  setTimeout(() => {
    _currentIndex.value += 1
    x.value = 0
  }, animTime)
}
</script>
<template>
  <ClientOnly fallback="Loading images...">
    <div class="carousel">
      <v-icon icon="mdi-menu-left" size="large" @click="backwards()"></v-icon>
      <template v-for="(image, index) in imgs.value" :key="index">
        <img
          v-if="image !== null"
          :src="image.url"
          :style="{
            opacity: image.opacity,
            transform: `translateX(${image.translation}%) scale(${image.scale})`,
          }"
        />
      </template>
      <v-icon icon="mdi-menu-right" size="large" @click="forwards()"></v-icon>
    </div>
  </ClientOnly>
</template>
<style scoped lang="scss">
.carousel {
  width: 100%;
  margin: 16px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  overflow: "hidden";
  position: relative;
  height: 200px;

  img {
    height: 200px;
    width: 200px;
    border-radius: 16px;
    object-fit: cover;
  }
}

.mdi {
  cursor: pointer;
  margin: auto;
}
</style>
