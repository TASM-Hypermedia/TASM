<script setup lang="ts">
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
  <div class="faqContainer">
    <button type="button" class="faqQuestion" @click="toggle">
      {{ faqProp.question }}
      <img src="/images/arrow-icon.png" :style="`rotate: ${open? '270deg' : '90deg'}`" />
    </button>
    <div class="faqAnswer" :style="`display: ${open? 'block' : 'none'}; margin-top: ${open? '10px' : '0'}`">
      <p>{{ faqProp.answer }}</p>
    </div>
  </div>
</template>

<style scoped>
.faqContainer {
  border: 1px solid #919090;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
}

.faqQuestion {
  display: flex;
  text-align: left;
  justify-content: space-between;
  font-weight: 500;

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