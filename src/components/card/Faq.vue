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
    <button type="button" class="faqQuestion body-text" @click="toggle">
      <span>
        {{ faqProp.question }}
      </span>
      <Icon
        class="dropdown-icon"
        name="material-symbols:expand-circle-down-rounded"
        :style="`rotate: ${open ? '180deg' : '00deg'}`"
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
  width: 100%;
  text-align: left;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.3rem;
  // font-style: italic;

  .dropdown-icon {
    transition: all 0.2s ease-in-out;
    align-self: center;
    width: 24px;
    height: 24px;
  }
}

.faqAnswer {
  text-align: left;
}
</style>
