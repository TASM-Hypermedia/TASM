<template>
    <div class="card" style="">
        <div class="top" style="">
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
            <div class="host_box" style="">
                <img class="host_image" style="width: 74px; height: 74px; left: 11.50px; top: 1px; position: absolute; border-radius: 9999px" :src="eventProp.hostImage" />
                <div style="width: 51px; height: 17px; left: 126px; top: 12px; position: absolute">
                    <span style="color: black; font-size: 15px; font-family: Instrument Sans; font-weight: 700; line-height: 15px; word-wrap: break-word">HOST:</span>
                    
                </div>
                <div class="host_name" style="width: 141px; height: 18px; left: 126px; top: 38px; position: absolute; color: black; font-size: 18px; font-family: Instrument Sans; font-weight: 400; line-height: 18px; word-wrap: break-word">
                    {{eventProp.hostName}}
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
        
    
    </div>
</template>

<script setup lang="ts">
    import type { Event } from '~/types';

    // const actTags = [
    //     { text: "Meditazione" },
    //     { text: "Shower" },
    //     { text: "Kebab" },
    //     { text: "Kebab" },
    //     { text: "Kebab" },
    //     { text: "Kebab" },
    //     { text: "Kebab" },
    //     { text: "Meditazione" },
    //     { text: "Meditazione" },
    //     { text: "Meditazione" },
    //     { text: "Yogashi" },
    //     { text: "Senso Unico" },
    // ];
    
    // const eventProps: Event = {
    //     title: "Prova di evento numero 1",
    //     eventImage: "",
    //     hostImage: "https://images.generated.photos/SjuKv9Sz8wkQuT4eeN_7FaoE09Wq8j6qd8LeTkcrjCA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAzNTU3LmpwZw.jpg",
    //     hostName: "Nirvana Guatamala",
    //     date: "August 12, 4PM - 6PM",
    //     startTime: "string",
    //     endTime: "string",
    //     location: "Sunset Blv, LA",
    //     activityTags: [
    //         { text: "Meditazione" },
    //         { text: "Meditazione" },           
    //     ],
    // };
    
    defineProps<{
        eventProp: Event,
    }>();
</script>

<style scoped>
    div {
        border: 0px solid black;
    }

    span {
        border: 0px solid black;
    }   

    .card {
        width: 100%;
        max-width: 361px; 
        /* padding-left: 11px; 
        padding-bottom: 11px; 
        padding-right: 11px;  */
        background: white; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12); 
        overflow: hidden; 
        border-radius: 15px; 
        outline: 1px rgba(0, 0, 0, 0.17) solid; 
        outline-offset: -1px; 
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: center; 
        gap: 18px; 
        display: inline-flex;
    }

    .top {
        width: 100%; 
        height: 291px; 
        padding: 14px 10px;
        overflow: hidden; 
        background-image: url(https://media.post.rvohealth.io/wp-content/uploads/2024/09/multiracial-group-practicing-yoga-in-studio-732x549-thumbnail.jpg); 
        justify-content: flex-start; 
        align-items: flex-end; 
        gap: 10px; 
        display: inline-flex
    }

    .bottom {
        padding: 14px 10px;
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: center; 
        gap: 18px; 
        display: inline-flex;
    }

    .calendar {
       width: 87px; 
       height: 87px; 
       position: relative; 
       background: white; 
       box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.25); 
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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
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
        border: 0px solid black;

        /* left: 25px; 
        justify-content: center; 
        width: 193px; 
        top: 20px; 
        position: absolute; 
        text-align: center; 
        align-items: center;
        display: flex; 
        flex-direction: column; 
        color: black; 
        font-size: 24px; 
        font-family: Instrument Sans; 
        font-weight: 500; 
        line-height: 24px; 
        word-wrap: break-word; */ 
    }

    .host_box {
        width: 275px; 
        height: 95px;
        position: relative; 
        background: white; 
        overflow: hidden;
        flex-direction: column;
        border: 0px solid black;
    }

    .info_box {
        width: 321px; 
        height: 48px; 
        border: solid black 0px ; 
    }

    .tag_container{
        width: 100%;
        padding: 5px;  
        display: flex; 
        flex-wrap: wrap; 
        gap: 10px; 
        justify-content: flex-start;
        border: 0px solid black;
    }

</style>