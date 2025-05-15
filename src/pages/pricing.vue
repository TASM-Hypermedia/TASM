<script setup lang="ts">

const content = {
  title: "Sara Morelli",
  subtitle: "Yoga teacher",
  description: "Yoga teacher specialized in vyniasana and other type of yoga yoyo boy",
  imgUrl: "/images/banners/activities-banner.jpg",
  altDescription: "Theacher Sara Morelli",
  imageOnTheRight: true,
}


const faqsList = [
  {
    question: "How are you?",
    answer: "I'm fine",
  },
  {
    question: "How is the weather today?",
    answer: "It's raining",
  }
];

const pricingsList = [
  {
    title: "Base",
    price: 50,
    darkMode: false,
    pricingItems: [
      {text: "3 courses"},
      {text: "1H meeting with an assigned teacher"}
    ],
  },
  {
    title: "Premium",
    price: 75,
    darkMode: true,
    pricingItems: [
      {text: "6 courses"},
      {text: "3 months coverage with a teacher"}
    ],
  },
  {
    title: "Deluxe",
    price: 100,
    darkMode: false,
    pricingItems: [
      {text: "10 courses"},
      {text: "6 months coverage with a teacher"}
    ],
  }
];

</script>

<template>

  <PageWrap
    title="Pricing"
    img-src="./banners/pricing-banner.jpg"
  >
    <section style="width: 70%; margin: auto">
      <content-card :content-card-prop="content"></content-card>
    </section>

    <section style="width: 100%">
      <card-grid :length="pricingsList.length">
        <template #card="{ index }">
          <price-card :price-prop="pricingsList[index]" />
        </template>
      </card-grid>
    </section>

    <section class="faqSection">
      <h2>FAQs</h2>
      <div v-for="(item, index) in faqsList" :key="index">
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