<script setup lang="ts">
import SvgBlob from "~/assets/images/homepage/blob-eventH.svg"
import type { Event } from "~/types"

const viewport = useViewport()

const { highlightedEvents } = defineProps<{
  highlightedEvents: Array<Event>
}>()
</script>
<template>
  <div id="highlighted-events">
    <SvgBlob class="svg-background" preserveAspectRatio="none" />
    <HomeDesktopEvents
      v-if="viewport.isGreaterOrEquals('tablet')"
      :highlighted-events="highlightedEvents"
    />
    <HomeMobileEvents v-else :highlighted-events="highlightedEvents" />
  </div>
</template>

<style scoped lang="scss">
#highlighted-events {
  width: 100%;
  min-height: calc(2 * 100vh / 3);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
