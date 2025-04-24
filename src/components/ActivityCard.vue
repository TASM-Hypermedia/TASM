<template>
    <div class="card">
        <div class="card-image"></div>
        <div class="card-title">{{title}}</div>
    </div>
</template>

<script setup lang="ts">
    /*defineProps<{
        title: string,
    }>();*/

    withDefaults(
        defineProps<{
            title?: string,
        }>(), {
            title: "Default Title", // Default value for the title prop
    });

</script>

<style scoped>
    div{
        border: 0px solid black;
    }

    .card {
        width: 100%;
        max-width: 300px; 
        height: 100%;
        max-height: 250px; 
        padding: 10px; 
        background: white; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
        overflow: hidden;
        border-radius: 15px; 
        outline: 1px rgba(0, 0, 0, 0.17) solid; 
        outline-offset: -1px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
        gap: 10px;
        border: 0px solid black;
    }

    .card-image {
        align-self: stretch; 
        width: 100%;
        height: 80%; 
        background: #D9D9D9; 
        border-radius: 7px; 
        flex: none
    }

    .card-title {
        align-self: stretch;
        text-align: center; 
        justify-content: center; 
        display: flex; 
        flex-direction: column; 
        color: black; 
        font-size: 105%; 
        font-family: Instrument Sans; 
        font-weight: 400;  
        word-wrap: break-word;
    }
   
</style>