<template>
  <div class="parallax">
    <motion.div
      class="scroller"
      :initial="{ x: '-100%' }"
      :animate="{ x: '0%' }"
      :transition="{
        repeat: Infinity,
        ease: 'linear',
        duration: duration,
      }"
    >
      <span v-for="i in 6" :key="i">{{ txt }} </span>
    </motion.div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
import { motion } from "motion-v"

const props = defineProps({
  txt: {
    type: String,
    default: "",
  },
  baseVelocity: {
    type: Number,
    default: 50, // maggiore è, più veloce scorre
  },
})

// durata approssimativa: più alta la velocità, più breve l’animazione
const duration = 100 / Math.abs(props.baseVelocity)
</script>

<style scoped>
.parallax {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: rgb(43, 131, 226);
}

.scroller {
  display: inline-block;
  white-space: nowrap;
  will-change: transform;
  font-size: 2rem;
}
</style>
