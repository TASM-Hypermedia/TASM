<template>
  <NuxtLink :to="`/events/${eventProp.url}`" class="card" style="">
    <div
      class="top"
      :style="{ backgroundImage: `url(${eventProp.eventImage})` }"
    >
      <SquareCalendar :date="calendar_date" />
      <div class="title_box" style="">
        <div class="title_text title" style="">
          {{ eventProp.title }}
        </div>
      </div>
    </div>

    <div class="bottom">
      <div v-if="eventProp.hostName !== 'No Name'" class="host_box" style="">
        <NuxtImg
          preload
          format="webp"
          quality="75"
          class="host_image"
          :src="eventProp.hostImage"
          alt=""
        />
        <div
          style="
            display: flex;
            gap: 6px;
            flex-direction: column;
            justify-content: start;
            width: 100%;
            color: black;
          "
        >
          <span
            class="body-text"
            style="
              color: black;
              font-size: 13px;
              font-weight: 700;
              line-height: 15px;
              word-wrap: break-word;
            "
            >HOST:</span
          >
          <div
            class="host_name title"
            style="
              color: black;
              font-size: 18px;
              font-weight: bold;
              line-height: 18px;
              word-wrap: break-word;
            "
          >
            {{ eventProp.hostName }}
          </div>
        </div>
      </div>

      <div class="info_box body-text" style="">
        <span
          style="
            color: black;
            font-size: 16px;
            /* font-family: Instrument Sans; */
            font-weight: 400;
            line-height: 16px;
            word-wrap: break-word;
          "
          >🕗
        </span>
        <span
          style="
            color: black;
            font-size: 15px;

            font-weight: 700;
            line-height: 15px;
            word-wrap: break-word;
          "
          >When</span
        >
        <span
          style="
            color: black;
            font-size: 15px;

            font-weight: 400;
            line-height: 15px;
            word-wrap: break-word;
          "
          >: {{ eventProp.date }} <br />
        </span>
        <span
          style="
            color: black;
            font-size: 16px;

            font-weight: 400;
            line-height: 16px;
            word-wrap: break-word;
          "
          >🌎
        </span>
        <span
          style="
            color: black;
            font-size: 15px;

            font-weight: 700;
            line-height: 15px;
            word-wrap: break-word;
          "
          >Where</span
        >
        <span
          style="
            color: black;
            font-size: 15px;

            font-weight: 400;
            line-height: 15px;
            word-wrap: break-word;
          "
          >:
          {{ eventProp.location }}
        </span>
      </div>

      <v-container class="tag_container">
        <card-activity-tag
          v-for="(tag, index) in eventProp.activityTags"
          :key="index"
          :text="tag.text"
        />
      </v-container>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components"
import type { Event } from "~/types"

const props = defineProps<{
  eventProp: Event
}>()

const calendar_date = new Date(props.eventProp.date)
</script>

<style scoped>
div {
  border: 0 solid black;
}

span {
  border: 0 solid black;
}

.card {
  width: 100%;
  max-width: 361px;
  text-decoration: none;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 15px;
  outline: 1px rgba(0, 0, 0, 0.17) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  .mobile-layout & {
    max-width: 1080px;
  }
}

.card:hover {
  transform: scale(1.02);
  background-color: #d8cfe7;
}

.mobile-layout & {
  max-width: 1080px;
}

.top {
  width: 100%;
  height: 291px;
  padding: 14px 10px;
  overflow: hidden;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: flex-end;
  gap: 10px;
  display: inline-flex;
}

.bottom {
  width: 100%;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 18px;
  display: inline-flex;
}

.title_box {
  width: 220px;
  height: 87px;
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 16px;
  backdrop-filter: blur(2px);
}

.title_text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 87px; /* or whatever height you want */
  color: black;
  font-size: 24px;

  font-weight: bolder;
  line-height: 24px;
  word-wrap: break-word;
  border: 0 solid black;
}

.host_box {
  overflow: hidden;
  display: flex;
  gap: 16px;
  border: 0 solid black;
}

.host_image {
  object-fit: cover;
  width: 74px;
  height: 74px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.info_box {
  height: 48px;
  border: solid black 0;
}

.tag_container {
  width: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  border: 0 solid black;
}
</style>
