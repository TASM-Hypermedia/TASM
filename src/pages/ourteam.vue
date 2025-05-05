<template>
    <page-wrap :title="'Our Team'">
        <card-grid/>
    </page-wrap>
</template>

<script lang="ts">
    import CardGrid from "~/components/CardGrid.vue";

    export default {
        components: {
            CardGrid,
        },
    }

</script>
<style scoped>
div {
    background-color: #f0f0f0;
    flex: 1;
    width: 100%;
}

</style>