<template>
  <div class="component" style="">
    <div class="title">
        Trending Activities
    </div>
    
    <div class="activities">
        <div class="card">
			      <img class="card_image" src="/images/activities/yogaTherapy-banner.jpg"/>
            <div class="card_title">
                01 Yoga Therapy
            </div>
        </div>
        <div class="card">
            <div class="card_title">
                02 Ayurveda Yoga
            </div>
			      <img class="card_image" src="/images/activities/ayurvedaYoga-banner.jpg"/>
        </div>
      <div class="card">
        <img class="card_image" src="/images/activities/sensitYogaSomatics-banner.jpg"/>
        <div class="card_title">
            03 Sensit Yoga
        </div>
      </div>
      <div class="card">
          <div class="card_title">
              04 Vinyasa Yoga
          </div>
          <img class="card_image" src="/images/activities/vinyasaYoga-banner.jpg"/>
      </div>
        
    </div>
  </div>
</template>

<script setup lang="ts">


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
    height: 475px;
    max-width: 1200px;
    padding: 40px 50px;
    align-content: center;
    display: flex;
    flex-direction: row;
    gap: 1%;
    flex-wrap: wrap;
}

.card {
    width: 24.25%;
    min-width: 250px;
    height: 100%;
    padding: 20px;
	display: flex;
	flex-direction: column;
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

/* 
.media_div {
  padding: 20px;
}

.ellipse {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: #0b4e0f;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9999px;
}

.flower_img {
  width: 86px;
  height: 51px;
  left: 7px;
  top: 22px;
  position: absolute;
}

.graphics_div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.line {
  width: 100%;
  height: 1px;
  position: absolute;
  top: 70px;
  outline: 1px #9de43a solid;
  outline-offset: -2.5px;
}

.text_div {
  width: fit-content;
  height: fit-content;
  left: 225px;
  top: 26px;
  position: absolute;
  background: white;
  overflow: hidden;
}

.text {
  width: fit-content;
  height: fit-content;
  color: #0b4e0f;
  font-size: 48px;
  font-family: Palanquin;
  font-weight: 400;
  word-wrap: break-word;
} */
</style>
