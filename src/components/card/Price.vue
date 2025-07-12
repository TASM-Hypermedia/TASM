<script setup lang="ts">
import { easeOut, motion } from "motion-v"
import type { Price } from "~/types"

const { priceProp } = defineProps<{
  priceProp: Price
}>()

const theme = priceProp.darkMode ? "dark-theme" : "light-theme"
</script>

<template>
  <GyroAnim class="price-card-container">
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
      :transition="{
        duration: 0.5,
        ease: easeOut,
      }"
    >
      <div v-if="!priceProp.darkMode" class="mostPopularBadgeContainer title">
        <span class="mostPopularBadge body-text">⭐️ Most Popular</span>
      </div>
      <div class="pricingTitle title">{{ priceProp.title }}</div>
      <div class="pricingPrice title" style="">
        <sup class="pricingSup">€</sup>
        <span class="pricingSpan">{{ priceProp.price }}</span>
        <sub class="pricingSub">/mo</sub>
      </div>
      <div class="pricingItemList body-text">
        <ul>
          <li v-for="item in priceProp.pricingItems" :key="item.item">
            {{ item.item }}
          </li>
        </ul>
      </div>
      <NuxtLink
        to="https://paypal.me/Pedroni28?country.x=IT&locale.x=it_IT"
        class="pricingButton body-text"
        >Subscribe</NuxtLink
      >
    </motion.div>
  </GyroAnim>
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
  box-shadow: 0px 5px 10px rgb(88, 87, 87, 0.5);
  .mobile-layout & {
    margin-bottom: 32px;
  }
}

.pricingTitle {
  font-size: 25px;
}

.pricingSup {
  font-size: 30px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
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
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: auto;
  text-decoration: none;
}

.dark-theme {
  background-color: #9488b0;
  outline: 1px solid #6572a5;
  color: white;

  .pricingTitle,
  .pricingPrice {
    color: white;
  }

  .pricingButton {
    background-color: #efe9ff;
    color: black;
  }
}

.light-theme {
  color: black;
  outline: 1px solid rgba(0, 0, 0, 0.205);

  .pricingButton {
    background-color: #9488b0;
    color: white;
  }
}
</style>
