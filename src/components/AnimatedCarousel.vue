<script setup lang="ts">
// This file is a bit of a mess, but it's all basicly animations
import { motion } from "motion-v"

const props = defineProps<{
  images: {
    URL: string
    alt?: string
  }[]
}>()

const modalImage = ref<{ URL: string; alt?: string } | null>(null)

const openModal = (image: { URL: string; alt?: string }) => {
  modalImage.value = image
}
const closeModal = () => {
  modalImage.value = null
}

// 👇️ Motion stuff
const startingX = ref<number | null>(null) // this is the starting X position of the carousel

// the drag value for the carousel, with respect to the viewport width (-1 to 1)
const drag = useMotionValue(0)
const dragSpeed = useVelocity(drag)

// this is the index of the central image relative
const currIdx = useMotionValue(0)
const relativeIdx = useTransform(currIdx, (v) => {
  while (v < 0) v += props.images.length
  return v % props.images.length
})

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
    const d = (n - (spring.get() % props.images.length)) % props.images.length
    // it doesn't matter that the values are wrapped around overshooting the
    // opposite side, that just means that the images won't be displayed anyway
    if (d < -2) return d + props.images.length // wrap around negative indices
    if (d > 2) return d - props.images.length // wrap around positive indices
    return d
  })
}

// array of objects with all the properties needed for the animation
const animImages = props.images.map((image, i) => {
  const relativeSpring = useRelativeSpring(i)

  const scale = useTransform(
    relativeSpring,
    [-2, -1, 0, 1, 2],
    [0, 0.6, 1, 0.6, 0],
    { clamp: true }
  )
  const rotation = useTransform(
    relativeSpring,
    [-2, -1, 0, 1, 2],
    [-80, -30, 0, 30, 80]
  )

  const transform = useMotionTemplate`perspective(20cm) rotateY(${rotation}deg) scale(${scale})`

  const sspread = useTransform(relativeSpring, [-2, 0, 2], [6, 14, 6])
  const sxoffset = useTransform(relativeSpring, [-2, 0, 2], [16, 0, -16])
  const syoffset = useTransform(relativeSpring, [-2, 0, 2], [0, 6, 0])
  const shadow = useMotionTemplate`${sxoffset}px ${syoffset}px ${sspread}px 1px #0005`

  const position = useTransform(relativeSpring, [-2, 2], [20, 80])

  return {
    image, // the image object itself from the props, with URL and alt
    // adjusts the order in the flex container, since we don't actually move the img tags
    order: useTransform(() => {
      const id = relativeSpring.get()
      return clamp(Math.round(id) + 2, 0, 4)
    }),
    // removes the images that are too far away from the center
    display: useTransform(() => {
      const id = relativeSpring.get()
      if (id <= -2 || id >= 2) return "none"
      return "flex"
    }),
    // carousel rotation effect
    transform,
    // shadow effect
    shadow,
    // for the parallax effect
    position: useMotionTemplate`${position}% 50%`,
    // for transitioning in and out of the carousel
    opacity: useTransform(relativeSpring, [-2, -1, 0, 1, 2], [0, 1, 1, 1, 0], {
      clamp: true,
    }),
    // for the width the image occupies in the carousel
    flex: useTransform(relativeSpring, [-2, -1, 0, 1, 2], [0, 1, 2, 1, 0], {
      clamp: true,
    }),
    // for the dots below the carousel
    dots: {
      scale: useTransform(relativeSpring, [-1, 0, 1], [0.8, 1, 0.8], {
        clamp: true,
      }),
      opacity: useTransform(relativeSpring, [-1, 0, 1], [0.4, 1, 0.4], {
        clamp: true,
      }),
    },
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

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      backwards()
    } else if (e.key === "ArrowRight") {
      forwards()
    } else if (e.key === "Escape" && modalImage.value !== null) {
      e.preventDefault()
      e.stopPropagation()
      closeModal()
    }
  })
})
</script>

<template>
  <!-- eslint-disable vuejs-accessibility/no-static-element-interactions -->
  <!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
  <div class="carousel">
    <ClientOnly fallback="Loading images...">
      <div
        class="images-container"
        @pointerdown="dragStart"
        @pointermove="
          (e: PointerEvent) => {
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
              objectPosition: animImage.position,
              transform: animImage.transform,
              order: animImage.order,
              boxShadow: animImage.shadow,
              display: animImage.display,
              opacity: animImage.opacity,
              flex: animImage.flex,
            }"
            @click="
              () => {
                if (relativeIdx.get() === i) {
                  openModal(animImage.image)
                } else {
                  // we have to jump through hoops to make the carousel not spin like a maniac
                  // when clicking on an image that is the last or first in the array
                  // not the cleanest, but it works
                  let d = i - relativeIdx.get()
                  if (d < -2) d += props.images.length
                  if (d > 2) d -= props.images.length
                  currIdx.set(currIdx.get() + d)
                }
              }
            "
          />
        </div>
        <div class="dots">
          <div
            v-for="(animImage, i) in animImages"
            :key="i"
            class="dot-box"
            @click="
              () => {
                if (relativeIdx.get() !== i) {
                  // here i don't mind having the carousel spin like a maniac, it's cooler that way
                  currIdx.set(currIdx.get() + i - relativeIdx.get())
                }
              }
            "
          >
            <motion.div
              class="dot"
              :style="{
                scale: animImage.dots.scale,
                opacity: animImage.dots.opacity,
              }"
            />
          </div>
        </div>
      </div>
      <button
        class="scroll-button"
        aria-label="Scroll Backwards"
        @click="backwards()"
      >
        <Icon name="material-symbols:arrow-circle-left-rounded" />
      </button>
      <button
        class="scroll-button"
        aria-label="Scroll Forwards"
        @click="forwards()"
      >
        <Icon name="material-symbols:arrow-circle-right-rounded" />
      </button>
      <AnimatePresence>
        <motion.div
          v-if="modalImage !== null"
          class="carousel-modal"
          :exit="{ opacity: 0 }"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.2, ease: 'easeInOut' }"
          @click="closeModal"
        >
          <div class="modal-content">
            <img
              :src="`/images/${modalImage.URL}`"
              :alt="modalImage.alt ?? 'Modal Image'"
            />
            <span>{{ modalImage.alt ?? "Fullscreen Image" }}</span>
          </div>
          <button
            class="close-button"
            aria-label="Close Modal"
            @click="closeModal"
          >
            <Icon name="material-symbols:cancel-rounded" />
          </button>
        </motion.div>
      </AnimatePresence>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
// i now regret not using tailwind
.carousel-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;

  .close-button {
    position: absolute;
    top: 32px;
    right: 32px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;

    span {
      width: 32px;
      height: 32px;
    }
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    span {
      color: #fff;
      font-size: 1rem;
      font-style: italic;
      text-align: center;
    }

    img {
      max-width: 90vw;
      max-height: 90vh;
      border-radius: 16px;
      box-shadow: 0 4px 16px 2px rgba(0, 0, 0, 0.3);
    }
  }
}

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    touch-action: pan-y;

    .dots {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      .dot-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8px;
        height: 8px;
        cursor: pointer;

        .dot {
          width: 8px;
          height: 8px;
          background-color: #000;
          border-radius: 50%;
        }
      }
    }

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
        user-select: none;
        touch-action: pan-y;
        cursor: pointer;
      }
    }
  }
}

.scroll-button {
  cursor: pointer;
  background-color: #0009;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;

  span {
    width: 30px;
    height: 30px;
    color: white;
  }

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
