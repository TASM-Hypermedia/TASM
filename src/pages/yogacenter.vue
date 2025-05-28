<script setup lang="ts">
const { data, error } = await useAPI<
  [
    {
      YogaCenterId: number
      Title: string
      Subtitle: string
      LongDescription: string
      Room: Array<{
        Name: string
        Text: string
        UrlImage: string
      }>
    },
  ]
>("/getYogaCenter", {
  method: "GET",
})

if (error.value || !data.value) {
  console.error("Error in loading yoga center:", error.value)
  throw new Error("Yoga center not found")
}

const yogaCenter = data.value[0]
const roomContent: {
  title: string,
  description: string,
  imgUrl: string,
  altDescription: string,
  imageOnTheRight: boolean,
}[] = []

for (let i = 0; i < yogaCenter.Room.length; i++) {
  const flag = i % 2 === 0
  roomContent.push({
    title: yogaCenter.Room[i].Name,
    description: yogaCenter.Room[i].Text,
    imgUrl: "images/" + yogaCenter.Room[i].UrlImage,
    altDescription: yogaCenter.Room[i].Name + " room",
    imageOnTheRight: flag,
  })
}
</script>

<template>
  <PageWrap title="Yoga Center" img-src="./banners/yogaCenter-banner.jpg">
    <section class="description">
      <div>
        {{ yogaCenter.LongDescription }}
      </div>
    </section>

    <section class="rooms">
      <h2>AVAILABLE ROOMS</h2>
      <div v-for="(room, index) in roomContent" :key="index">
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
}
</style>