<script setup lang="ts">

const res = await useAPI<
  {
    question: string
    answer: string
  }[]
>("/getFaqs")

if (res.error.value) throw res.error.value
const faqList = res.data.value

console.log(faqList)


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

</script>

<template>

  <PageWrap
    title="Pricing"
    img-src="./banners/pricing-banner.jpg"
  >

    <section class="priceSection">
        <div v-for="(item, index) in pricingContent" :key="index">
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

<style scoped>
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