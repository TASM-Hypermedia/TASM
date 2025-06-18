<template>
  <div>
    <v-row no-gutters class="homePage3Slides">
      <v-col cols="4" sm="4" class="pa-0">
        <div @mouseover="mouseOver(1)" @mouseleave="mouseLeave">
          <v-img
            :src="image1"
            class="homePage3SlidesImage"
            height="100%"
            width="100%"
            contain
          ></v-img>
        </div>
      </v-col>
      <v-col cols="4" sm="4" class="pa-0">
        <div @mouseover="mouseOver(2)" @mouseleave="mouseLeave">
          <v-img
            :src="image2"
            class="homePage3SlidesImage"
            height="100%"
            width="100%"
            fit
          ></v-img>
        </div>
      </v-col>
      <v-col cols="4" sm="4" class="pa-0">
        <div @mouseover="mouseOver(3)" @mouseleave="mouseLeave">
          <v-img
            :src="image3"
            class="homePage3SlidesImage"
            height="100%"
            width="100%"
            fit
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const image1 = ref("./images/homepage/TeamFull.png")
const image2 = ref("./images/homepage/EventsFull.png")
const image3 = ref("./images/homepage/ActivitiesFull.png")

function mouseOver(i: number) {
  // Add your mouse over logic here if needed

  console.log("Mouse over image:", i)

  if (i === 1) {
    image1.value = `./images/homepage/Team-1.png`
    image2.value = `./images/homepage/Team-2.png`
    image3.value = `./images/homepage/Team-3.png`
  } else if (i === 2) {
    image1.value = `./images/homepage/Events-1.png`
    image2.value = `./images/homepage/Events-2.png`
    image3.value = `./images/homepage/Events-3.png`
  } else if (i === 3) {
    image1.value = `./images/homepage/Activities-1.png`
    image2.value = `./images/homepage/Activities-2.png`
    image3.value = `./images/homepage/Activities-3.png`
  }
}

function mouseLeave() {
  // Reset images on mouse leave
  image1.value = `./images/homepage/TeamFull.png`
  image2.value = `./images/homepage/EventsFull.png`
  image3.value = `./images/homepage/ActivitiesFull.png`
}
</script>
