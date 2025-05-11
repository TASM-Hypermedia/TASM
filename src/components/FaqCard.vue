<script setup lang="ts">

import type { Faq } from "~/types"

const {faqProp} = defineProps<{
  faqProp: Faq;
}>();

</script>

<template>
  <v-expansion-panels style="background-color: red">
    <v-expansion-panel class="faqPanel">
      <v-expansion-panel-title>{{faqProp.question}}</v-expansion-panel-title>
      <v-expansion-panel-text>{{faqProp.answer}}</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>

.faqPanel {
  border-radius: 10px;
  width: 100%;
}

</style>