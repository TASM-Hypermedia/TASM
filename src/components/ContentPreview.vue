<template>
  <v-row>
    <div
      class="mainContainer"
      data-asset-type="Image"
      data-asset="true"
      data-button="false"
      data-direction="Horizontal"
      data-variant="Stroke"
    >
      <v-col cols="12">
        <img class="imgPreview" :src="url" alt="" />
      </v-col>
      <v-col>
        <div class="firtsContainer">
          <div class="secondContainer">
            <div class="title">{{ props.contentPreview?.title }}</div>
            <div class="subtitle">
              {{ props.contentPreview?.subtitle }}
            </div>
          </div>
        </div>
      </v-col>
    </div>
  </v-row>
</template>

<script setup lang="ts">
interface contentPreviewInterface {
  title: string
  subtitle: string
  urlImg: string
}

const props = defineProps<{
  contentPreview: contentPreviewInterface
}>()

const url = "/images/" + props.contentPreview.urlImg /*computed(() =>
  props.contentPreview?.urlImg
    ? new URL(
        `../assets/images/${props.contentPreview.urlImg}`,
        import.meta.url
      ).href
    : undefined
)*/
</script>

<style scoped>
.mainContainer {
  width: 100%;
  height: 100%;
  padding: 24px;
  margin: 24px;
  background: var(--Background-Default-Default, rgb(255, 255, 255));
  border-radius: 8px;
  outline: 1px var(--Border-Default-Default, #d9d9d9) solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  vertical-align: middle;
}
.firstContainer {
  flex: 1 1 0;
  min-width: 160px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.secondContainer {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
}
.title {
  align-self: stretch;
  color: var(--Text-Default-Default, #1e1e1e);
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 28.8px;
  word-wrap: break-word;
}
.subtitle {
  align-self: stretch;
  color: var(--Text-Default-Secondary, #252525);
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 22.4px;
  word-wrap: break-word;
}
.imgPreview {
  width: 160px;
  height: 160px;
  min-width: 160px;
  background: var(--Slate-200, #e3e3e3);
  object-fit: cover;
  user-select: none;
}
</style>
