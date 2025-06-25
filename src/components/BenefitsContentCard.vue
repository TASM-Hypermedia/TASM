<template>
  <div
    style="
      width: 100%;
      height: 100%;
      padding: 30px;
      background: #bde0fe;
      overflow: hidden;
      border-radius: 100px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      display: inline-flex;
    "
  >
    <div
      style="
        align-self: stretch;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 50px;
        display: flex;
      "
    >
      <div style="width: 196.12px; height: 117.99px">
        <img
          class="teacher_image"
          style="
            width: 100%;
            height: 100%;
            object-fit: fill;

            /*border-radius: 7px;*/
          "
          :src="'/images/icons/benefits/' + benefitsProp.image"
        />
      </div>
      <div class="cardTitle">{{ benefitsProp.title }}</div>
    </div>
    <div class="cardDescription">
      {{ benefitsProp.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { benefitsProp } = defineProps<{
  benefitsProp: {
    title: string
    description: string
    image: string
  }
}>()
</script>

<style scoped>
.cardTitle {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  /*font-size: 48px;
  line-height: 57.6px;*/
  font-family: Inter;
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
  font-family: Inter;
  font-weight: 400;

  word-wrap: break-word;
}
</style>
