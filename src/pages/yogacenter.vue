<script setup lang="ts">
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
      <p>AVAILABLE ROOMS</p>
      <div v-for="(room, index) in yogaCenter!.rooms" :key="index">
        <content-card :content-card-prop="room"></content-card>
      </div>
    </section>
  </PageWrap>
</template>

<style scoped>
.description {
  margin: auto;
  width: 75%;
}

.rooms {
  margin-top: 50px;
  p {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
    font-weight: bold;
  }
}
</style>