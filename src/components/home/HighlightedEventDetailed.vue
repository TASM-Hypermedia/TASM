<template>
  <div class="event-desktop">
    <h2 class="event-title title">{{ eventProp.title }}</h2>

    <!-- <div
    class="event-image desktop-image"
    :style="{ backgroundImage: `url('${eventProp.eventImage}')` }"
    ></div> -->

    <NuxtLink :to="`/events/${eventProp.url}`" class="event-card">
      <GyroAnim>
        <div class="event-info-rows">
          <!-- Calendario -->

          <div class="info-row body-text">
            <div class="wrapper-div">
              <SquareCalendar :date="calendar_date" />
            </div>
            <div class="info-texts body-text">
              <div class="info-label">When</div>
              <div class="info-value">
                {{
                  calendar_date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    weekday: "long",
                  })
                }}
              </div>
            </div>
          </div>

          <!-- Host -->
          <div class="info-row body-text">
            <div class="wrapper-div">
              <NuxtImg
                preload
                format="webp"
                quality="75"
                :src="eventProp.hostImage"
                alt="Host"
                class="info-icon"
              />
            </div>
            <div class="info-texts body-text">
              <div class="info-label">Guest</div>
              <div class="info-value">{{ eventProp.hostName }}</div>
            </div>
          </div>

          <div class="info-row">
            <div class="wrapper-div">
              <div
                :style="{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }"
              >
                <svg-icon />
              </div>
            </div>
            <div class="info-texts body-text">
              <div class="info-label">Where</div>
              <div class="info-value">{{ eventProp.location }}</div>
            </div>
          </div>

          <div class="info-row learn-more">
            <p :to="`/events/${eventProp.url}`" class="body-text">Learn More</p>
            <arrow class="arrow-icon" />
          </div>
        </div>
      </GyroAnim>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import type { Event } from "~/types"
import SvgIcon from "~/assets/images/homepage/icon-location2.svg"
import arrow from "~/assets/images/right-arrow.svg"

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

const calendar_date = computed(() => new Date(props.eventProp.date))
</script>
<style scoped lang="scss">
.event-card {
  text-decoration: none;
  color: inherit;
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
  font-size: 4rem;
  text-shadow: 0 4px 16px #0005;
  font-weight: 600;
  margin: 0;
  text-align: center;
  color: #ffffff;
  .mobile-layout & {
    font-size: 3rem;
  }
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
  align-items: stretch;
  justify-content: center;
  flex: 1;
  padding: 32px;

  .mobile-layout & {
    padding: 32px 0;
  }
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
  transition: all 0.3s ease-in-out;
  flex: 1;
}

.event-info-rows:hover {
  transform: scale(1.02);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.15),
    0 0 0 3px rgba(191, 164, 209, 0.6);

  .arrow-icon {
    transform: rotate(-0deg);
  }
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 32px;
}

.info-icon {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.wrapper-div {
  width: 87px;
  height: 87px;

  & > * {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
    background-color: #fffa;
    backdrop-filter: blur(4px);
  }
}

.info-texts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-shadow: 0 4px 12px #0004;
}

.info-label {
  font-size: 1.5rem;
  font-style: italic;
  color: #fffa;
  // font-weight: 500;
}

.info-value {
  font-size: 1.7rem;
  font-weight: 600;
  color: #ffffff;
}

.learn-more {
  color: #fff;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  .body-text {
    font-size: 1.8rem;
    color: #ffffff;
  }

  * {
    color: #fff;
  }

  .arrow-icon {
    width: 32px;
    height: 32px;
    margin-left: 8px;
    transform: rotate(-45deg);
    transition: all 0.3s ease;
  }
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
