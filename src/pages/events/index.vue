<template>
  <page-wrap :title="'Events'" img-src="/banners/events-banner.jpg">
    <card-grid :length="eventsList.length">
      <template #card="{ index }">
        <event-card :event-prop="eventsList[index]" />
      </template>
    </card-grid>
  </page-wrap>
</template>

<script setup lang="ts">
import type { Event } from "~/types"
import { useAPI } from "~/composables/useAPI"

const { data, error } = await useAPI<Event[]>("/getAllEvents")

if (error.value) throw error.value
if (!data.value || data.value.length === 0) throw new Error("No data found")

const eventsList: Event[] = data.value
</script>

<style scoped></style>
