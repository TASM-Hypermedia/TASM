<template>
  <div>
    <teacher :teacher="teacherInfo" />
  </div>
</template>

<script setup lang="ts">
import teacher from "../pages/teacher.vue"
import { useAPI } from "~/composables/useAPI"

// Example GET API call
const { data } = await useAPI<{ id: number; name: string }[]>("/getData")

if (!data.value || data.value.length === 0) {
  throw new Error("No data found")
}
const { name } = data.value[0]

// Example POST API call
const { data: dataPost } = await useAPI<{
  id: number
  name: string
  surname: string
}>("/postData", {
  method: "POST",
  body: JSON.stringify({ id: 1 }),
})

if (!dataPost.value) {
  throw new Error("No data found")
}
const namePost = dataPost.value.name + name

const teacherInfo = {
  name: namePost,
  description:
    "Sono Sara Morelli, insegnante di yoga certificata e appassionata di benessere olistico. La mia missione è guidarti in un viaggio di trasformazione attraverso il respiro, il movimento e la consapevolezza. Ho scoperto lo yoga durante un periodo di forte stress lavorativo e, da allora, non l'ho più abbandonato. Dopo anni di studio e pratica in India, Thailandia e Italia, ho deciso di condividere questa meravigliosa disciplina con chiunque voglia ritrovare equilibrio e serenità nella propria vita.",
  mantra: "Teaching is the greatest act of optimism.",
  mantraSubtitle: "Inspiring minds, shaping futures.",
}
</script>
