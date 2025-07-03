<template>
  <div class="component" style="">
    <div class="title">
        Trending Activities
    </div>
    
    <div class="activities">
        
        <div v-for="(trendingActivity, i) in activitiesProp" :key="i" :class="(i%2==0) ? 'reverse_card': 'normal_card'">
            <img class="card_image" :src="trendingActivity.image"/>
            <div class="card_title"> {{"0" + (i+1).toString() + " " + trendingActivity.title}} </div>
        </div>
        
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Activity } from "~/types"

  defineProps<{
    activitiesProp?: Array<Activity>;
  }>()

</script>

<style scoped>
div {
  border: 0px solid black;
}

.component {
    width: 100%;
    height: fit-content;
    align-items: center;
    /* position: relative; */
    background: white;
    display: flex;
    flex-direction: column;
    gap: 0px;
}

.title {
    text-align: center; 
    justify-content: center; 
    /* display: flex;  */
    flex-direction: column; 
    color: black; 
    font-size: 80px; 
    font-family: Italiana; 
    font-weight: 400; 
    line-height: 96px; 
    word-wrap: break-word;
}

.activities {
    width: 100%;
    max-width: 1200px;
    height: fit-content;
    padding: 40px 2.5%;
    display: flex;
    /* flex-direction: row;  */
    justify-content: space-around;
    align-items: center;
    gap: 1%;
    flex-wrap: wrap;
}

.normal_card {
    width: 24.25%;
    min-width: 260px;
    height: 375px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.reverse_card {
    width: 24.25%;
    min-width: 260px;
    height: 375px;
    padding: 20px;
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
}

.card_image {
	width: 100%;
	height: 85%;
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
	object-fit: cover;
	
}

.card_title{
    text-align: center;
    color: black; 
    font-size: 24px;
	  font-weight: 600;
    font-family: Italiana;
}


</style>
