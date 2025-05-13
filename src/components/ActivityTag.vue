<template>
    <div class="tag" style="">
        <div class="tag_text" style="">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">

    withDefaults(
        defineProps<{
            text?: string,
        }>(), {
            text: "Default Text", // Default value for the title prop
    });

</script>

<style scoped>
    .tag{
        width: auto;
        max-width: 100%;
        padding-left: 10px; 
        padding-right: 10px; 
        padding-top: 4px; 
        padding-bottom: 4px; 
        background: rgb(4, 84, 28); 
        overflow: hidden; 
        border-radius: 10px; 
        justify-content: center; 
        align-items: center; 
        gap: 10px; 
        display: inline-flex;
    }

    .tag_text{
        text-align: center; 
        justify-content: center; 
        display: flex; 
        flex-direction: column; 
        color: white; 
        font-size: 12px; 
        font-family: Instrument Sans; 
        font-weight: 400; 
        line-height: 10px; 
        word-wrap: break-word;
        white-space: nowrap; /* Prevents text from wrapping to the next line */
    }
    
</style>