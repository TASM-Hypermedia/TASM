<script setup lang="ts">
import { easeOut, motion } from "motion-v"

const hover = ref(false)
const handleMouse = (event: MouseEvent) => {
  const rect = priceCardRef.value?.getBoundingClientRect()
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

const priceCardRef = useTemplateRef<HTMLDivElement>("gyro-container-ref")

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotx = useSpring(useTransform(() => -y.get() * 8))
const roty = useSpring(useTransform(() => x.get() * 8))
</script>

<template>
  <div
    ref="gyro-container-ref"
    class="gyro-container"
    @mousemove="handleMouse"
    @mouseleave="mouseLeave"
    @blur="mouseLeave"
  >
    <motion.div
      :initial="{
        filter: 'blur(32px)',
        opacity: 0.5,
        scale: 0.9,
        y: -20,
      }"
      :animate="{
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        y: 0,
      }"
      class="gyro-element"
      :style="{
        transformPerspective: 1000,
        rotateX: rotx,
        rotateY: roty,
      }"
      :transition="{ duration: 0.5, ease: easeOut }"
    >
      <slot />
    </motion.div>
  </div>
</template>

<style scoped lang="scss">
.gyro-element {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
</style>
