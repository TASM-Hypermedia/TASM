<template>
  <div>
    <teacher :teacher="teacherInfo" />
  </div>
</template>

<script setup lang="ts">
//import TestComponent from "~/components/TestComponent.vue"
import teacher from "../pages/teacher.vue"

const teacherInfo = {
  name: "John Doe",
  description:
    "Sono Sara Morelli, insegnante di yoga certificata e appassionata di benessere olistico. La mia missione è guidarti in un viaggio di trasformazione attraverso il respiro, il movimento e la consapevolezza. Ho scoperto lo yoga durante un periodo di forte stress lavorativo e, da allora, non l'ho più abbandonato. Dopo anni di studio e pratica in India, Thailandia e Italia, ho deciso di condividere questa meravigliosa disciplina con chiunque voglia ritrovare equilibrio e serenità nella propria vita.",
  mantra: "Teaching is the greatest act of optimism.",
  mantraSubtitle: "Inspiring minds, shaping futures.",
}
</script>
