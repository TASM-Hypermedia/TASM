<script setup lang="ts">
import type { Faq } from "~/types"

const {faqProp} = defineProps<{
  faqProp: Faq;
}>();

</script>

<template>
  <v-expansion-panels hover="true">
    <v-expansion-panel class="faqPanel" selected-class="changingBg">
      <v-expansion-panel-title class="faqQuestion"
      >{{faqProp.question}}</v-expansion-panel-title>
      <v-expansion-panel-text>{{faqProp.answer}}</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.faqPanel {
  border-radius: 10px;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid black;
  transition-duration: 1s;
}

.changingBg {
  background-color: red;
}
</style>