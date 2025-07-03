<script setup lang="ts">
import SvgBottom from "~/assets/images/homepage/Bottom-wrapper-benefits.svg"
import SvgTop from "~/assets/images/homepage/Top-wrapper-benefits.svg"
import { onMounted } from "vue"
const benefits = [
  {
    title: "CONNECTION",
    description:
      "Reconnect with yourself, others, and the world around you—on and off the mat.",
    image: "Connessione.svg",
  },
  {
    title: "CLARITY",
    description:
      "Find mental focus and inner stillness through breath and mindful movement.",
    image: "Lampadina.svg",
  },
  {
    title: "STRENGTH",
    description:
      "Build physical resilience and emotional balance from the inside out.",
    image: "Forza.svg",
  },
  {
    title: "FREEDOM",
    description: "Release tension in the body and let go of limiting thoughts.",
    image: "Liberta.svg",
  },
]
onMounted(() => {
  console.log(window.innerWidth)
  clientWidth.value = window.innerWidth

  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
  })
})

const clientWidth = ref(0)
//window.innerWidth

console.log(clientWidth)

const ratioTop = 1200 / 178

const ratioBottom = 1200 / 229

const topHeight = computed(() => -clientWidth.value / ratioTop)
const bottomHeight = computed(() => -clientWidth.value / ratioBottom)
console.log(topHeight, bottomHeight)
</script>

<template>
  <div class="container">
    <div class="sheet"></div>
    <SvgBottom
      class="svg-imageBottom"
      :style="{ bottom: bottomHeight + 'px' }"
    />
    <SvgTop class="svg-imageTop" :style="{ top: topHeight + 'px' }" />

    <div
      style="
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1080px;
        z-index: 1;
        align-items: center;
        padding: 50px;
        position: relative;
      "
    >
      <!--<SvgTizia class="svg-tizia" />-->

      <div style="display: flex">
        <AnimatedTitle title="BENEFITS" />
      </div>
      <div style="display: flex">
        <v-row no-gutters>
          <v-col
            v-for="i in benefits.length || 0"
            :key="i"
            class="pa-1"
            cols="12"
            xs="3"
            sm="3"
            md="6"
            lg="3"
          >
            <BenefitsContentCard :benefits-prop="benefits[i - 1]" />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 300px;
  margin-top: 250px;
}

.svg-imageBottom {
  width: 100vw;
  height: auto;
  left: 0;
  /*bottom: 0;*/
  position: absolute;
}
.svg-imageTop {
  width: 100vw;
  height: auto;
  left: 0;
  /*top: 0px;*/
  position: absolute;
}
.sheet {
  width: 100vw;
  bottom: 0;
  top: -10px;
  left: 0;
  /*top: 200px;*/
  position: absolute;
  background-color: #f0e2f9;
}
</style>
