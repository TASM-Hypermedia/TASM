<template>
    <page-wrap :title="'Activities'">
        <card-grid :length="activitiesList.length">
            <template #card="{ index }">
                <activity-card :activity-prop="activitiesList[index]" />
            </template>
        </card-grid>
    </page-wrap>
</template>

<script setup lang="ts">
    
    const activitiesList = [
        {
            title: "Meditazione",
            image: "https://placehold.co/400x400",
        },
        {
            title: "Mindfulness",
            image: "https://placehold.co/400x400",
        },
        {
            title: "Rituale",
            image: "https://placehold.co/400x400",
        },
        {
            title: "Better sleep",
            image: "https://placehold.co/400x400",
        },
        {
            title: "Golden Hour Sunset",
            image: "https://placehold.co/400x400",
        },
    ];

</script>

<style scoped>
    div {
        background-color: #f0f0f0;
        flex: 1;
        width: 100%;
    }

</style>