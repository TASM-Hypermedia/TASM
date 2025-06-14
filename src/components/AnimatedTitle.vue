<template>
  <div class="relative h-[200vh] bg-black text-white">
    <!-- SVG Title -->
    <svg viewBox="0 0 1200 300" class="sticky top-1/3 w-full h-[300px]">
      <defs>
        <clipPath
          v-for="(letter, index) in letters"
          :id="`clip-${index}`"
          :key="index"
        >
          <rect
            v-motion
            :initial="{ y: 300 }"
            :enter="{ y: revealY(index) }"
            :transition="{ duration: 0.5 }"
            x="0"
            width="120"
            height="300"
          />
        </clipPath>
      </defs>

      <g
        v-for="(path, index) in letterPaths"
        :key="index"
        :clip-path="`url(#clip-${index})`"
        :transform="`translate(${index * 120}, 0)`"
      >
        <path :d="path" fill="white" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { useScroll } from "@vueuse/core"
import { computed } from "vue"

const letters = "HIGHLIGHTS".split("")

// Path semplificati solo per esempio. Dovresti inserire quelli veri convertiti in path SVG.
const letterPaths = [
  "M10 10 H 110 V 290 H 10 Z", // H
  "M10 10 H 110 V 290 H 10 Z", // I
  "M10 10 H 110 V 290 H 10 Z", // G
  "M10 10 H 110 V 290 H 10 Z", // H
  "M10 10 H 110 V 290 H 10 Z", // L
  "M10 10 H 110 V 290 H 10 Z", // I
  "M10 10 H 110 V 290 H 10 Z", // G
  "M10 10 H 110 V 290 H 10 Z", // H
  "M10 10 H 110 V 290 H 10 Z", // T
  "M10 10 H 110 V 290 H 10 Z", // S
]

const { y } = useScroll(window)

const revealY = (index) => {
  return computed(() => {
    const base = y.value * 0.6
    return Math.max(300 - base + index * 80, 0)
  })
}
</script>

<style scoped>
svg path {
  transition: clip-path 0.3s ease;
}
</style>
