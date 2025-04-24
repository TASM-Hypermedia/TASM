<template>
  <main>
    <HeroPage
      :title="teacher.name"
      :subtitle="teacher.mantra"
      tagline="The Teachers:"
      url-img="Team.jpg"
    />
    <article>
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
            <v-card-title>What we'll do</v-card-title>
            <v-card-text>
              <p>{{ teacher.description }}</p>
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
    </article>
  </main>
</template>

<script setup lang="ts">
import HeroPage from "~/components/HeroPage.vue"
interface Teacher {
  name: string
  description: string
  mantra: string
  mantraSubtitle: string
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
    }),
  }
)
</script>
