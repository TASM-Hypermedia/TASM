<script setup lang="ts">
import { Ease } from "~/composables/useAnimatedValue"

interface ImageDef {
  url: string
}

const props = defineProps<{
  images: {
    URL: string
  }[]
}>()

const images: ComputedRef<ImageDef[]> = computed(() => {
  return props.images.map((image) => ({
    url: new URL(`../assets/images/${image.URL}`, import.meta.url).href,
  }))
})

const _currentIndex = ref(0)

const x = ref(0)
const anim = useAnimatedValue(x, 500, Ease.bezier)

onMounted(() => {
  x.value = 100
})

const _loadedImages: [ImageDef, ImageDef, ImageDef, ImageDef | null] = [
  images.value[0],
  images.value[0],
  images.value[0],
  images.value[0],
]
</script>
<template>
  <ClientOnly fallback="Loading images...">
    <div class="carousel">
      <v-icon icon="mdi-menu-left" size="large"></v-icon>
      <img
        :src="_loadedImages[0].url"
        alt=""
        :style="{
          transform: 'translateX(' + anim.toFixed(2) + '%)',
        }"
      />
      <img :src="_loadedImages[1].url" alt="" />
      <img :src="_loadedImages[2].url" alt="" />
      <v-icon icon="mdi-menu-right" size="large"></v-icon>
    </div>
  </ClientOnly>
</template>
<style scoped lang="scss">
.carousel {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: "hidden";
  position: relative;
  height: 200px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 16px;
    object-fit: cover;
  }
}
</style>
