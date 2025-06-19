<!--READ MEEEEE: Per mobile posso fare le immagini tagliate in verticale e quindi le 3 colonne allineate sulla stessa colonna e non più stessa riga-->
<template>
  <div class="homePage3SlidesContainer">
    <v-row class="homePage3Slides">
      <v-col cols="4" sm="4" class="pa-1">
        <div @mouseover="mouseOver(1)" @mouseleave="mouseLeave">
          <v-img :src="image1" height="100%" width="100%" contain>
            <v-sheet class="sheetImg">
              <div class="text-center">Hover over me!</div>
              <v-btn color="primary" class="mt-2">Click Me</v-btn>
            </v-sheet>
          </v-img>
        </div>
      </v-col>
      <v-col cols="4" sm="4" class="pa-1">
        <div @mouseover="mouseOver(2)" @mouseleave="mouseLeave">
          <v-img :src="image2" height="100%" width="100%" contain>
            <v-sheet class="sheetImg">
              <div class="text-center">Hover over me!</div>
              <v-btn color="primary" class="mt-2">Click Me</v-btn>
            </v-sheet>
          </v-img>
        </div>
      </v-col>
      <v-col cols="4" sm="4" class="pa-1">
        <div @mouseover="mouseOver(3)" @mouseleave="mouseLeave">
          <v-img :src="image3" height="100%" width="100%" contain>
            <v-sheet class="sheetImg">
              <div class="text-center">Hover over me!</div>
              <v-btn color="primary" class="mt-2">Click Me</v-btn>
            </v-sheet>
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const image1 = ref("./images/homepage/Sfondo-1.jpg")
const image2 = ref("./images/homepage/Sfondo-2.jpg")
const image3 = ref("./images/homepage/Sfondo-3.jpg")

function mouseOver(i: number) {
  console.log("Mouse over image:", i)
  let img = "Activities"

  if (i === 1) {
    img = "Team"
  } else if (i === 2) {
    img = "Events"
  }

  image1.value = `./images/homepage/${img}-1.png`
  image2.value = `./images/homepage/${img}-2.png`
  image3.value = `./images/homepage/${img}-3.png`
}

function mouseLeave() {
  // Reset images on mouse leave
  image1.value = `./images/homepage/Sfondo-1.jpg`
  image2.value = `./images/homepage/Sfondo-2.jpg`
  image3.value = `./images/homepage/Sfondo-3.jpg`
}
</script>

<style scoped>
.homePage3SlidesContainer {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
.sheetImg {
  width: 100%;
  height: 100%;
  background-color: rgba(92, 91, 91, 0.388);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
