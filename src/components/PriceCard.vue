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
    <div class="pricingPrice" style="">{{pricing.price}}</div>
  </div>
</template>

<style scoped>

</style>