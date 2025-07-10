<script setup lang="ts">
import { motion } from "motion-v"
const { scrollY } = useScroll()
const scrollSpeed = useVelocity(scrollY)

const waves = Array.from({ length: 7 }, (_, i) => {
  const component = defineAsyncComponent(
    () => import(`../assets/waves/Vector-${i}.svg?component`)
  )
  const scrollMultiplier = Math.random() + 0.1

  return {
    id: i,
    component,
    x: useSpring(useTransform(() => scrollY.get() * scrollMultiplier)),
    y: useSpring(
      useTransform(() => scrollSpeed.get() * 0.003 * i * scrollMultiplier)
    ),
  }
})

const fillerHeight = useTransform(() =>
  clamp(waves[waves.length - 1].y.get() + 5, 5, 500)
)
</script>

<template>
  <div class="wave-wrap">
    <motion.div
      v-for="wave in waves"
      :key="wave.id"
      :style="{ x: wave.x, y: wave.y }"
      class="wave"
    >
      <component :is="wave.component" />
    </motion.div>

    <motion.div
      class="filler"
      :style="{
        height: fillerHeight,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.wave-wrap {
  z-index: -1;
  position: absolute;
  top: 70%;
  width: 100vw;
  height: 500px;
  overflow: hidden;
  pointer-events: none;

  .filler {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    pointer-events: none;
  }

  .wave {
    position: absolute;
    top: 0;
    right: -100px;
    pointer-events: none;
  }
}
</style>
