<script setup lang="ts">
import SvgRoadmap from "~/assets/images/homepage/onlyRoadMap.svg"
import SvgArrow from "~/assets/images/homepage/HearArrow.svg"
import { onMounted, onWatcherCleanup } from "vue"
import type { Event } from "~/types"
import {
  AnimatePresence,
  Motion,
  motion,
  hover,
  press,
  transform,
  circInOut,
  easeInOut,
} from "motion-v"
import { animate } from "motion"

const { highlightedEvents } = defineProps<{
  highlightedEvents: Array<Event>
}>()

const dots = ref<Array<SVGPathElement>>([])
const selectedIndex = ref<number | null>(null)

onMounted(() => {
  Array.from({ length: 3 }).forEach((_, i) => {
    const dot = document.getElementById(`dot${i + 1}`) as SVGPathElement | null
    if (!dot) return

    const hovering = ref(false)
    hover(dot, () => {
      hovering.value = true
      return () => (hovering.value = false)
    })

    press(dot, () => {
      selectedIndex.value = i
    })

    const idleOffset = ref(0)
    const newRandomOffset = () => {
      idleOffset.value = Math.random() / 2 + 0.5
      setTimeout(newRandomOffset, 500 + Math.random() * 2500) // Change every 0.5-3 seconds
    }
    newRandomOffset()

    const offset = computed(() => {
      if (selectedIndex.value === i) return 2
      if (hovering.value) return 1
      return idleOffset.value
    })

    watch(offset, (newOffset) => {
      const zPosition = transform(newOffset, [0, 2], [-20, 70])
      const shadow = transform(
        newOffset,
        [0, 2],
        ["0 0px 0px rgba(0, 0, 0, 1)", "0 8px 12px rgba(122, 65, 175, 0.3)"]
      )

      const animation = animate(
        dot,
        {
          transform: `perspective(2000px) translate3d(0, 0, ${zPosition}px)`,
          filter: `drop-shadow(${shadow})`,
        },
        { type: "spring", stiffness: 100 }
      )
      onWatcherCleanup(() => animation.stop())
    })

    dots.value.push(dot)
  })

  const div = document.querySelector(".sheet-event")

  div?.addEventListener("mouseleave", () => {
    // selectedIndex.value = null
  })
})

watch(selectedIndex, (newIndex) => {
  if (newIndex === null) return
  const dot = dots.value[newIndex]
  const animation = animate(
    dot,
    {
      stroke: ["#D9D0E8", "#fff"],
      strokeWidth: [3, 4],
    },
    {
      type: "tween",
      duration: 2,
      ease: circInOut,
      repeatType: "mirror",
      repeat: Infinity,
    }
  )
  onWatcherCleanup(() => {
    animation.stop()
    animate(dot, {
      stroke: "#fff",
      strokeWidth: 1.5,
    })
  })
})
</script>
<template>
  <div class="sheet-event">
    <SvgRoadmap class="svg-image" />
    <AnimatePresence mode="wait">
      <Motion
        v-if="selectedIndex !== null"
        :key="`event-high-${selectedIndex}`"
        as-child
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.3, ease: easeInOut }"
      >
        <HomeHighlightedEventDetailed
          :event-prop="highlightedEvents[selectedIndex]"
        />
      </Motion>
      <motion.div
        v-else
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.3, ease: easeInOut }"
        class="default-event"
      >
        <div class="de-text">
          <div class="title" style="">Highlighted Events</div>
          <div class="body-text">
            Click on the dots to discover more about our favourite upcoming
            events
          </div>
        </div>
        <div class="arrow">
          <SvgArrow preserveAspectRatio="none" />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<style scoped lang="scss">
.default-event {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex: 1;
  color: white;
  padding: 32px;
  overflow: hidden;
  text-shadow: 0 4px 12px #0004;

  .arrow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .de-text {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;

    .title {
      color: black;
      font-size: 5rem;
      font-weight: 900;
    }

    .body-text {
      color: black;
      font-size: 2rem;
      font-weight: 600;
    }
  }
}

.sheet-event {
  max-width: 1080px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.svg-image {
  position: relative;
  justify-content: center;
  top: 0;
  flex: 1;
  padding: 32px 64px;
  transform-origin: center;
  perspective-origin: center;
  perspective: 2000px;
}
</style>
