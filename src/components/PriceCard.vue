<script setup lang="ts">

type Pricing = {
  title: string,
  price: number,
  items: Array<{ text: string }>
};

defineProps<{
  pricing: Pricing,
}>();
</script>

<template>
  <div class="priceCard">
    <div class="pricingTitle" style="">{{pricing.title}}</div>
    <div class="pricingPrice" style="">
      <sup style="margin-right: 5px">€</sup>
      <span class="priceSpan">{{pricing.price}}</span>
      <sub>/mo</sub>
    </div>
    <button class="pricingButton">Prenota</button>
  </div>
</template>

<style scoped>
.priceCard {
  width: 100%;
  margin: 10px;
  padding: 10px;
  color: black;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
}

.pricingTitle {
  font-size: 1.2em;
  font-weight: 500;
  margin: 10px 0;
}

.pricingPrice {
  font-size: 1.5em;
}

.priceSpan {
  font-size: 1.7em;
}

.pricingButton {
  width: 80%;
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
}

</style>