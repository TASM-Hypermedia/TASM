<script setup lang="ts">
import { motion } from "motion-v"
// cool waves!!!!

// animation linked with the vertical scroll position
const { scrollY } = useScroll()
const scrollSpeed = useVelocity(scrollY)

const waves = Array.from({ length: 7 }, (_, i) => {
  // for each of the 7 wave svgs, dynamically import it and generate a random scroll multiplier for variation
  const component = defineAsyncComponent(
    () => import(`~/assets/waves/Vector-${i}.svg?component`)
  )
  const scrollMultiplier = Math.random() ** 2 // square distribution for more variation

  return {
    id: i,
    component,
    x: useSpring(
      // the horizontal position is bound to the scroll position, with a slowish spring effect
      useTransform(() => scrollY.get() * scrollMultiplier),
      {
        mass: 3,
        stiffness: 200,
        damping: 50,
      }
    ),
    // the vertical position is only a subtle offset based on the scroll speed, to create a hint of depth
    y: useSpring(
      useTransform(() => scrollSpeed.get() * 0.001 * i * scrollMultiplier)
    ),
  }
})

// we have a filler rectangle with the top element to avoid some pink to bleed through the top
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
    right: -300px;
    pointer-events: none;
  }
}
</style>
