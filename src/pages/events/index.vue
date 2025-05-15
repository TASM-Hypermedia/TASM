<template>
  <page-wrap :title="'Events'">
    <card-grid :length="eventsList.length">
      <template #card="{ index }">
        <event-card :event-prop="eventsList[index]" />
      </template>
    </card-grid>

    <!-- <template> eventList.length > 0  -->

    <!-- </template> -->
    <!-- <template v-else>
            <div class="empty-state">
                No activities available at the moment.
            </div>
        </template> -->
  </page-wrap>
</template>

<script setup lang="ts">
import type { Event } from "~/types"

const eventsList: Event[] = [
  {
    EventId: 1,
    Name: "Prova Di Evento Numero 1",
    EventImage: "",
    HostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    HostName: "Nirvana Guatamala",
    Date: "August 12, 4PM - 6PM",
    StartTime: "String",
    EndTime: "String",
    Location: "Sunset Blv, LA",
    ActivityTags: [
      { Text: "Yoga" },
      { Text: "Yoga" },
      { Text: "Yoga" },
      { Text: "Yoga" },
      { Text: "Meditazione" },
      { Text: "Meditazione" },
    ],
  },
  {
    EventId: 1,
    Name: "Prova Di Evento Numero 2",
    EventImage: "",
    HostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    HostName: "Nirvana Guatamala Yogashi",
    Date: "August 12, 4PM - 6PM",
    StartTime: "String",
    EndTime: "String",
    Location: "Sunset Blv, LA",
    ActivityTags: [{ Text: "Meditazione" }, { Text: "Meditazione" }],
  },
  {
    EventId: 1,
    Name: "Prova Di Evento Numero 3",
    EventImage: "",
    HostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    HostName: "Nirvana Guatamala",
    Date: "August 12, 4PM - 6PM",
    StartTime: "String",
    EndTime: "String",
    Location: "Sunset Blv, LA",
    ActivityTags: [{ Text: "Meditazione" }, { Text: "Meditazione" }],
  },
  {
    EventId: 1,
    Name: "Prova Di Evento Numero 1",
    EventImage: "",
    HostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    HostName: "Nirvana Guatamala",
    Date: "August 12, 4PM - 6PM",
    StartTime: "String",
    EndTime: "String",
    Location: "Sunset Blv, LA",
    ActivityTags: [{ Text: "Meditazione" }, { Text: "Meditazione" }],
  },
  {
    EventId: 1,
    Name: "Prova Di Evento Numero 2",
    EventImage: "",
    HostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    HostName: "Nirvana Guatamala",
    Date: "August 12, 4PM - 6PM",
    StartTime: "String",
    EndTime: "String",
    Location: "Sunset Blv, LA",
    ActivityTags: [
      { Text: "Meditazione" },
      { Text: "Meditazione" },
      { Text: "Meditazione" },
      { Text: "Meditazione" },
      { Text: "Meditazione" },
      { Text: "Meditazione" },
      { Text: "Meditazione" },
    ],
  },
  {
    EventId: 1,
    Name: "Prova Di Evento Numero 3",
    EventImage: "",
    HostImage:
      "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    HostName: "Nirvana Guatamala",
    Date: "August 12, 4PM - 6PM",
    StartTime: "String",
    EndTime: "String",
    Location: "Sunset Blv, LA",
    ActivityTags: [{ Text: "Meditazione" }, { Text: "Meditazione" }],
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
