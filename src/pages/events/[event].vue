<script setup lang="ts">
import type { EventType } from "~/types"

const route = useRoute()

const a = route.params.event
const EventURL = typeof a === "string" ? a : a.join("")

const response = await useAPI<EventType>("/postEvent", {
  method: "POST",
  body: JSON.stringify({ EventURL }),
})

if (response.error.value || !response.data.value)
  throw createError({
    fatal: true,
    ...(response.error.value ?? {
      statusCode: 404,
      message: `${EventURL} - Event not found`,
    }),
  })

const event = response.data.value

const calendar_date = new Date(event.date)
const calendar_year = calendar_date.getFullYear()
const calendar_month = calendar_date.toLocaleString("en-US", { month: "long" })
const calendar_month_short = calendar_date
  .toLocaleString("en-US", { month: "short" })
  .toUpperCase()
const calendar_day = calendar_date.getDate()
const calendar_day_name = calendar_date
  .toLocaleString("en-US", { weekday: "short" })
  .toUpperCase()

const learnPoints = event.infostr
  .split("\n")
  .map((s) => s.replace(";", "").trim())
const programPoints: {
  day: string
  points: string[]
}[] = event.programstr.split("#").map((d) => {
  const lines = d.split("\n").map((s) => s.replace(";", "").trim())
  return {
    day: lines.shift() ?? "",
    points: lines.filter((s) => s),
  }
})
</script>

<template>
  <PageWrap
    :img-src="event.mainImageURL"
    tagline="Our Events:"
    :title="event.title"
    :subtitle="event.subtitle"
  >
    <section>
      <p class="shortDesc">"{{ event.shortDesc }}"</p>
    </section>
    <section class="eventInfo">
      <div class="eventInfoRow">
        <div class="eventInfoColumn">
          <div class="eventWhenIcon" style="">
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
                {{ calendar_month_short }}
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
                color: #7a7a7a;
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
          <div class="eventWhenText">
            <h3>When:</h3>
            <p>{{ calendar_day }} {{ calendar_month }} {{ calendar_year }}</p>
          </div>
        </div>
        <div class="eventInfoColumn">
          <div class="eventWhereIcon">
            <img src="../../assets/icons/location-icon.jpg" alt="" />
          </div>
          <div class="eventWhereText">
            <h3>Where:</h3>
            <p>{{ event.location }}</p>
          </div>
        </div>
      </div>
      <NuxtLink class="link-button" to="#">
        <img class="attend" src="../../assets/images/calendar.svg" alt="logo" />
        Attend This Event
      </NuxtLink>
    </section>
    <section>
      <p class="description">
        {{ event.description }}
      </p>
    </section>
    <section class="pair">
      <div>
        <h1>What You'll Learn</h1>
        <ul>
          <li v-for="(point, index) in learnPoints" :key="index">
            {{ point }}
          </li>
        </ul>
      </div>
      <div>
        <h1>The Program</h1>
        <template v-for="day of programPoints" :key="day">
          <h3 class="programDay">{{ day.day }}</h3>
          <ul>
            <li v-for="(point, index) in day.points" :key="`${day}-${index}`">
              {{ point }}
            </li>
          </ul>
        </template>
      </div>
    </section>
    <section v-if="event.guest">
      <h1>Special Guest</h1>
      <ContentCard
        :content-card-prop="{
          title: event.guest.name,
          description: event.guest.description,
          imgUrl: event.guest.imageURL,
        }"
        separator
      />
    </section>
    <section>
      <h1>Teachers in This Event</h1>
      <CardGrid :length="event.teachers.length">
        <template #card="{ index }">
          <card-teacher :teacher-prop="event.teachers[index]" />
        </template>
      </CardGrid>
      <NuxtLink class="link-button" to="/events"> View other events </NuxtLink>
    </section>
  </PageWrap>
</template>

<style scoped lang="scss">
section {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-weight: 400;
    font-size: 1.8em;
  }
}

.shortDesc {
  font-style: italic;
  font-size: 1.2em;
  text-align: center;
}

.description {
  text-align: center;
}

h1 {
  text-align: center;
  font-size: 2.5em;
}

.eventInfo {
  gap: 32px;
}

.eventInfoRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 16px;

  .mobile-layout & {
    flex-direction: column;
    align-items: start;
    margin: auto;
  }
}

.eventInfoColumn {
  display: flex;
}

.eventWhenIcon {
  width: 87px;
  height: 87px;
  position: relative;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.eventWhenText {
  margin: auto;
  padding: 0 15px;

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }
}

.eventWhereIcon {
  width: 87px;
  height: 87px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 8px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

.eventWhereText {
  margin: auto;
  padding: 0 15px;

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }
}

.programDay {
  margin-top: -10px;
}

span.label {
  opacity: 0.8;
  font-size: 1.3em;
}

section.pair {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: stretch;
  gap: 64px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .mobile-layout & {
    flex-direction: column;
  }
}

ul {
  padding-left: 20px;

  li::marker {
    font-weight: bold;
  }
}

.link-button {
  color: white;
  background-color: #020202;
  border-radius: 8px;
  padding: 8px 32px;
  margin: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  .attend {
    filter: brightness(100);
  }

  .mobile-layout & {
    margin-top: 50px;
  }
}
</style>
