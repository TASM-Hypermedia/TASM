<template>
  <page-wrap :title="'Events'">
    <card-grid :length="eventsList.length">
      <template #card="{ index }">
        <event-card :event-prop="eventsList[index]" />
      </template>
    </card-grid>
  </page-wrap>
</template>

<script setup lang="ts">
import type { Event } from "~/types"

const eventsList: Event[] = [
  {
    eventId: 1,
    title: "Prova Di Evento Numero 1",
    eventImage: "",
    hostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    hostName: "Nirvana Guatamala",
    date: "August 12, 4PM - 6PM",
    startTime: "String",
    endTime: "String",
    location: "Sunset Blv, LA",
    activityTags: [
      { text: "Yoga" },
      { text: "Yoga" },
      { text: "Yoga" },
      { text: "Yoga" },
      { text: "Meditazione" },
      { text: "Meditazione" },
    ],
  },
  {
    eventId: 1,
    title: "Prova Di Evento Numero 2",
    eventImage: "",
    hostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    hostName: "Nirvana Guatamala Yogashi",
    date: "August 12, 4PM - 6PM",
    startTime: "String",
    endTime: "String",
    location: "Sunset Blv, LA",
    activityTags: [{ text: "Meditazione" }, { text: "Meditazione" }],
  },
  {
    eventId: 1,
    title: "Prova Di Evento Numero 3",
    eventImage: "",
    hostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    hostName: "Nirvana Guatamala",
    date: "August 12, 4PM - 6PM",
    startTime: "String",
    endTime: "String",
    location: "Sunset Blv, LA",
    activityTags: [{ text: "Meditazione" }, { text: "Meditazione" }],
  },
  {
    eventId: 1,
    title: "Prova Di Evento Numero 1",
    eventImage: "",
    hostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    hostName: "Nirvana Guatamala",
    date: "August 12, 4PM - 6PM",
    startTime: "String",
    endTime: "String",
    location: "Sunset Blv, LA",
    activityTags: [{ text: "Meditazione" }, { text: "Meditazione" }],
  },
  {
    eventId: 1,
    title: "Prova Di Evento Numero 2",
    eventImage: "",
    hostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    hostName: "Nirvana Guatamala",
    date: "August 12, 4PM - 6PM",
    startTime: "String",
    endTime: "String",
    location: "Sunset Blv, LA",
    activityTags: [
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
      { text: "Meditazione" },
    ],
  },
  {
    eventId: 1,
    title: "Prova Di Evento Numero 3",
    eventImage: "",
    hostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    hostName: "Nirvana Guatamala",
    date: "August 12, 4PM - 6PM",
    startTime: "String",
    endTime: "String",
    location: "Sunset Blv, LA",
    activityTags: [{ text: "Meditazione" }, { text: "Meditazione" }],
  },
]
</script>

<style scoped>
div {
  background-color: #d9d9d9;
  flex: 1;
  width: 100%;
}
</style>
