<script setup lang="ts">
import SvgBlob from "~/assets/images/homepage/Blob-Fill.svg"
import SvgBlobOutline from "~/assets/images/homepage/Blob-outline.svg"
import { motion, Motion } from "motion-v"
//import { ref, computed } from "vue" //ref, computedimport { } from "vue"

const { benefitsProp } = defineProps<{
  benefitsProp: {
    title: string
    description: string
    image: string
    position: number
  }
}>()

const hover = useMotionValue(0)
const setHover = (value: boolean) => {
  hover.set(value ? 1 : 0)
}
const spring = useSpring(hover, { bounce: 0 })
const x1 = useTransform(spring, [0, 1], ["-50%", "-52%"])
const y1 = useTransform(spring, [0, 1], ["-50%", "-52%"])
const x2 = useTransform(spring, [0, 1], ["-40%", "-38%"])
const y2 = useTransform(spring, [0, 1], ["-45%", "-42%"])
const imgScale = useTransform(spring, [0, 1], [0.9, 1])

const variations = {
  hidden: {
    scale: 1,
    opacity: 0,
    x: -150,
  },
  shown: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  hover: {
    scale: 1,
  },
}
</script>
<template>
  <motion.div
    while-hover="hover"
    initial="hidden"
    animate="shown"
    :variants="variations"
    style="
      flex: 1;
      padding: 30px;
      /* background: #bde0fe; */
      /* overflow: hidden; */
      border-radius: 100px;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      display: inline-flex;
      position: relative;
    "
    @focus="setHover(true)"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
    @blur="setHover(false)"
  >
    <div style="display: flex; flex-direction: column; gap: 20px">
      <div>
        <div
          style="
            align-self: stretch;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;
            display: flex;
            position: relative;
          "
        >
          <div
            style="justify-content: center; align-items: center; display: flex"
          >
            <Motion
              as-child
              :style="{
                x: x1,
                y: y1,
                scale: 1.7,
              }"
            >
              <svg-blob class="svg-blob" />
            </Motion>
            <Motion
              as-child
              :style="{
                x: x2,
                y: y2,
                scale: 1.7,
              }"
            >
              <svg-blob-outline class="svg-blob-outline" />
            </Motion>
            <motion.div
              class="teacher_img_wrapper"
              :style="{
                width: '80px',
                height: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                scale: imgScale,
              }"
            >
              <motion.img
                class="teacher_image"
                :style="{
                  width: '100%',
                  height: '100%',
                }"
                :src="'/images/icons/benefits/' + benefitsProp.image"
                :alt="benefitsProp.title"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <div class="cardTitle title">
          {{ benefitsProp.title }}
        </div>
      </div>

      <div>
        <div class="cardDescription body-text">
          {{ benefitsProp.description }}
        </div>
      </div>
    </div>
  </motion.div>
</template>

<style scoped>
.cardTitle {
  padding-top: 5%;
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  /*font-size: 48px;
  line-height: 57.6px;*/

  font-weight: 700;
  word-wrap: break-word;
}

.cardDescription {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  /*font-size: 32px;
  line-height: 38.4px;*/

  font-weight: 400;
  height: 100%;
  word-wrap: break-word;
}
.benefit-card {
  position: relative;
}
.svg-blob {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translate(-50%, -50%) scale(1.7);
}
.svg-blob-outline {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translate(-40%, -40%) scale(1.7);
  opacity: 0.5;
}
/* div {
  border: 1px solid black;
} */
</style>
