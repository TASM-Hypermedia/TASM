<template>
  <div>
    <!--<TestComponent />-->
    <teacher :teacher="teacherInfo" />
  </div>
</template>

<script setup lang="ts">
//import TestComponent from "~/components/TestComponent.vue"
import teacher from "./teacher.vue"

const teacherInfo = {
  name: "John Doe",
  description: "A passionate teacher with a love for learning.",
}
</script>

<style scoped>
div {
  background-color: #f0f0f0;
  flex: 1;
  max-width: 800px;
  width: 100%;
  padding: 32px;
}
</style>
