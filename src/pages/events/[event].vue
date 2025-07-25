<script setup lang="ts">
import type { EventType } from "~/types"
import locationSvg from "~/assets/images/homepage/icon-location2.svg"
import calendarSvg from "~/assets/images/calendar.svg"

const route = useRoute()
const eventURL = computed(() => {
  const a = route.params.event
  return typeof a === "string" ? a : a.join("")
})

const response = await useAPI<EventType>("/postEvent", {
  key: `event-${eventURL.value}`,
  method: "POST",
  body: JSON.stringify({ EventURL: eventURL.value }),
})

if (response.error.value || !response.data.value)
  throw createError({
    fatal: true,
    ...(response.error.value ?? {
      statusCode: 404,
      message: `${eventURL.value} - Event not found`, // specific error message for better clarity
    }),
  })

const event = response.data.value

const calendar_date = new Date(event.date) // parse the date string into a Date object

// The learnPoints and programPoints are derived from the event's infostr and programstr
// Those are stored as strings with a predefined format for practicality
// This code is here to quickly parse those strings into arrays so that they can be mapped to
// <li> and <h2> elements in the template -- it's simpler than it seems
const learnPoints = event.infostr
  .split("\n")
  .map((s) => s.replace(";", "").trim())
const programPoints: {
  day: string
  points: string[]
}[] = event.programstr
  .split("#")
  .map((d) => d.trim())
  .filter((d) => d.length > 0)
  .map((d) => {
    const lines = d.split("\n").map((s) => s.replace(";", "").trim())
    return {
      day: lines.shift() ?? "",
      points: lines.filter((s) => s),
    }
  })
</script>

<template>
  <PageWrap
    :key="eventURL"
    :img-src="event.mainImageURL"
    tagline="Our Events:"
    :title="event.title"
    :subtitle="event.subtitle"
  >
    <section>
      <p class="shortDesc body-text">"{{ event.shortDesc }}"</p>
    </section>
    <section class="eventInfo">
      <div class="eventInfoRow">
        <div class="eventInfoColumn">
          <SquareCalendar :date="calendar_date" />
          <div class="eventWhenText body-text">
            <h3>When:</h3>
            <p>
              {{
                calendar_date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </p>
          </div>
        </div>
        <div class="eventInfoColumn body-text">
          <div class="eventWhereIcon">
            <locationSvg />
          </div>
          <div class="eventWhereText body-text">
            <h3>Where:</h3>
            <p>{{ event.location }}</p>
          </div>
        </div>
      </div>
      <a href="mailto: simone.pedroni@mail.polimi.it" class="link-button">
        <calendarSvg class="attend body-text" style="" />
        Attend This Event
      </a>
    </section>
    <section>
      <p class="description body-text">
        {{ event.description }}
      </p>
    </section>
    <section class="pair">
      <div>
        <h1 class="title">What You'll Learn</h1>
        <ul>
          <li
            v-for="(point, index) in learnPoints"
            :key="index"
            class="body-text"
          >
            {{ point }}
          </li>
        </ul>
      </div>
      <div>
        <h1 class="title">The Program</h1>
        <template v-for="day of programPoints" :key="day">
          <h2 class="programDay body-text">{{ day.day }}</h2>
          <ul>
            <li
              v-for="(point, index) in day.points"
              :key="`${day}-${index}`"
              class="body-text"
            >
              {{ point }}
            </li>
          </ul>
        </template>
      </div>
    </section>
    <section v-if="event.guest">
      <h1 class="title">Special Guest</h1>
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
      <h1 class="title">Teachers in This Event</h1>
      <CardGrid :length="event.teachers.length">
        <template #card="{ index }">
          <card-teacher :teacher-prop="event.teachers[index]" />
        </template>
      </CardGrid>
      <NuxtLink class="link-button body-text" to="/events">
        View other events
      </NuxtLink>
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 8px;
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
  font-weight: bold;
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

.attend {
  filter: brightness(100);
}

// .link-button {
//   color: white;
//   background-color: #7265B4;
//   border-radius: 8px;
//   padding: 8px 32px;
//   margin: 16px;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

//   .attend {
//     filter: brightness(100);
//   }

//   .mobile-layout & {
//     margin-top: 50px;
//   }
// }
</style>
