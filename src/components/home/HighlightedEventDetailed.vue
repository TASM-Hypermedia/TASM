<template>
  <NuxtLink :to="`/events/${eventProp.url}`" class="event-card">
    <div class="event-desktop" :style="{ width: `${width}px` }">
      <h2 class="event-title desktop-title title">{{ eventProp.title }}</h2>

      <!-- <div
        class="event-image desktop-image"
        :style="{ backgroundImage: `url('${eventProp.eventImage}')` }"
      ></div> -->

      <div class="event-info-rows">
        <!-- Calendario -->

        <div class="info-row body-text">
          <div class="wrapper-div">
            <div class="calendar-box">
              <div class="calendar-month">{{ calendar_month }}</div>
              <div class="calendar-day">{{ calendar_day }}</div>
              <div class="calendar-weekday">{{ calendar_day_name }}</div>
            </div>
          </div>
          <div class="info-texts body-text">
            <div class="info-label">WHEN</div>
            <div class="info-value title">
              {{ eventProp.date }}
            </div>
          </div>
        </div>

        <!-- Host -->
        <div class="info-row body-text">
          <div class="wrapper-div">
            <img :src="eventProp.hostImage" alt="Host" class="info-icon" />
          </div>
          <div class="info-texts body-text">
            <div class="info-label">HOST</div>
            <div class="info-value title">{{ eventProp.hostName }}</div>
          </div>
        </div>

        <div class="info-row">
          <div class="wrapper-div">
            <svg-icon />
          </div>
          <div class="info-texts body-text">
            <div class="info-label">WHERE</div>
            <div class="info-value title">{{ eventProp.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import type { Event } from "~/types"
import SvgIcon from "~/assets/images/homepage/icon-location2.svg"

const props = defineProps<{
  eventProp: Event
}>()
const clientWidth = ref(0)

onMounted(() => {
  clientWidth.value = window.innerWidth
  window.addEventListener("resize", () => {
    clientWidth.value = window.innerWidth
  })
})

const width = computed(() => clientWidth.value / 2)

const calendar_date = computed(() => new Date(props.eventProp.date))
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
  background: #f7f0fffe;
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

  font-weight: 500;
  line-height: 15px;
  word-wrap: break-word;
}

.event-image {
  width: 50%;
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
  color: #ffffff;
}

.event-host {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
}

.host-avatar {
  width: 80px;
  height: 80px;
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
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 5%;

  height: 100%;
}

.desktop-title {
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
  /* margin-bottom: 1rem; */
}

.desktop-image {
  width: 70%;
  height: 250px;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.desktop-image:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}
.event-info-rows {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;

  background: #6052a754;
  backdrop-filter: blur(12px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.1),
    0 0 0 2px rgba(191, 164, 209, 0.5);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.event-info-rows:hover {
  transform: scale(1.02);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.15),
    0 0 0 3px rgba(191, 164, 209, 0.6);
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
  color: #d8d8d8;
  font-weight: 500;
}

.info-value {
  font-size: 1.7rem;
  font-weight: 600;
  color: #ffffff;
}

/* ---------- RESPONSIVE LOGIC ---------- */
@media (min-width: 768px) {
  .event-mobile {
    display: none;
  }

  .event-desktop {
    display: flex;
    flex-direction: column;
    /*padding: 2rem;
    border-radius: 24px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);*/
  }
}
</style>
