<script setup lang="ts">
definePageMeta({
  title: "Yoga Center",
  description: "Explore our Yoga Center, where tranquility meets practice.",
})

const res = await useAPI<{
  title: string
  subtitle: string
  description: string
  rooms: {
    title: string
    description: string
    imgUrl: string
    altDescription: string
    imageOnTheRight: boolean
  }[]
}>("/getYogaCenter")

if (res.error.value) throw res.error.value
const yogaCenter = res.data.value
</script>

<template>
  <PageWrap title="Yoga Center" img-src="./banners/yogaCenter-banner.jpg">
    <section class="description">
      <div>{{ yogaCenter!.description }}</div>
    </section>

    <section class="rooms">
      <h1>Available Rooms</h1>
      <div v-for="(room, index) in yogaCenter!.rooms" :key="index">
        <content-card :content-card-prop="room" separator />
      </div>
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
  text-align: center;
  max-width: 900px;
}

h1 {
  text-align: center;
  font-size: 2.5em;
}
</style>
