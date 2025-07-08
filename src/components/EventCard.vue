<template>
    <NuxtLink :to="`/events/${eventProp.url}`" class="card" style="">
        <div class="top" :style="{ backgroundImage: `url(${eventProp.eventImage})`}">
            <div class="calendar" style="">
                <div style="width: 87px; height: 25px; background: rgba(223.86, 84.16, 84.16, 0.83); overflow: hidden; border-bottom: 1px #B94646 solid">
                    <div style="height: 100%; text-align: center; justify-content: center; display: flex; flex-direction: column; color: rgba(137.55, 21.03, 21.03, 0.72); font-size: 20px; font-family: Instrument Sans; font-weight: 700; line-height: 20px; word-wrap: break-word">
                        AUG
                    </div>
                </div>
                <div style=" height: 35px; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #2B2B2B; font-size: 40px; font-family: Instrument Sans; font-weight: 500; line-height: 40px; word-wrap: break-word">
                    12
                </div>
                <div style=" height: 18px; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #7A7A7A; font-size: 15px; font-family: Instrument Sans; font-weight: 500; line-height: 15px; word-wrap: break-word">
                    MON
                </div>
            </div>
            <div class="title_box" style="">
                <div class="title_text" style="">
                    {{eventProp.title}}
                </div>
            </div>
        </div>

        <div class="bottom">
            <div v-if="eventProp.hostName !== 'No Name'" class="host_box" style="">
                <img class="host_image" :src="eventProp.hostImage" :alt="eventProp.hostName" />
                <div style="display: flex; gap: 6px; flex-direction: column; justify-content: start; width: 100%; color: black;">
                    <span style="color: black; font-size: 13px; font-family: Instrument Sans; font-weight: 700; line-height: 15px; word-wrap: break-word">HOST:</span>
                    <div class="host_name" style="color: black; font-size: 18px; font-family: Instrument Sans; font-weight: 400; line-height: 18px; word-wrap: break-word">
                        {{eventProp.hostName}}
                    </div>
                </div>
            </div>

            <div class="info_box" style="">
                <span style="color: black; font-size: 16px; font-family: Instrument Sans; font-weight: 400; line-height: 16px; word-wrap: break-word">🕗  </span>
                <span style="color: black; font-size: 15px; font-family: Instrument Sans; font-weight: 700; line-height: 15px; word-wrap: break-word">When</span>
                <span style="color: black; font-size: 15px; font-family: Instrument Sans; font-weight: 400; line-height: 15px; word-wrap: break-word">: 
                    {{eventProp.date}} <br>
                </span>            
                <span style="color: black; font-size: 16px; font-family: Instrument Sans; font-weight: 400; line-height: 16px; word-wrap: break-word">🌎  </span>
                <span style="color: black; font-size: 15px; font-family: Instrument Sans; font-weight: 700; line-height: 15px; word-wrap: break-word">Where</span>
                <span style="color: black; font-size: 15px; font-family: Instrument Sans; font-weight: 400; line-height: 15px; word-wrap: break-word">: 
                    {{eventProp.location}}
                </span>
            </div>
            
            <v-container class="tag_container">       
                <activity-tag
                    v-for="(tag, index) in eventProp.activityTags" 
                    :key="index"
                    :text="tag.text"
                />
            </v-container>
        </div>
        
    
    </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import type { Event } from '~/types';
    
defineProps<{
    eventProp: Event,
}>();
</script>

<style scoped>
    div {
        border: 0 solid black;
    }

    span {
        border: 0 solid black;
    }   

    .card {
        width: 100%;
        max-width: 361px; 
        text-decoration: none;
        background: white; 
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
        overflow: hidden; 
        border-radius: 15px; 
        outline: 1px rgba(0, 0, 0, 0.17) solid; 
        outline-offset: -1px; 
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: center; 
        display: inline-flex;

        .mobile-layout & {
          max-width: 1080px;
        }
    }

    .top {
        width: 100%; 
        height: 291px; 
        padding: 14px 10px;
        overflow: hidden;
        justify-content: flex-start;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        align-items: flex-end; 
        gap: 10px; 
        display: inline-flex
    }

    .bottom {
        width: 100%;
        padding: 16px;
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: stretch; 
        gap: 18px; 
        display: inline-flex;
    }

    .calendar {
       width: 87px; 
       height: 87px; 
       position: relative; 
       background: white; 
       box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.25);
       overflow: hidden; 
       border-radius: 16px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
       text-align: center;
    }

    .title_box {
        width: 220px; 
        height: 87px; 
        position: relative; 
        background: rgba(255, 255, 255, 0.60); 
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden; 
        border-radius: 16px; 
        backdrop-filter: blur(2px);
    }

    .title_text {
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 87px; /* or whatever height you want */
        color: black;
        font-size: 24px;
        font-family: Instrument Sans;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
        border: 0 solid black;
    }

    .host_box {
        background: white; 
        overflow: hidden;
        display: flex;
        gap: 16px;
        border: 0 solid black;
    }

    .host_image {
        object-fit: cover;
        width: 74px; 
        height: 74px; 
        aspect-ratio: 1;
        border-radius: 50%
    }

    .info_box {
        height: 48px; 
        border: solid black 0 ;
    }

    .tag_container{
        width: 100%;
        padding: 5px;  
        display: flex; 
        flex-wrap: wrap; 
        gap: 10px; 
        justify-content: flex-start;
        border: 0 solid black;
    }

</style>