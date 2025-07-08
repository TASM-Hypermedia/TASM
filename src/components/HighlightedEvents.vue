<script setup lang="ts">
import SvgRoadmap from "~/assets/images/homepage/onlyRoadMap.svg"
import SvgArrow from "~/assets/images/homepage/HearArrow.svg"
import { onMounted } from "vue"
import type { Event } from "~/types"
import { motion } from "motion-v"
const { highlightedEvents } = defineProps<{
  highlightedEvents: Array<Event>
}>()

onMounted(() => {
  console.log(window.innerWidth)
  clientWidth.value = window.innerWidth

  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
  })

  const dot1 = document.getElementById("dot1")
  const dot2 = document.getElementById("dot2")
  const dot3 = document.getElementById("dot3")

  dot2?.addEventListener("click", () => {
    showEvent(1)
  })
  dot1?.addEventListener("click", () => {
    showEvent(0)
  })
  dot3?.addEventListener("click", () => {
    showEvent(2)
  })
  dot1?.addEventListener("touchstart", () => console.log("touchstart dot1"))
  dot1?.addEventListener("touchend", () => console.log("touchend dot1"))

  dot2?.addEventListener("touchstart", () => console.log("touchstart dot2"))
  dot2?.addEventListener("touchend", () => console.log("touchend dot2"))

  dot3?.addEventListener("touchstart", () => console.log("touchstart dot3"))
  dot3?.addEventListener("touchend", () => console.log("touchend dot3"))
  ;[dot1, dot2, dot3].filter(Boolean).forEach((dot) => {
    dot!.addEventListener("mouseleave", () => {
      hideEvent()
    })
  })
})

const clientWidth = ref(0)
//window.innerWidth

console.log(clientWidth)

const selectedIndex = ref<number | null>(null)
const ratio = 600 / 750
/*const ratioTop = 1200 / 178

const ratioBottom = 1200 / 229

const topHeight = computed(() => -clientWidth.value / ratioTop)
const bottomHeight = computed(() => -clientWidth.value / ratioBottom)*/
const svgwidth = computed(() => clientWidth.value / 2)
const svgheight = computed(() => svgwidth.value / ratio)

console.log(svgwidth)

function showEvent(i: number) {
  console.log(highlightedEvents[i])
  selectedIndex.value = i
}
function hideEvent() {
  //selectedIndex.value = null
}
</script>
<template>
  <div class="container">
    <div class="sheet-event-wrapper">
      <SvgRoadmap
        class="svg-image"
        :style="{ width: svgwidth, height: svgheight }"
      />
      <div class="sheet-event">
        <!--animate presence con motion.div x fade in e fadeout -->
        <motion.div
          v-if="selectedIndex !== null"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 1 }"
        >
          <HighlightedEventDetailed
            :event-prop="highlightedEvents[selectedIndex]"
          />
        </motion.div>
        <motion.div
          v-else
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ delay: 0.7, duration: 1 }"
        >
          <div
            style="
              width: 100%;
              height: 100%;
              padding-left: 18px;
              padding-right: 18px;
              padding-top: 80px;
              padding-bottom: 80px;
              background: #f0e2f9;
              overflow: hidden;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              gap: 70px;
              display: inline-flex;
            "
          >
            <div
              style="
                align-self: stretch;
                text-align: center;
                justify-content: center;
                display: flex;
                flex-direction: column;
                color: black;
                font-size: 80px;
                font-family: Italiana;
                font-weight: 400;
                line-height: 96px;
                word-wrap: break-word;
              "
            >
              Highlited events
            </div>
            <div
              style="
                align-self: stretch;
                text-align: center;
                justify-content: center;
                display: flex;
                flex-direction: column;
                color: black;
                font-size: 50px;
                font-family: Italiana;
                font-weight: 400;
                line-height: 60px;
                word-wrap: break-word;
              "
            >
              Click to explore our favorite events
            </div>
            <div style="width: 292px; height: 109px"><SvgArrow /></div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;

  background-color: #f0e2f9;
}
.sheet-event {
  background-color: #f0e2f9;
  flex: 1;
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
}

.svg-image {
  background-color: #f0e2f9;
  max-width: 750px;
  min-width: 450px;
  position: relative;
  justify-content: center;
  top: 0;
  background-image: url("~/assets/images/homepage/backgroundEventRoadMap.jpg");
  background-size: cover;
  /*background-clip: content-box;*/
  flex: 1;
}
.sheet-event-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
