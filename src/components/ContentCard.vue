<script setup lang="ts">
import type { ContentCard } from "~/types"
import { cubicBezier, motion, type Variant } from "motion-v"

const { contentCardProp } = defineProps<{
  contentCardProp: ContentCard
}>()

const modalImage = ref<{ URL: string; alt?: string } | null>(null)
const openModal = (image: { URL: string; alt?: string }) => {
  modalImage.value = image
}
const closeModal = () => {
  modalImage.value = null
}

const hover = ref(false)

const handleMouse = (event: MouseEvent) => {
  const rect = imageRef.value?.getBoundingClientRect()
  if (!rect) return
  hover.value = true
  x.set((event.clientX - rect.left) / rect.width - 0.5)
  y.set((event.clientY - rect.top) / rect.height - 0.5)
}

const mouseLeave = () => {
  hover.value = false
  x.set(0)
  y.set(0)
}

const imageRef = useTemplateRef<HTMLDivElement>("image-ref")

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotx = useSpring(useTransform(() => -y.get() * 5))
const roty = useSpring(useTransform(() => x.get() * 5))

const variants: Record<string, Variant> = {
  hidden: {
    opacity: 0.7,
    filter: "blur(6px)",
    y: -12,
  },
  shown: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.22, 0.61, 0.36, 1),
    },
  },
}

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalImage.value !== null) {
      e.preventDefault()
      e.stopPropagation()
      closeModal()
    }
  })
})
</script>

<template>
  <div
    class="contentCard"
    :class="{ reverse: !contentCardProp.imageOnTheRight }"
  >
    <motion.div
      initial="hidden"
      while-in-view="shown"
      :transition="{
        staggerChildren: 0.1,
      }"
      class="row"
      :class="{ invertElementsOnMobile: !contentCardProp.imageOnTheRight }"
    >
      <motion.div class="writtenContent" :variants="variants">
        <p class="contentTitle">{{ contentCardProp.title }}</p>
        <p v-if="contentCardProp.subtitle" class="contentSubtitle">
          {{ contentCardProp.subtitle }}
        </p>
        <p>{{ contentCardProp.description }}</p>
      </motion.div>
      <div
        ref="image-ref"
        :style="{ display: 'flex', flex: 1 }"
        @mousemove="handleMouse"
        @mouseleave="mouseLeave"
      >
        <motion.img
          :variants="variants"
          :class="{ imageOnTheLeft: !contentCardProp.imageOnTheRight }"
          :src="contentCardProp.imgUrl"
          :alt="contentCardProp.altDescription"
          :style="{
            transformPerspective: 1000,
            rotateX: rotx,
            rotateY: roty,
          }"
          @click="
            contentCardProp.imgUrl &&
            openModal({
              URL: contentCardProp.imgUrl,
              alt: contentCardProp.altDescription,
            })
          "
        />
      </div>
    </motion.div>
    <AnimatePresence>
      <motion.div
        v-if="modalImage !== null"
        class="modal"
        :exit="{ opacity: 0 }"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.2, ease: 'easeInOut' }"
        @click="closeModal"
      >
        <div class="modal-content">
          <img :src="modalImage.URL" :alt="modalImage.alt ?? 'Modal Image'" />
          <span>{{ modalImage.alt ?? "Fullscreen Image" }}</span>
        </div>
        <button class="close-button" @click="closeModal">
          <v-icon icon="mdi-close" size="large" />
        </button>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<style scoped lang="scss">
.contentCard {
  display: flex;
  justify-content: stretch;
  width: 100%;
  padding: 16px 64px;
  margin: 32px;
}

.row {
  border-top: 1px solid #e0e0e0;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;

  .reverse & {
    flex-direction: row-reverse;
  }

  div {
    flex: 1;
    padding: 10px;
  }

  .mobile-layout & {
    flex-direction: column;
    &.reverse {
      flex-direction: column-reverse;
    }
  }
}

.writtenContent {
  margin: 0;
  text-align: right;
  .reverse & {
    text-align: left;
  }
  .mobile-layout & {
    text-align: center;
  }
}

.contentTitle {
  font-size: 2.2rem;
  font-weight: bold;
}

.contentSubtitle {
  font-size: 1.2rem;
  font-weight: 550;
}

.imageOnTheLeft {
  img {
    float: right;
  }
}

img {
  max-height: 300px;
  max-width: 500px;
  object-fit: cover;
  border-radius: 8px;
  align-self: stretch;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

// i now regret not using tailwind
.modal {
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
</style>
