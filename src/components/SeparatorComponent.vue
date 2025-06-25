<template>
  <div class="component" style=" ">

    <div class="media_div">
        <div class="ellipse" style="">
            <img class="flower_img" src="/public/images/LotoFlower.svg" style="">
        </div>
    </div>

    <div class="graphics_div">
        <div class="line" style=""></div>
        <div class="text_div" style="">
            <div class="text" style="">
                {{ separatorTitle }}
            </div>
        </div>
    </div>

</div>
</template>

<script setup lang="ts">
    
    defineProps<{
        separatorTitle: string,
    }>();

</script>

<style scoped>
    div {
        border: 0px solid black;
    }

    .component {
        width: 100%;
        height: fit-content;
        position: relative;
        background: white;
        display: flex;
        /* border: 0px solid black; */
    }

    .media_div {
        padding: 20px;
    }

    .ellipse {
        width: 100px;
        height: 100px; 
        /* left: 35px; 
        top: 88px;*/ 
        position: relative;
        background: #0B4E0F; 
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25); 
        border-radius: 9999px
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
        /* border: 1px solid black; */
    }

    .line {
        width: 100%; 
        height: 1px; 
        position: absolute;
        top: 70px;
        outline: 1px #9DE43A solid; 
        outline-offset: -2.50px
    }

    .text_div {
        width: fit-content; 
        height: fit-content; 
        left: 225px; 
        top: 26px; 
        position: absolute; 
        background: white; 
        overflow: hidden; 
        /* border: 1px solid black; */
    }

    .text {
        width: fit-content; 
        height: fit-content; 
        /* left: 0px; 
        top: 0px; 
        position: absolute;  */
        color: #0B4E0F; 
        font-size: 48px; 
        font-family: Palanquin; 
        font-weight: 400; 
        word-wrap: break-word
    }

</style>
