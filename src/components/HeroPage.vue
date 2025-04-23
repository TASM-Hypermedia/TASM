<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
  urlImg?: string
}>()

function getUrlImg() {
  return new URL(`../assets/images/${props.urlImg}`, import.meta.url)
}
</script>

<template>
  <div
    class="copertinaPage"
    :style="{ backgroundImage: `url(${getUrlImg()})` }"
  >
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <div class="heroPage">
          <span>{{ title }}</span>
          <br />
          <span>{{ subtitle }}</span>
          {{ urlImg }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.heroPage {
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 0.8;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  font-size: 45px;
  line-height: 54px;
  padding: 32px;
  border-radius: 16px;
}
.copertinaPage {
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 32px;
  flex: 1;
  width: 100%;
}
</style>
