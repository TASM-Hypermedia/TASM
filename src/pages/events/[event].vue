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
      <p class="shortDesc">
        "{{ event.shortDesc }}"
      </p>
      <p class="description">
        {{ event.description }}
      </p>
      <NuxtLink class="link-button" to="#">
        <img class="attend" src="../../assets/images/calendar.svg" alt="logo" />
        Attend This Event
      </NuxtLink>
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
          <h3>{{ day.day }}</h3>
          <ul>
            <li v-for="(point, index) in day.points" :key="`${day}-${index}`">
              {{ point }}
            </li>
          </ul>
        </template>
      </div>
    </section>
    <section v-if="event.guest" class="guest">
      <h1>Special Guest</h1>
      <div>
        <img :src="event.guest.imageURL" :alt="event.guest.name" />
        <div>
          <h2>{{ event.guest.name }}</h2>
          <p>{{ event.guest.description }}</p>
        </div>
      </div>
    </section>
    <section style="align-items: center; text-align: center">
      <h1>Teachers in This Event</h1>
      <div class="temp-grid">
        <teacher-card
          v-for="(teacher, i) in event.teachers.toSpliced(3)"
          :key="`teacher${i}`"
          :teacher-prop="teacher"
        />
      </div>
    </section>
    <section class="events">
      <!--<h2>Similar Events</h2>
      <div class="temp-grid">
        <activity-card :activity-prop="eventsList[0]" />
        <activity-card :activity-prop="eventsList[1]" />
        <activity-card :activity-prop="eventsList[2]" />
      </div>-->
      <NuxtLink class="link-button" to="/events"> View all events </NuxtLink>
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
  margin: 48px 0;

  .mobile-layout & {
    margin-top: -15px;
  }
}

.description {
  text-align: center;
}

h1 {
  font-size: 2.5em;
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

section.guest {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    .mobile-layout & {
      margin-bottom: 20px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 64px;
    padding: 0 128px;
    img {
      flex: 0 1 0;
      max-width: 200px;
      max-height: 300px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
    }
    div {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .mobile-layout & {
        width: 100%;
        text-align: center;
        margin-top: -40px;
      }
    }
    .mobile-layout & {
      flex-direction: column;
      padding: 0;
    }
  }
}

div.temp-grid {
  display: flex;
  width: 100%;
  padding: 24px 0;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
}

.events {
  align-items: center;
  text-align: center;

  .mobile-layout & {
    margin-top: -50px;
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
