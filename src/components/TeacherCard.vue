<template>
    <div class="card">
        <img class="teacher_image" style="" src="https://placehold.co/226x218" />
        <div class="teacher_name" style="">Bardo con l'ascia</div>
        <div class="mantra" style="">“Inhale the future, exhale the past.”</div>
        
        <v-container class="tag_container">       
                <activity-tag
                    v-for="(tag, index) in activityTags" 
                    :key="index"
                    :text="tag.text"
                />
        </v-container>
    
    </div>
</template>

<script setup lang="ts">

    const activityTags = [
        { text: "Meditation" },
        { text: "Magic Shower" },
        { text: "Breathwork" },
        { text: "Golden Pot" },
        { text: "Yoga" },
        { text: "Magic Shower" },
        { text: "Magic Shower" },
        { text: "Magic Shower" },
        { text: "Breathwork" },
        { text: "Sound" },
        { text: "Magic Shower" },
    ];

    /*
    import defaultImage from "../assets/images/activities/prova.png";

    withDefaults(
        defineProps<{
            title?: string,
            //img?: string,
        }>(), {
            title: "Default Title", // Default value for the title prop
            //img: defaultImage, // Default value for the title prop
    });*/

</script>

<style scoped>
    .card{
        width: 100%; 
        height: 100%; 
        padding: 11px; 
        background: white; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12); 
        overflow: hidden; 
        border-radius: 15px; 
        outline: 1px rgba(0, 0, 0, 0.17) solid; 
        outline-offset: -1px; 
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: center; 
        gap: 10px; 
        display: inline-flex;
    }

    .teacher_image{
        width: 226px; 
        height: 218px; 
        transform-origin: top left; 
        background: #D9D9D9; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        border-radius: 114px;
    }
    .teacher_name{
        align-self: stretch; 
        height: 43px; 
        text-align: center; 
        justify-content: center; 
        display: flex; 
        flex-direction: column; 
        color: black; 
        font-size: 24px; 
        font-family: Instrument Sans; 
        font-weight: 400; 
        line-height: 24px; 
        word-wrap: break-word;
    }

    .mantra{
        align-self: stretch; 
        height: 63px; 
        text-align: center; 
        justify-content: center; 
        display: flex; 
        flex-direction: column; 
        color: var(--Text-Default-Default, #1E1E1E); 
        font-size: 24px; 
        font-family: Inter; 
        font-weight: 600; 
        line-height: 28.80px; 
        word-wrap: break-word;
    }

    .tag_container{
        width: 100%;  
        padding: 5px;  
        display: flex; 
        flex-wrap: wrap; 
        gap: 10px; 
        justify-content: flex-start; 
    }

</style>