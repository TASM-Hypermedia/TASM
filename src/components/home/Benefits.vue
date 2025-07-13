<script setup lang="ts">
import SvgWaveT from "~/assets/images/homepage/wave-top-fill3.svg"
import SvgWaveEmptyT from "~/assets/images/homepage/wave-top-outline.svg"
import SvgWaveB from "~/assets/images/homepage/wave-bottom-fill.svg"
import SvgWaveEmptyB from "~/assets/images/homepage/wave-bottom-outline.svg"

import { onMounted } from "vue"
import { motion } from "motion-v"

const benefits = [
  {
    title: "Connection",
    description:
      "Reconnect with yourself, others, and the world around you —on and off the mat",
    image: "Connessione",
    position: 0,
  },
  {
    title: "Clarity",
    description:
      "Find mental focus and inner stillness through breath and mindful movement",
    image: "Lampadina",
    position: 1,
  },
  {
    title: "Strength",
    description: "Build physical resilience and emotional balance",
    image: "Forza",
    position: 2,
  },
  {
    title: "Freedom",
    description: "Release tension in the body and let go of limiting thoughts",
    image: "Liberta",
    position: 3,
  },
]

const clientWidth = ref(0)
onMounted(() => {
  clientWidth.value = window.innerWidth
  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
  })
})

const ratioTop = 5000 / 1000
const ratioBottom = 5000 / 286

const topHeight = computed(() => -clientWidth.value / ratioTop)
const bottomHeight = computed(() => -clientWidth.value / ratioBottom)
</script>

<template>
  <div class="container-benefits">
    <div class="sheet"></div>

    <SvgWaveT
      class="svg-imageTop"
      :style="{ top: `${topHeight}px`, width: '100vw' }"
    />
    <SvgWaveEmptyT
      class="svg-imageTop"
      :style="{ top: `${topHeight - 40}px`, width: '100vw' }"
    />
    <SvgWaveEmptyT
      class="svg-imageTop"
      :style="{ top: `${topHeight - 100}px`, width: '100vw' }"
    />

    <SvgWaveB
      class="svg-imageTop"
      :style="{ bottom: `${topHeight}px`, width: '100vw' }"
    />
    <SvgWaveEmptyB
      class="svg-imageTop"
      :style="{ bottom: `${bottomHeight - 40}px`, width: '100vw' }"
    />
    <SvgWaveEmptyB
      class="svg-imageTop"
      :style="{ bottom: `${bottomHeight - 100}px`, width: '100vw' }"
    />

    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 1;
        align-items: center;
        padding: 50px;
        position: relative;
      "
    >
      <div style="display: flex; font-size: 20px" class="title">
        <HomeAnimatedTitle title="Benefits" />
      </div>

      <motion.div
        class="benefits-cards-wrapper"
        initial="hidden"
        animate="shown"
        :transition="{
          duration: 0.2,
          staggerChildren: 0.2,
        }"
      >
        <HomeBenefitsContentCard
          v-for="i in benefits.length || 0"
          :key="i"
          style="flex: 1"
          :benefits-prop="benefits[i - 1]"
        />
      </motion.div>
    </div>
  </div>
</template>

<style scoped>
.container-benefits {
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 150px;
  margin-top: 150px;
}

.svg-imageBottom {
  width: 100vw;
  left: 0;
  position: absolute;
  pointer-events: none;
}
.svg-imageTop {
  width: 100vw;
  left: 0;
  position: absolute;
  pointer-events: none;
}
.sheet {
  width: 100vw;
  bottom: 0;
  top: -5px;
  left: 0;
  bottom: -5px;
  position: absolute;
  background-color: #f0e2f9;
}
.benefits-cards-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;
}
</style>
