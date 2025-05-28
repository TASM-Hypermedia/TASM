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
  <button type="button" class="faqQuestion" @click="toggle">
    {{ faqProp.question }}
  </button>
  <div class="faqAnswer" :style="`display: ${open? 'block' : 'none' }`">
    <p>{{ faqProp.answer }}</p>
  </div>
</template>

<style scoped>
.faqQuestion {
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
  display: block;
  width: 100%;
  text-align: left;
  margin-top: 10px;
}

.faqAnswer {
  background-color: #B94646;
  padding: 10px;
  border-radius: 10px;
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
</style>