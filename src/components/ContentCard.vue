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
      <div class="imageOnTheLeft">
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

<style scoped lang="scss">
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
  width: 90%;
  flex-direction: row;
  margin: auto;

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
    text-align: right;
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

.imageOnTheLeft {
  img {
    float: right;
  }
}

img {
  max-height: 300px;
  max-width: 500px;
  border-radius: 7px;
  align-self: stretch;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
