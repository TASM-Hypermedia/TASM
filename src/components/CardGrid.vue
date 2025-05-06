<template>
  <v-container class="">
    <v-row no-gutters>
        <v-col
            v-for="n in 3"
            :key="n"
            class="pa-3"
            cols="12"
            sm="12"
            md="6"
            lg="4"
        >
        <!--
                <activity-card :title="'Prova ' +  n " />
                
            -->

        <teacher-card
            :teacher="{
            name: 'Bardo con l\'ascia',
            image: 'https://placehold.co/226x218',
            mantra: 'Inhale the future, exhale the past.',
            activityTags: [
                { text: 'Meditazione' },
                { text: 'Mindfulness' },
                { text: 'Rituale' },
                { text: 'Better sleep' },
                { text: 'Golden Hour Sunset' },
            ],
            }"
        />

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
/*
import ActivityCard from "./ActivityCard.vue";
import TeacherCard from "./TeacherCard.vue";

// Props to determine the type of cards and images
defineProps<{
    cardType: "activity" | "teacher"; // Determines which card to render
    activityImage?: string; // Optional image for activity cards
    teacherImage?: string; // Optional image for teacher cards
}>();*/
</script>

<style scoped></style>
