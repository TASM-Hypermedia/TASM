<script setup lang="ts">

const { data:faqData, error:faqError } = await useAPI<
  [
    {
      Question: string,
      Answer: string
    },
  ]
>("/getFaqs.js", {
  method: "GET",
})

if (faqError.value || !faqData.value) {
  console.error("Error in loading yoga center:", faqError.value)
  throw new Error("Yoga center not found")
}

const faqList = faqData.value
const faqContent: {
  question: string
  answer: string
}[] = []

for (let i = 0; i < faqList.length; i++) {
  faqContent.push({
    question: faqList[i].Question,
    answer: faqList[i].Answer,
  })
}

const { data:pricingData, error:pricingError } = await useAPI<
  [
    {
      PricingId: number
      Title: string
      Subtitle: string
      Price: number
      PricingListItem: Array<{
        Item: string
      }>
    }
  ]
>("/getPricing.js", {
  method: "GET",
})

if (pricingError.value || !pricingData.value) {
  console.error("Error in loading yoga center:", pricingError.value)
  throw new Error("Yoga center not found")
}

const pricingList = pricingData.value
const pricingContent: {
  title: string,
  subtitle: string,
  price: number,
  pricingItems: Array<{ Item: string }>,
  darkMode: boolean,
}[] = []

for (let i = 0; i < pricingList.length; i++) {
  const flag = i % 2 !== 0
  pricingContent.push({
    title: pricingList[i].Title,
    subtitle: pricingList[i].Subtitle,
    price: pricingList[i].Price,
    pricingItems: pricingList[i].PricingListItem,
    darkMode: flag,
  })
}

console.log(pricingList[0].PricingListItem)

</script>

<template>

  <PageWrap
    title="Pricing"
    img-src="./banners/pricing-banner.jpg"
  >

    <section>
      <div v-for="(item, index) in pricingContent" :key="index">
        <price-card :price-prop="item" />
      </div>
    </section>

    <section class="faqSection">
      <h2>FAQs</h2>
      <div v-for="(item, index) in faqContent" :key="index">
        <faq-card :faq-prop="item"/>
      </div>
    </section>
  </PageWrap>
</template>

<style scoped>
.faqSection {
  width: 60%;
  margin-top: 50px;


  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>