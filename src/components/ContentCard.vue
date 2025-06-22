<script setup lang="ts">
import type { ContentCard } from "~/types"

const { contentCardProp } = defineProps<{
  contentCardProp: ContentCard
}>()
</script>

<template>
  <div
    v-if="contentCardProp.imageOnTheRight"
    :class="`contentCard ${contentCardProp.imageOnTheRight ? 'reverse' : ''}`"
  >
    <div class="row">
      <div class="writtenContent">
        <p class="contentTitle">{{ contentCardProp.title }}</p>
        <p v-if="contentCardProp.subtitle" class="contentSubtitle">
          {{ contentCardProp.subtitle }}
        </p>
        <p>{{ contentCardProp.description }}</p>
      </div>
      <div>
        <img
          :src="contentCardProp.imgUrl"
          :alt="contentCardProp.altDescription"
        />
      </div>
    </div>
  </div>
  <div v-else class="contentCard">
    <div class="row invertElementsOnMobile">
      <div>
        <img
          :src="contentCardProp.imgUrl"
          :alt="contentCardProp.altDescription"
        />
      </div>
      <div class="writtenContent">
        <p class="contentTitle">{{ contentCardProp.title }}</p>
        <p class="contentSubtitle">{{ contentCardProp.subtitle }}</p>
        <p>{{ contentCardProp.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentCard {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  margin: 0 16px;
}

.row {
  display: flex;
  width: 100%;
  flex-direction: row;

  &.reverse {
    flex-direction: row-reverse;
  }

  div {
    flex: 1;
    padding: 10px;
  }

  .mobile-layout & {
    flex-direction: column;
    &.reverse {
      flex-direction: column-reverse;
    }
  }
}

.writtenContent {
  .reverse & {
    text-align: left;
  }
  .mobile-layout & {
    text-align: center;
  }
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
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
}
</style>
