<script setup lang="ts">
// This file is a bit of a mess, but it's all basicly animations
import { motion } from "motion-v"

const props = defineProps<{
  images: {
    URL: string
    alt?: string
  }[]
}>()

const startingX = ref<number | null>(null) // this is the starting X position of the carousel

// the drag value for the carousel, with respect to the viewport width (-1 to 1)
const drag = useMotionValue(0)
const dragSpeed = useVelocity(drag)

// this is the index of the central image relative
const currIdx = useMotionValue(0)

// spring that will animate the index, offset by the drag value
const spring = useSpring(
  useTransform(() => currIdx.get() - drag.get()),
  {
    damping: 20,
    stiffness: 150,
    mass: 1,
  }
)

// closure that will return an offset spring based on the image index
const useRelativeSpring = (n: number) => {
  return useTransform(() => {
    const d = n - (spring.get() % props.images.length) // get the distance from the current index
    // it doesn't matter that the values are wrapped around overshooting the
    // opposite side, that just means that the images won't be displayed anyway
    if (d < -2) return props.images.length + d // wrap around negative indices
    if (d > 2) return d - props.images.length // wrap around positive indices
    return d
  })
}

const animImages = props.images.map((image, i) => {
  const relativeSpring = useRelativeSpring(i)
  return {
    image,
    order: useTransform(() => {
      const id = relativeSpring.get()
      return clamp(Math.round(id) + 2, 0, 4)
    }),
    display: useTransform(() => {
      const id = relativeSpring.get()
      if (id <= -2 || id >= 2) return "none"
      return "flex"
    }),
    opacity: useTransform(relativeSpring, [-2, -1, 0, 1, 2], [0, 1, 1, 1, 0], {
      clamp: true,
    }),
    scale: useTransform(
      relativeSpring,
      [-2, -1, 0, 1, 2],
      [0, 0.5, 1, 0.5, 0],
      { clamp: true }
    ),
    flex: useTransform(relativeSpring, [-2, -1, 0, 1, 2], [0, 1, 2, 1, 0], {
      clamp: true,
    }),
  }
})

const dragStart = (e: PointerEvent) => {
  startingX.value = e.clientX
}
const dragEnd = () => {
  startingX.value = null
  // if either the position or the speed of the drag is above a threshold,
  // we will change the current index of the carousel
  const s = drag.get()
  const v = dragSpeed.get()
  if (s > 0.5 || v > 0.5) {
    backwards()
  } else if (s < -0.5 || v < -0.5) {
    forwards()
  }
  // reset the drag value and speed to snap the carousel back to the center
  // the smoothness of the snap is controlled by the spring
  drag.set(0)
  dragSpeed.set(0)
}
const setDrag = (delta: number) => {
  // set the drag value based on the delta of the pointer movement
  drag.set((2 * delta) / document.body.clientWidth)
}

const forwards = () => {
  currIdx.set(currIdx.get() + 1)
}
const backwards = () => {
  currIdx.set(currIdx.get() - 1)
}
</script>

<template>
  <div class="carousel">
    <ClientOnly fallback="Loading images...">
      <div
        class="images-container"
        @pointerdown="dragStart"
        @pointermove="
          (e) => {
            if (startingX !== null) {
              const deltaX = e.clientX - startingX
              setDrag(deltaX)
            }
          }
        "
        @pointerup="dragEnd"
        @pointerleave="dragEnd"
        @pointercancel="dragEnd"
      >
        <div class="images">
          <motion.img
            v-for="(animImage, i) in animImages"
            :key="i"
            :src="`/images/${animImage.image.URL}`"
            :alt="animImage.image.alt ?? `Carousel Image ${i + 1}`"
            :style="{
              order: animImage.order,
              display: animImage.display,
              opacity: animImage.opacity,
              scale: animImage.scale,
              flex: animImage.flex,
            }"
          />
        </div>
      </div>
      <button class="scroll-button" @click="backwards()">
        <v-icon icon="mdi-menu-left" size="large"></v-icon>
      </button>
      <button class="scroll-button" @click="forwards()">
        <v-icon icon="mdi-menu-right" size="large"></v-icon>
      </button>
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
  overflow: hidden;
  position: relative;
  max-width: 100vw;
  box-sizing: border-box;
  gap: 16px;
  padding: 16px 0;
  user-select: none;
  touch-action: pan-y;

  .images-container {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    touch-action: pan-y;

    .images {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
      min-width: 600px;
      height: 400px;
      padding: 32px 0;
      user-select: none;
      touch-action: pan-y;

      .mobile-layout & {
        height: 300px;
      }

      img {
        display: flex;
        height: 100%;
        width: 0px;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.3);
        user-select: none;
        touch-action: pan-y;
      }
    }
  }
}

.scroll-button {
  cursor: pointer;
  background-color: #e2e2e2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  &:nth-of-type(1) {
    left: 16px;
    margin-left: 0;
    margin-right: auto;
  }

  &:nth-of-type(2) {
    right: 16px;
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
