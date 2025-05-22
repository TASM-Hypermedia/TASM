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
  <button type="button" class="collapsible" @click="toggle">
    {{ faqProp.question }}
  </button>
  <div class="content" :style="`display: ${open? 'block' : 'none' }`">
    <p>{{ faqProp.answer }}</p>
  </div>
</template>

<style scoped>
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>