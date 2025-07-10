<!--READ MEEEEE: Per mobile posso fare le immagini tagliate in verticale e quindi le 3 colonne allineate sulla stessa colonna e non più stessa riga-->
<template>
  <div class="homePage3SlidesContainer">
    <v-row class="homePage3Slides">
      <v-col cols="4" sm="4" class="pa-1">
        <motion.div
          :while-hover="{
            scale: 0.9,

            transition: { duration: 0.2 },
          }"
        >
          <div
            @mouseover="mouseOver(1)"
            @focus="mouseOver(1)"
            @mouseleave="mouseLeave"
            @blur="mouseLeave"
          >
            <v-img :src="image1" height="100%" width="100%" contain>
              <v-sheet class="sheetImg">
                <nuxt-link to="/teachers" class="textImg"
                  ><div class="text-center">
                    <h1>OUR TEAM</h1>
                    Click here to see our incredible teachers
                  </div>
                </nuxt-link>
              </v-sheet>
            </v-img>
          </div>
        </motion.div>
      </v-col>
      <v-col cols="4" sm="4" class="pa-1">
        <motion.div
          :while-hover="{
            scale: 0.9,

            transition: { duration: 0.2 },
          }"
        >
          <div
            @mouseover="mouseOver(2)"
            @focus="mouseOver(2)"
            @mouseleave="mouseLeave"
            @blur="mouseLeave"
          >
            <v-img :src="image2" height="100%" width="100%" contain>
              <v-sheet class="sheetImg">
                <nuxt-link to="/events" class="textImg"
                  ><div class="text-center">
                    <h1>OUR EVENTS</h1>
                    Click here to see our incredible events
                  </div>
                </nuxt-link>
              </v-sheet>
            </v-img>
          </div>
        </motion.div>
      </v-col>
      <v-col cols="4" sm="4" class="pa-1">
        <motion.div
          :while-hover="{
            scale: 0.9,

            transition: { duration: 0.2 },
          }"
        >
          <div
            @mouseover="mouseOver(3)"
            @focus="mouseOver(3)"
            @mouseleave="mouseLeave"
            @blur="mouseLeave"
          >
            <v-img :src="image3" height="100%" width="100%" contain>
              <v-sheet class="sheetImg">
                <nuxt-link to="/activities" class="textImg"
                  ><div class="text-center">
                    <h1>OUR ACTIVITIES</h1>
                    Click here to see our incredible activities
                  </div>
                </nuxt-link>
              </v-sheet>
            </v-img>
          </div>
        </motion.div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { motion } from "motion-v"

const image1 = ref("./images/homepage/Team-1.png")
const image2 = ref("./images/homepage/Team-2.png")
const image3 = ref("./images/homepage/Team-3.png")

onMounted(() => {
  // Initialize images to default state
  image1.value = `./images/homepage/Team-1.png`
  image2.value = `./images/homepage/Team-2.png`
  image3.value = `./images/homepage/Team-3.png`
})

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
  /*image1.value = `./images/homepage/Sfondo-1.jpg`
  image2.value = `./images/homepage/Sfondo-2.jpg`
  image3.value = `./images/homepage/Sfondo-3.jpg`*/
}

/*onMounted(() => {
  // Initialize images to default state
  image1.value = `./images/homepage/Team-1.jpg`
  image2.value = `./images/homepage/Team-2.jpg`
  image3.value = `./images/homepage/Team-3.jpg`
})*/
</script>

<style scoped>
.homePage3SlidesContainer {
  width: 100%;
  height: 100%;
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
.textImg {
  color: white;
  text-decoration: none;
}
</style>
