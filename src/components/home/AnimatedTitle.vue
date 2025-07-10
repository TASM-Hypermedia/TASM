<script setup lang="ts">
import { computed } from "vue"
import { motion } from "motion-v"

const props = defineProps<{ title: string }>()
const letters = computed(() => props.title.split(""))

const { y } = useCustomScroll()
const seen = computed(() => y.value > 200)
</script>

<template>
  <motion.div
    initial="hidden"
    :animate="seen ? 'visible' : 'hidden'"
    :transition="{
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0.5,
    }"
  >
    <motion.span
      v-for="(letter, index) in letters"
      :key="index"
      :variants="{
        hidden: { y: -200 },
        visible: {
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: 0.1,
          },
        },
      }"
    >
      {{ letter }}
    </motion.span>
  </motion.div>
</template>

<style scoped lang="scss">
div {
  font-size: 5em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
  }
}
</style>
