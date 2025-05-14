<script setup lang="ts">
import type { ContentCard } from "~/types"

const {contentCardProp} = defineProps<{
  contentCardProp: ContentCard;
}>();

//const allignment = contentCardProp.imageOnTheRight ? 'rightContent' : 'leftContent'
//const reverseAllignment = contentCardProp.imageOnTheRight ? 'leftContent' : 'rightContent'
</script>

<template>
    <div v-if="contentCardProp.imageOnTheRight">
      <div class="row">
      <div class="column" style="background-color: red">
        <p>{{contentCardProp.title}}</p>
        <p>{{contentCardProp.subtitle}}</p>
        <p>{{contentCardProp.imgUrl}}</p>
      </div>
      <div class="column" style="background-color: blue">
        <p>image</p>
      </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
      <div class="column" style="background-color: blue">
        <p>image</p>
      </div>
      <div class="column" style="background-color: red">
        <p>{{contentCardProp.title}}</p>
        <p>{{contentCardProp.subtitle}}</p>
        <p>{{contentCardProp.imgUrl}}</p>
      </div>
      </div>
    </div>
</template>

<style scoped>
.row {
  display: flex;
}

.column {
  flex: 50%;
}

</style>