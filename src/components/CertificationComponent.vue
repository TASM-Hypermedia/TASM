<template>
  <div class="component" style="">
    <div class="title">Our Certifications</div>

    <div class="certifications"> 
        
          <img
            v-for="(Certificate, i) in certificationProp"
            :key="i"         
            :src="Certificate.imageURL"
            class="card_image" 
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

.certifications {
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 3% 1.75% 6% 1.75%; /*top right bottom left*/
  display: flex;
  /* flex-direction: row;  */
  justify-content: space-around;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
  /* border: 0px solid black; */
}


</style>


