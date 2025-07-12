<script setup lang="ts">
definePageMeta({
  title: "Pricing",
  description:
    "Explore our pricing plans and find the perfect fit for your yoga journey.",
})

const resFaqs = await useAPI<
  {
    question: string
    answer: string
  }[]
>("/getFaqs")

if (resFaqs.error.value) throw resFaqs.error.value
const faqList = resFaqs.data.value

const resPricing = await useAPI<
  {
    title: string
    subtitle: string
    price: number
    pricingItems: {
      item: string
    }[]
    darkMode: boolean
  }[]
>("/getPricing")

if (resPricing.error.value) throw resPricing.error.value
const pricingList = resPricing.data.value
</script>

<template>
  <PageWrap
    title="Pricing"
    img-src="./banners/pricing-banner.jpg"
    subtitle="Find the perfect plan for you"
  >
    <section class="priceSection">
      <div v-for="(item, index) in pricingList" :key="index">
        <card-price :price-prop="item" />
      </div>
    </section>

    <section class="faqSection">
      <h2 class="title">FAQs</h2>
      <div v-for="(item, index) in faqList" :key="index">
        <card-faq :faq-prop="item" />
      </div>
    </section>
  </PageWrap>
</template>

<style scoped lang="scss">
.priceSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  max-width: 1080px;

  div {
    flex: 1;
    margin: 0 16px;
  }

  .mobile-layout & {
    flex-direction: column;
  }
}

.faqSection {
  width: 60%;
  margin-top: 50px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  .mobile-layout & {
    width: 80%;
  }
}
</style>
