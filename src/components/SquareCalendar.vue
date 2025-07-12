<script setup lang="ts">
const props = defineProps<{
  date: Date
}>()

const calendar_month = props.date
  .toLocaleString("en-US", { month: "short" })
  .toUpperCase()
const calendar_day = props.date.getDate()
const calendar_day_name = props.date
  .toLocaleString("en-US", { weekday: "short" })
  .toUpperCase()
</script>

<template>
  <div class="calendar" style="">
    <div
      style="
        width: 87px;
        height: 25px;
        background: rgba(223.86, 84.16, 84.16, 0.83);
        overflow: hidden;
        border-bottom: 1px #b94646 solid;
      "
    >
      <div
        style="
          height: 100%;
          text-align: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          color: rgba(137.55, 21.03, 21.03, 0.72);
          font-size: 20px;
          font-family: Instrument Sans;
          font-weight: 700;
          line-height: 20px;
          word-wrap: break-word;
        "
      >
        {{ calendar_month }}
      </div>
    </div>
    <div
      style="
        height: 35px;
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        color: #2b2b2b;
        font-size: 40px;
        font-family: Instrument Sans;
        font-weight: 500;
        line-height: 40px;
        word-wrap: break-word;
      "
    >
      {{ calendar_day }}
    </div>
    <div
      style="
        height: 18px;
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        color: black;
        font-size: 15px;
        font-family: Instrument Sans;
        font-weight: 500;
        line-height: 15px;
        word-wrap: break-word;
      "
    >
      {{ calendar_day_name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar {
  width: 87px;
  height: 87px;
  position: relative;
  background: white;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
</style>
