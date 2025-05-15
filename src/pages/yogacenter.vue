<script setup lang="ts">

const { data, error } = await useAPI<[{
  YogaCenterId: number
  Title: string
  Subtitle: string
  LongDescription: string
  Room: Array<{
      Name: string;
      Text: string;
      UrlImage: string;
  }>
}]>("/getAllRooms", {
  method: "GET"
})

if (error.value || !data.value) {
  console.error("Error in loading yoga center:", error.value)
  throw new Error("Yoga center not found")
}

const yogaCenter = data.value[0]

console.log(yogaCenter)

</script>

<template>
  <PageWrap
    title="Yoga Center"
    img-src="./banners/yogaCenter-banner.jpg"
  >
    <section class="description">
      <div>
        {{yogaCenter.LongDescription}}
      </div>
    </section>

    <section class="rooms">
      <h2>AVAILABLE ROOMS</h2>
      <div v-for="(room, index) in yogaCenter.Room" :key="index">
        <content-card :content-card-prop="{title: room.Name, description: room.Text, imgUrl: room.UrlImage, imageOnTheRight: true}"></content-card>
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
}
</style>