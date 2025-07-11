<script setup lang="ts">
import { motion } from "motion-v"
import type { Faq } from "~/types"

const { faqProp } = defineProps<{
  faqProp: Faq
}>()

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <motion.div class="faqContainer">
    <button type="button" class="faqQuestion title" @click="toggle">
      {{ faqProp.question }}
      <img
        src="/images/arrow-icon.png"
        :style="`rotate: ${open ? '270deg' : '90deg'}`"
        alt=""
      />
    </button>
    <motion.div
      :variants="{
        open: {
          marginTop: 10,
          opacity: 1,
          height: 'auto',
        },
        closed: {
          marginTop: 0,
          opacity: 0,
          height: 0,
        },
      }"
      initial="closed"
      :animate="open ? 'open' : 'closed'"
      class="faqAnswer body-text"
    >
      <p>{{ faqProp.answer }}</p>
    </motion.div>
  </motion.div>
</template>

<style scoped lang="scss">
.faqContainer {
  border: 1px solid #919090;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
  overflow: hidden;
}

.faqQuestion {
  display: flex;
  text-align: left;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.1rem;
  font-style: italic;

  img {
    align-self: center;
    width: 2%;

    .mobile-layout & {
      width: 4%;
    }
  }
}

.faqAnswer {
  text-align: left;
}
</style>
