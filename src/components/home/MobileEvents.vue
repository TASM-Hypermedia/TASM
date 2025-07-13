<script setup lang="ts">
import type { Event } from "~/types"
import { AnimatePresence, Motion, motion, easeInOut } from "motion-v"

const { highlightedEvents } = defineProps<{
  highlightedEvents: Array<Event>
}>()
const selectedIndex = ref<number | null>(null)

// update the index, and scroll the highlighted events into view
const handleClick = (index: number) => {
  selectedIndex.value = index
  document.getElementById("highlighted-events")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
</script>
<template>
  <div class="sheet-event">
    <nav class="nav">
      <ul class="tabs-container">
        <motion.li
          v-for="(item, i) in highlightedEvents"
          :key="`event-tab-${i}`"
          class="tab body-text"
          :initial="false"
          @click="handleClick(i)"
        >
          {{ item.title }}
          <!-- small underline that follows the selected tab, to highlight the selected item -->
          <motion.div
            v-if="selectedIndex === i"
            id="underline"
            class="underline"
            layout-id="underline"
          />
        </motion.li>
      </ul>
    </nav>
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
        <div class="title" style="">Highlighted Events</div>
        <div class="body-text">
          Click on the tabs to discover more about our favourite upcoming events
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<style scoped lang="scss">
.nav {
  background: rgba(96, 82, 167, 0.3294117647);
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  justify-content: center;
}

.sheet-event {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tabs-container {
  display: flex;
  list-style: none;
  width: 100%;
  padding: 0 16px;
  gap: 16px;
}

.tab {
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px 15px;
  color: white;
  text-align: center;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  user-select: none;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 2px;
  background: white;
}

.default-event {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 32px;
  gap: 20px;
  color: white;
  text-shadow: 0 4px 12px #0004;

  .title {
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
  }
  .body-text {
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>
