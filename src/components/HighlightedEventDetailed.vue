<template>
  <NuxtLink :to="`/events/${eventProp.url}`" class="event-card">
    <div class="event-desktop" :style="{ width: `${width}px` }">
      <h2 class="event-title desktop-title">{{ eventProp.title }}</h2>

      <div
        class="event-image desktop-image"
        :style="{ backgroundImage: `url('${eventProp.eventImage}')` }"
      ></div>

      <div class="event-info-rows">
        <!-- Calendario -->

        <div class="info-row">
          <div class="wrapper-div">
            <div class="calendar-box">
              <div class="calendar-month">{{ calendar_month }}</div>
              <div class="calendar-day">{{ calendar_day }}</div>
              <div class="calendar-weekday">{{ calendar_day_name }}</div>
            </div>
          </div>
          <div class="info-texts">
            <div class="info-label">WHEN</div>
            <div class="info-value">
              {{ eventProp.date }}
            </div>
          </div>
        </div>

        <!-- Host -->
        <div class="info-row">
          <div class="wrapper-div">
            <img :src="eventProp.hostImage" alt="Host" class="info-icon" />
          </div>
          <div class="info-texts">
            <div class="info-label">HOST</div>
            <div class="info-value">{{ eventProp.hostName }}</div>
          </div>
        </div>

        <div class="info-row">
          <div class="wrapper-div">
            <svg-icon />
          </div>
          <div class="info-texts">
            <div class="info-label">WHERE</div>
            <div class="info-value">{{ eventProp.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
//import { NuxtLink } from "#components"
import type { Event } from "~/types"
import SvgIcon from "~/assets/images/homepage/icon-location2.svg"
import { computed, onMounted, ref } from "vue"
const props = defineProps<{
  eventProp: Event
}>()
const clientWidth = ref(0)

onMounted(() => {
  console.log(window.innerWidth)
  clientWidth.value = window.innerWidth

  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
  })
})

const width = computed(() => clientWidth.value / 3)

const calendar_date = computed(() => new Date(props.eventProp.date))
//const calendar_date = new Date(props.eventProp.date)
console.log("calendar_date", calendar_date)
const calendar_month = computed(() =>
  calendar_date.value.toLocaleString("en-US", { month: "short" }).toUpperCase()
)
const calendar_day = computed(() => calendar_date.value.getDate())

const calendar_day_name = computed(() =>
  calendar_date.value
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase()
)
</script>
<style scoped>
.event-card {
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.calendar-box {
  width: 80px;
  background: #f7f0ff;
  border-radius: 16px;
  text-align: center;
  padding: 0.5rem 0.2rem;
  border: 1px solid #c1a4dc;
  font-family: "Instrument Sans", sans-serif;
}

.calendar-month,
.calendar-day,
.calendar-weekday {
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
}

.calendar-month {
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
}
.calendar-day {
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
}
.calendar-weekday {
  height: 18px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #7a7a7a;
  font-size: 15px;
  font-family: Instrument Sans;
  font-weight: 500;
  line-height: 15px;
  word-wrap: break-word;
}

.event-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.event-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.event-host {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
}

.host-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.host-name {
  font-size: 1rem;
  font-weight: 500;
}

.event-desktop {
  display: none;
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.desktop-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.desktop-image {
  width: 100%;
  height: 250px;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
}

.event-info-rows {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 50px;
}

.info-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
}
.wrapper-div {
  width: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.info-texts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.info-label {
  font-size: 1rem;
  color: #7a7a7a;
  font-weight: 500;
}

.info-value {
  font-size: 1.7rem;
  font-weight: 600;
  color: #2b2b2b;
}

/* ---------- RESPONSIVE LOGIC ---------- */
@media (min-width: 768px) {
  .event-mobile {
    display: none;
  }

  .event-desktop {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 24px;
    background: rgba(178, 153, 236, 0.692);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
