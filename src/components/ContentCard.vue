<script setup lang="ts">
import type { ContentCard } from "~/types"

const { contentCardProp } = defineProps<{
  contentCardProp: ContentCard
}>()

</script>

<template>
  <div v-if="contentCardProp.imageOnTheRight">
    <div class="row">
      <div class="leftElement writtenContent">
        <p class="contentTitle">{{ contentCardProp.title }}</p>
        <p class="contentSubtitle">{{ contentCardProp.subtitle }}</p>
        <p>{{ contentCardProp.description }}</p>
      </div>
      <div class="rightElement">
        <img :src="contentCardProp.imgUrl" :alt="contentCardProp.altDescription" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="row">
      <div class="leftElement">
        <img :src="contentCardProp.imgUrl" :alt="contentCardProp.altDescription" />
      </div>
      <div class="rightElement writtenContent">
        <p class="contentTitle">{{ contentCardProp.title }}</p>
        <p class="contentSubtitle">{{ contentCardProp.subtitle }}</p>
        <p>{{ contentCardProp.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.leftElement {
  flex: 50%;
  text-align: right;
}

.rightElement {
  flex: 50%;
  text-align: left;
}

.writtenContent {
  padding: 10px;
}

.contentTitle {
  font-size: 1.8em;
  font-weight: bold;
}

.contentSubtitle {
  font-size: 1.2em;
  font-weight: 550;
}

img {
  width: 100%;
  object-fit: cover;
}
</style>