<script setup lang="ts">

const { data, error } = await useAPI<{
  YogaCenterId: number
  Title: string
  Subtitle: string
  LongDescription: string
  Rooms: Array<{
      Name: string;
      Text: string;
      UrlImage: string;
  }>
}>("/getAllRooms", {
  method: "GET"
})

if (error.value || !data.value) {
  console.error("Error in loading yoga center:", error.value)
  throw new Error("Yoga center not found")
}

console.log(data)

</script>

<template>
  <PageWrap
    title="Yoga Center"
  >
    <div>
      {{data?.LongDescription}}
    </div>
  </PageWrap>
</template>

<style scoped>

</style>