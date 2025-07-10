<script setup lang="ts">
import SvgRoadmap from "~/assets/images/homepage/onlyRoadMap.svg"
import SvgArrow from "~/assets/images/homepage/HearArrow.svg"
import SvgBlob from "~/assets/images/homepage/blob-eventH.svg"
import { onMounted } from "vue"
import type { Event } from "~/types"
import { motion } from "motion-v"
import { animate } from "@motionone/dom"
const { highlightedEvents } = defineProps<{
  highlightedEvents: Array<Event>
}>()

let currentAnimation: ReturnType<typeof animate> | null = null

onMounted(() => {
  console.log(window.innerWidth)
  clientWidth.value = window.innerWidth
  clientHeight.value = window.innerHeight

  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
    clientHeight.value = window.innerHeight
  })

  const dot1 = document.getElementById("dot1")
  const dot2 = document.getElementById("dot2")
  const dot3 = document.getElementById("dot3")
  const div = document.querySelector(".sheet-event")

  function animateDot(dot: HTMLElement | null) {
    if (!dot) return

    currentAnimation?.cancel() // cancella l’animazione precedente

    currentAnimation = animate(
      dot,
      { transform: ["scale(1)", "scale(1.2)", "scale(1)"] },
      {
        duration: 1.5,
        repeat: Infinity,
        easing: "ease-in-out",
      }
    )

    // imposta il centro di trasformazione sul centro del cerchio
    dot.style.transformOrigin = "center center"

    //pulseDotSequence()
  }
  // function pulseDotSequence() {
  //   const dots = ["dot1", "dot2", "dot3"]
  //   let i = 0
  //   const interval = setInterval(() => {
  //     const current = document.getElementById(dots[i % dots.length])
  //     if (current) {
  //       animate(
  //         current,
  //         { transform: ["scale(1)", "scale(1.2)", "scale(1)"] },
  //         {
  //           duration: 1.2,
  //           easing: "ease-in-out",
  //         }
  //       )
  //     }
  //     i++
  //     if (i >= dots.length * 2) clearInterval(interval)
  //   }, 800)
  // }
  function showEventWithAnimation(index: number, dot: HTMLElement | null) {
    animateDot(dot)
    showEvent(index)
  }

  dot2?.addEventListener("click", () => {
    showEventWithAnimation(1, dot2)
  })
  dot1?.addEventListener("click", () => {
    showEventWithAnimation(0, dot1)
  })
  dot3?.addEventListener("click", () => {
    showEventWithAnimation(2, dot3)
  })
  dot2?.addEventListener("mouseover", () => {
    showEventWithAnimation(1, dot2)
  })
  dot1?.addEventListener("mouseover", () => {
    showEventWithAnimation(0, dot1)
  })
  dot3?.addEventListener("mouseover", () => {
    showEventWithAnimation(2, dot3)
  })
  dot1?.addEventListener("touchstart", () => console.log("touchstart dot1"))
  dot1?.addEventListener("touchend", () => console.log("touchend dot1"))

  dot2?.addEventListener("touchstart", () => console.log("touchstart dot2"))
  dot2?.addEventListener("touchend", () => console.log("touchend dot2"))

  dot3?.addEventListener("touchstart", () => console.log("touchstart dot3"))
  dot3?.addEventListener("touchend", () => console.log("touchend dot3"))

  div?.addEventListener("mouseleave", () => {
    hideEvent()
  })
  //animateDot(dot1)
})

const clientWidth = ref(0)
const clientHeight = ref(0)
//window.innerWidth
const svgwidth = computed(() => clientWidth.value / 2)
console.log(clientWidth)

const selectedIndex = ref<number | null>(null)
//const ratio = 600 / 750
/*const ratioTop = 1200 / 178

const ratioBottom = 1200 / 229

const topHeight = computed(() => -clientWidth.value / ratioTop)
const bottomHeight = computed(() => -clientWidth.value / ratioBottom)*/

//const svgheight = computed(() => svgwidth.value / ratio)

console.log(svgwidth)

function showEvent(i: number) {
  console.log(highlightedEvents[i])
  selectedIndex.value = i
}
function hideEvent() {
  selectedIndex.value = null //:style="{ height: '100%', width: svgwidth + 'px' }"
  currentAnimation?.cancel()
}
</script>
<template>
  <div class="container" :style="{ height: (clientHeight * 2) / 3 + 'px' }">
    <div class="sheet-event-wrapper">
      <SvgBlob class="svg-background" :style="{ width: clientWidth + 'px' }" />

      <div class="sheet-event">
        <SvgRoadmap
          class="svg-image"
          :style="{
            width: svgwidth,
            height: (clientHeight * 2) / 3 + 'px',

            // backgroundSize: (clientHeight * 2) / 3 + 'px',
          }"
        />
        <!--animate presence con motion.div x fade in e fadeout -->
        <motion.div
          v-if="selectedIndex !== null"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ delay: 0.3, duration: 1 }"
          :style="{
            height: (clientHeight * 2) / 3 + 'px',
            padding: '20px',
          }"
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
          :transition="{ delay: 0.3, duration: 1 }"
        >
          <div
            class="default-event"
            :style="{
              width: svgwidth + 'px',
              height: (clientHeight * 2) / 3 + 'px',
              padding: '20px',
            }"
          >
            <div
              style="
                color: white;
                /* align-self: stretch; */
                text-align: center;
                justify-content: center;
                display: flex;
                flex-direction: column;

                font-size: 80px;
                font-family: Italiana;
                font-weight: 900;
                line-height: 96px;
                word-wrap: break-word;
              "
            >
              Highlited events
            </div>
            <div
              style="
                color: white;
                align-self: stretch;
                text-align: center;
                justify-content: center;
                display: flex;
                flex-direction: column;

                font-size: 50px;
                font-family: Italiana;
                font-weight: 600;
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

  /*background-color: #f0e2f9;*/
}
.default-event {
  color: white;
  height: 100%;
  padding-left: 18px;
  padding-right: 18px;
  /*padding-bottom: 80px;*/
  overflow: hidden;
  flex-direction: column;
  justify-content: center; /* Center children vertically */
  align-items: center;
  gap: 70px;
  display: flex; /* Use flex instead of inline-flex for full height */
}
.svg-background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  pointer-events: none;

  height: fit-content;
}
.sheet-event {
  /*background-color: #f0e2f9;*/
  flex: 1;
  height: 100%;
  right: 0;
  position: relative;

  display: flex;
  justify-content: center;
  /*background-image: url("~/assets/images/homepage/blob-event.svg");*/
}

.svg-image {
  /*background-color: #f0e2f9;*/

  min-width: 450px;
  height: 100%;
  position: relative;
  justify-content: center;
  top: 0;
  /* background-image: url("~/assets/images/homepage/backgroundEventRoadMap.jpg");
  background-size: contain;
  background-clip: content-box; */
  flex: 1;
}
.sheet-event-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
#dot1,
#dot2,
#dot3 {
  cursor: pointer;
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s ease;
}

#dot1:hover,
#dot2:hover,
#dot3:hover {
  transform: scale(1.2);
}
</style>
