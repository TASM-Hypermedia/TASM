<template>
    <page-wrap :title="'Our Team'">
        <card-grid :length="teachersList.length">
            <template #card="{ index }">
                <teacher-card :teacher-prop="teachersList[index]" />
            </template>
        </card-grid>
    </page-wrap>
</template>

<script setup lang="ts">
    import type { Teacher } from '~/types';

    const teachersList: Teacher[] = [
        {
            name: "string",
            image: "https://placehold.co/226x218",
            mantra: "Come quando fuori piove",
            activityTags: [
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
            ],
        },
        {
            name: "string",
            image: "https://placehold.co/226x218",
            mantra: "Come quando fuori piove",
            activityTags: [
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
            ],
        },
        {
            name: "string",
            image: "https://placehold.co/226x218",
            mantra: "Come quando fuori piove",
            activityTags: [
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
            ],
        },
        {
            name: "string",
            image: "https://placehold.co/226x218",
            mantra: "Come quando fuori piove",
            activityTags: [
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
                { text: "Meditazione" },
            ],
        },
    ];
</script>

<style scoped>
    div {
        background-color: #a2a2a2;
        flex: 1;
        width: 100%;
    }
</style>
