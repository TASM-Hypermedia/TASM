<script setup lang="ts">
import { easeOut, motion } from "motion-v"
import type { Price } from "~/types"

const { priceProp } = defineProps<{
  priceProp: Price
}>()

const hover = ref(false)

const handleMouse = (event: MouseEvent) => {
  const rect = priceCardRef.value?.getBoundingClientRect()
  if (!rect) return
  hover.value = true
  x.set((event.clientX - rect.left) / rect.width - 0.5)
  y.set((event.clientY - rect.top) / rect.height - 0.5)
}

const mouseLeave = () => {
  hover.value = false
  x.set(0)
  y.set(0)
}

const priceCardRef = useTemplateRef<HTMLDivElement>("price-card-ref")
const theme = priceProp.darkMode ? "dark-theme" : "light-theme"

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotx = useSpring(useTransform(() => -y.get() * 8))
const roty = useSpring(useTransform(() => x.get() * 8))
</script>

<template>
  <div
    ref="price-card-ref"
    class="price-card-container"
    @mousemove="handleMouse"
    @mouseleave="mouseLeave"
  >
    <motion.div
      :initial="{
        filter: 'blur(32px)',
        opacity: 0.5,
        scale: 0.9,
        y: -20,
      }"
      :animate="{
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        y: 0,
      }"
      class="priceCard"
      :class="theme"
      :style="{
        transformPerspective: 1000,
        rotateX: rotx,
        rotateY: roty,
      }"
      :transition="{
        duration: 0.5,
        ease: easeOut,
      }"
    >
      <div v-if="!priceProp.darkMode" class="mostPopularBadgeContainer">
        <span class="mostPopularBadge">⭐️ Most Popular</span>
      </div>
      <div class="pricingTitle" style="">{{ priceProp.title }}</div>
      <div class="pricingPrice" style="">
        <sup class="pricingSup">€</sup>
        <span class="pricingSpan">{{ priceProp.price }}</span>
        <sub class="pricingSub">/mo</sub>
      </div>
      <div class="pricingItemList">
        <ul>
          <li v-for="item in priceProp.pricingItems" :key="item.item">
            {{ item.item }}
          </li>
        </ul>
      </div>
      <button class="pricingButton">Subscribe</button>
    </motion.div>
  </div>
</template>

<style scoped lang="scss">
.price-card-container {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
}

.mostPopularBadgeContainer {
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.9rem;
}

.priceCard {
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  .mobile-layout & {
    margin-bottom: 32px;
  }
}

.pricingTitle {
  font-size: 25px;
}

.pricingSup {
  font-size: 30px;
  margin-right: 10px;
}

.pricingSpan {
  font-size: 50px;
  font-weight: bold;
}

.pricingSub {
  font-size: 25px;
}

.pricingItemList {
  text-align: left;
  margin: 0 auto;
  margin-bottom: 12px;
  width: 80%;
}

.pricingButton {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: auto;
}

.dark-theme {
  background-color: #020202;
  outline: 1px solid black;
  color: white;

  .pricingButton {
    background-color: #e3e3e3;
    color: black;
  }
}

.light-theme {
  color: black;
  outline: 1px solid black;

  .pricingButton {
    background-color: black;
    color: white;
  }
}
</style>
