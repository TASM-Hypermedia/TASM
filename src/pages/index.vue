<script setup lang="ts">
//import TestComponent from "~/components/TestComponent.vue"
import teacher from "./teacher.vue"
</script>
<template>
  <div>
    <!--<TestComponent />-->
    <teacher
      name="Sara Morelli"
      description="Sono Sara Morelli, insegnante di yoga certificata e appassionata di benessere olistico. La mia missione è guidarti in un viaggio di trasformazione attraverso il respiro, il movimento e la consapevolezza. Ho scoperto lo yoga durante un periodo di forte stress lavorativo e, da allora, non l'ho più abbandonato. Dopo anni di studio e pratica in India, Thailandia e Italia, ho deciso di condividere questa meravigliosa disciplina con chiunque voglia ritrovare equilibrio e serenità nella propria vita."
    />
  </div>
</template>
<style scoped>
div {
  background-color: #f0f0f0;
  flex: 1;
  max-width: 800px;
  width: 100%;
  padding: 32px;
}
</style>
