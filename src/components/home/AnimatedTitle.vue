<script setup lang="ts">
import { computed } from "vue"
import { motion } from "motion-v"

const props = defineProps<{ title: string }>()
// Split the title into individual letters for animation
const letters = computed(() => props.title.split(""))
</script>

<template>
  <motion.div
    initial="hidden"
    while-in-view="visible"
    class="title"
    :transition="{ staggerChildren: 0.05 }"
  >
    <motion.span
      v-for="(letter, index) in letters"
      :key="index"
      :variants="{
        hidden: {
          x: -30 + index * 8,
          y: -20,
          opacity: 0.6,
          filter: 'blur(4px)',
        },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
        },
      }"
      :transition="{
        duration: 0.4,
        ease: 'easeOut',
      }"
    >
      {{ letter }}
    </motion.span>
  </motion.div>
</template>

<style scoped lang="scss">
div {
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
  }
}
</style>
