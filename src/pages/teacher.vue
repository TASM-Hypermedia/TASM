<template>
  <PageWrap
    :title="teacher.name"
    :subtitle="teacher.mantra"
    tagline="The Teachers:"
    img-src="Team.jpg"
  >
    <v-row>
      <v-col cols="6">
        <v-card>
          <!--<v-card-title>Teacher Mantra</v-card-title>-->
          <v-card-text>
            <v-img src="../assets/images/Teacher1.jpg"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>{{ teacher.name }}</v-card-title>
          <v-card-subtitle>Who am I?</v-card-subtitle>
          <v-card-text>
            <p>{{ teacher.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>What I've done</v-card-title>
          <v-card-text>
            <p>{{ teacher.history }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <!--<v-card-title>Teacher Mantra</v-card-title>-->
          <v-card-text>
            <v-img src="../assets/images/Teacher1.jpg"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="n in 6"
        :key="n"
        class="pa-3"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <content-preview :content-preview="contentPrev" />
      </v-col>
    </v-row>
  </PageWrap>
</template>

<script setup lang="ts">
import ContentPreview from "~/components/ContentPreview.vue"
interface Teacher {
  name: string
  description: string
  mantra: string
  mantraSubtitle: string
  history: string
}
withDefaults(
  defineProps<{
    teacher?: Teacher
  }>(),
  {
    teacher: () => ({
      name: "",
      description: "",
      mantra: "",
      mantraSubtitle: "",
      history: "",
    }),
  }
)

const contentPrev = {
  title: "Yoga for Beginners",
  subtitle:
    "Mother, mentor, poet, artist, volunteer, bestselling author and host of the Practice You Podcast, Elena Brower graduated Cornell University in 1992, designed textiles and apparel for almost a decade before shifting her focus to yoga, meditation, writing and art. Teaching asana since 1999, studying and practicing Zen meditation since 2020, she received the Buddhist Precepts from Roshi Joan Halifax at Upaya Zen Center in 2023. Now a candidate for Buddhist Chaplaincy, Elena offers her time in hospice and penitentiary settings. Her bestselling journals and books explore stages of life and listening. Her next book, Hold Nothing, will be published by Shambhala Publications in late 2025",
  urlImg: "Team.jpg",
}
</script>
