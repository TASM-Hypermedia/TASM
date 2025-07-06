<script setup lang="ts">
definePageMeta({
  title: "Pricing",
  description: "Explore our pricing plans and find the perfect fit for your yoga journey.",
})

const resFaqs = await useAPI<
  {
    question: string
    answer: string
  }[]
>("/getFaqs")

if (resFaqs.error.value) throw resFaqs.error.value
const faqList = resFaqs.data.value

//console.log(faqList)

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

console.log(pricingList![0].pricingItems)

</script>

<template>

  <PageWrap
    title="Pricing"
    img-src="./banners/pricing-banner.jpg"
  >

    <section class="priceSection">
        <div v-for="(item, index) in pricingList" :key="index">
          <price-card class="priceCard" :price-prop="item" />
        </div>
    </section>

    <section class="faqSection">
      <h2>FAQs</h2>
      <div v-for="(item, index) in faqList" :key="index">
        <faq-card :faq-prop="item"/>
      </div>
    </section>
  </PageWrap>
</template>

<style scoped lang="scss">
.priceSection {
  display: flex;
  flex-direction: row;
  max-width: 1080px;

  div {
    width: 90%;

    .priceCard {
      .mobile-layout & {
        margin-bottom: 10px;
      }
    }

    .mobile-layout & {
      margin: auto;
    }
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
  }

  .mobile-layout & {
    width: 80%;
  }
}
</style>