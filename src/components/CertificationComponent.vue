<template>
  <div class="component" style="">
    <div class="title">Our Certifications</div>

    <div class="text">
      Our Yoga Center is an internationally recognized school accredited by the
      most prestigious certifying bodies, including RYT (Registered Yoga
      Teacher) and YACEP (Yoga Alliance Continuing Education Provider)
      certifications. These certifications are recognition of the exceptional
      quality of our teaching and our commitment to continuous professional
      development for our entire team of instructors. We pride ourselves on
      having assembled the finest yoga teachers in the country, ensuring that
      every student receives world-class instruction and guidance on their yoga
      journey.
    </div>

    <div class="certifications">
      <img
        v-for="(Certificate, i) in certificationProp"
        :key="i"
        :src="Certificate.imageURL"
        class="card_image"
        :alt="`Certification ${i + 1}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Certification } from "~/types"

defineProps<{
  certificationProp?: Array<Certification>
}>()
</script>

<style scoped lang="scss">
.component {
  width: 100vw;
  max-width: 1080px;
  margin: 0 auto 48px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
  gap: 32px;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-family: Italiana;
  font-weight: 700;
  word-wrap: break-word;
}

.text {
  width: 100%;
  height: fit-content;
  font-size: 1rem;
  font-family: Roboto;
  font-weight: 300;
  word-wrap: break-word;
  text-align: justify;
}

.certifications {
  width: 100%;
  padding: 8px 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 32px;

  img {
    opacity: 0.8;
    width: 120px;
    height: 120px;
  }
}
</style>
