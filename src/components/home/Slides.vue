<!--READ MEEEEE: Per mobile posso fare le immagini tagliate in verticale e quindi le 3 colonne allineate sulla stessa colonna e non più stessa riga-->
<template>
  <div class="homePage3SlidesContainer">
    <div v-if="layout === 'mobile'">
      <v-row class="homePage3Slides">
        <v-col cols="12" sm="12" class="pa-1">
          <div
            style="width: 100%; height: 100%"
            @touchstart="mouseOver(1)"
            @focus="mouseOver(1)"
            @touchend="mouseLeave"
            @blur="mouseLeave"
          >
            <motion.div
              :animate="{
                scale: hoverindex === 1 ? 0.9 : 1,
              }"
            >
              <v-img :src="image1" height="100%" width="100%" alt="Our teachers" contain>
                <v-sheet class="sheetImg">
                  <nuxt-link to="/teachers" class="textImg" aria-label="Our teachers"
                    ><div class="text-center title">
                      <h1>OUR TEAM</h1>
                      Click here to see our incredible teachers
                    </div>
                  </nuxt-link>
                </v-sheet>
              </v-img>
            </motion.div>
          </div>
        </v-col>
      </v-row>
      <v-row class="homePage3Slides">
        <v-col cols="12" sm="12" class="pa-1">
          <div
            style="width: 100%; height: 100%"
            @touchstart="mouseOver(2)"
            @focus="mouseOver(2)"
            @touchend="mouseLeave"
            @blur="mouseLeave"
          >
            <motion.div
              :animate="{
                scale: hoverindex === 2 ? 0.9 : 1,
              }"
            >
              <v-img :src="image2" height="100%" width="100%" alt="Our events" contain>
                <v-sheet class="sheetImg">
                  <nuxt-link to="/events" class="textImg" aria-label="Our events"
                    ><div class="text-center title">
                      <h1>OUR EVENTS</h1>
                      Click here to see our incredible events
                    </div>
                  </nuxt-link>
                </v-sheet>
              </v-img>
            </motion.div>
          </div>
        </v-col>
      </v-row>
      <v-row class="homePage3Slides">
        <v-col cols="12" sm="12" class="pa-1">
          <div
            style="width: 100%; height: 100%"
            @touchstart="mouseOver(3)"
            @focus="mouseOver(3)"
            @touchend="mouseLeave"
            @blur="mouseLeave"
          >
            <motion.div
              :animate="{
                scale: hoverindex === 3 ? 0.9 : 1,
              }"
            >
              <v-img :src="image3" height="100%" width="100%" alt="Our activities" contain>
                <v-sheet class="sheetImg">
                  <nuxt-link to="/activities" class="textImg" aria-label="Our activities"
                    ><div class="text-center title">
                      <h1>OUR ACTIVITIES</h1>
                      Click here to see our incredible activities
                    </div>
                  </nuxt-link>
                </v-sheet>
              </v-img>
            </motion.div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else>
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
                    ><div class="text-center title">
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
                    ><div class="text-center title">
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
                    ><div class="text-center title">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { motion } from "motion-v"

const hoverindex = ref(0)
const image1 = ref("./images/homepage/Team-1.png")
const image2 = ref("./images/homepage/Team-2.png")
const image3 = ref("./images/homepage/Team-3.png")
const image1Mobile = ref("./images/homepage/Team-1-mobile.png")
const image2Mobile = ref("./images/homepage/Team-2-mobile.png")
const image3Mobile = ref("./images/homepage/Team-3-mobile.png")

const viewport = useViewport()
const layout = computed(() =>
  viewport.isLessThan("tablet") ? "mobile" : "default"
)
onMounted(() => {
  if (layout.value === "mobile") {
    image1.value = image1Mobile.value
    image2.value = image2Mobile.value
    image3.value = image3Mobile.value
  } else {
    image1.value = `./images/homepage/Team-1.png`
    image2.value = `./images/homepage/Team-2.png`
    image3.value = `./images/homepage/Team-3.png`
  }
})

function mouseOver(i: number) {
  hoverindex.value = i
  const img = ["Activities", "Team", "Events"][i % 3]

  if (layout.value == "mobile") {
    image1.value = `./images/homepage/${img}-1-mobile.png`
    image2.value = `./images/homepage/${img}-2-mobile.png`
    image3.value = `./images/homepage/${img}-3-mobile.png`
    return
  }
  image1.value = `./images/homepage/${img}-1.png`
  image2.value = `./images/homepage/${img}-2.png`
  image3.value = `./images/homepage/${img}-3.png`
}

function mouseLeave() {
  hoverindex.value = 0
}
</script>

<style scoped lang="scss">
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
  .mobile-layout & {
    object-fit: cover;
  }
}
.textImg {
  color: white;
  text-decoration: none;
}
.text-center {
  color: white;
  gap: 10%;
  .mobile-layout & {
    font-size: 1.5rem;
  }
}
</style>
