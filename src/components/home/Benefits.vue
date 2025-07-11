<script setup lang="ts">
import SvgWaveT from "~/assets/images/homepage/wave-top-fill.svg"
import SvgWaveEmptyT from "~/assets/images/homepage/wave-top-outline.svg"
import SvgWaveB from "~/assets/images/homepage/wave-bottom-fill.svg"
import SvgWaveEmptyB from "~/assets/images/homepage/wave-bottom-outline.svg"

import { onMounted } from "vue"
import { motion } from "motion-v"

const benefits = [
  {
    title: "CONNECTION",
    description:
      "Reconnect with yourself, others, and the world around you —on and off the mat",
    image: "Connessione.svg",
    position: 0,
  },
  {
    title: "CLARITY",
    description:
      "Find mental focus and inner stillness through breath and mindful movement",
    image: "Lampadina.svg",
    position: 1,
  },
  {
    title: "STRENGTH",
    description: "Build physical resilience and emotional balance",
    image: "Forza.svg",
    position: 2,
  },
  {
    title: "FREEDOM",
    description: "Release tension in the body and let go of limiting thoughts",
    image: "Liberta.svg",
    position: 3,
  },
]
onMounted(() => {
  console.log(window.innerWidth)
  clientWidth.value = window.innerWidth

  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
  })
})

const clientWidth = ref(0)
//window.innerWidth

console.log(clientWidth)

const ratioTop = 5000 / 288

const ratioBottom = 5000 / 288

const topHeight = computed(() => -clientWidth.value / ratioTop)
const bottomHeight = computed(() => -clientWidth.value / ratioBottom)
console.log(topHeight, bottomHeight)
</script>

<template>
  <div class="container-benefits">
    <div class="sheet"></div>
    <!-- <SvgBottom
      class="svg-imageBottom"
      :style="{ bottom: bottomHeight + 'px', width: '100vw' }"
    />
    <SvgTop
      class="svg-imageTop"
      :style="{ top: topHeight + 'px', width: '100vw' }"
    /> -->

    <SvgWaveT
      class="svg-imageTop"
      :style="{ top: +topHeight, width: '100vw' }"
    /><SvgWaveEmptyT
      class="svg-imageTop"
      :style="{ top: topHeight * 4 + 'px', width: '100vw' }"
    /><SvgWaveEmptyT
      class="svg-imageTop"
      :style="{
        top: topHeight * 4.35 + 'px',
        width: '100vw',
      }"
    />

    <SvgWaveB
      class="svg-imageTop"
      :style="{ bottom: +topHeight * 3.5, width: '100vw' }"
    /><SvgWaveEmptyB
      class="svg-imageTop"
      :style="{ bottom: topHeight * 1.5 + 'px', width: '100vw' }"
    /><SvgWaveEmptyB
      class="svg-imageTop"
      :style="{
        bottom: topHeight * 2.35 + 'px',
        width: '100vw',
      }"
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
        <HomeAnimatedTitle title="BENEFITS" />
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
  margin-bottom: 300px;
  margin-top: 250px;
}

.svg-imageBottom {
  width: 100vw;
  /*height: auto;*/
  left: 0;
  /*bottom: 0;*/
  position: absolute;
}
.svg-imageTop {
  width: 100vw;
  /*height: auto;*/
  left: 0;
  /*top: 0px;*/
  position: absolute;
}
.sheet {
  width: 100vw;
  bottom: 0;
  top: -20px;
  left: 0;
  bottom: -10px;
  /* top: -120px; */
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
