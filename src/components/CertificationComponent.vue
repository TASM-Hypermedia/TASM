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
// import { ref, onMounted } from "vue"
// import { motion } from "motion-v"
//   import rightArrow from "@/assets/images/right-arrow.svg"

defineProps<{
  certificationProp?: Array<Certification>
}>()

// const isTotallyVisible = ref(false)
// const containerRef = ref<HTMLElement | null>(null)
// const intersectionParam = ref(0)

// onMounted(() => {
//   if (!containerRef.value) {
//     console.log("Container reference is null")
//     return
//   }
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       // console.log("Intersection ratio:", entry.intersectionRatio)
//       intersectionParam.value = 1 - entry.intersectionRatio

//       if (entry.intersectionRatio >= 0.25) {
//         isTotallyVisible.value = true
//       }
//     },
//     { threshold: 0.7 } //Array.from({length: 101}, (_, i) => i / 100)
//   )
//   observer.observe(containerRef.value)
// })
</script>

<style scoped>
img,
div {
  border: 1px solid black;
}

.component {
  width: 100%;
  height: fit-content;
  align-items: center;
  padding: 8% 0px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0px;
  /* border: 0px solid black; */
}

.title {
  text-align: center;
  justify-content: center;
  /* display: flex;  */
  flex-direction: column;
  color: black;
  font-size: 40px;
  font-family: Italiana;
  font-weight: 400;
  line-height: 50px;
  word-wrap: break-word;
}

.text {
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 3%;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 300;
  word-wrap: break-word;
  text-align: justify;
}

.certifications {
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 2% 1.75% 6% 1.75%; /*top right bottom left*/
  display: flex;
  /* flex-direction: row;  */
  justify-content: space-around;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
  /* border: 0px solid black; */
}
</style>
