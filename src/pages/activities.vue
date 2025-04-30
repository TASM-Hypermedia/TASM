<template>
    <div>
        <card-grid/>
    </div>
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