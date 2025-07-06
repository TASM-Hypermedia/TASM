<script setup lang="ts">

import type { Price } from '~/types';

const {priceProp} = defineProps<{
  priceProp: Price;
}>();

const theme = priceProp.darkMode ? 'dark-theme' : 'light-theme'

</script>

<template>
  <div class="priceCard" :class="theme">
    <div class="pricingTitle" style="">{{priceProp.title}}</div>
    <div class="pricingPrice" style="">
      <sup class="pricingSup">€</sup>
      <span class="pricingSpan">{{priceProp.price}}</span>
      <sub class="pricingSub">/mo</sub>
    </div>
    <div class="pricingItemList">
      <ul>
        <li v-for="item in priceProp.pricingItems" :key="item.item">
          {{item.item}}
        </li>
      </ul>
    </div>
    <button class="pricingButton">Prenota</button>
  </div>
</template>

<style scoped lang="scss">
.priceCard {
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  margin: auto;
  width: 100%;
  text-align: center;

  .mobile-layout & {
    margin-bottom: 100px;
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
  margin: auto;
  width: 80%;
}

.pricingButton {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}

.dark-theme {
  background-color: #020202;
  color: white;

  .pricingButton {
    background-color: #e3e3e3;
    color: black;
  }
}

.light-theme {
  color: black;

  .pricingButton {
    background-color: black;
    color: white;
  }
}

</style>