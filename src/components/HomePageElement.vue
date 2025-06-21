<script setup lang="ts">
const { homePageElement } = defineProps<{
  homePageElement: {
    imgUrl: string
    altDescription: string
    title: string
    description: string
  }
}>()
</script>

<template>
  <nuxt-link to="/yogacenter" class="textImg"
    ><v-img
      :src="homePageElement.imgUrl"
      :alt="homePageElement.altDescription"
      height="100%"
      width="100%"
      contain
    >
      <v-sheet class="sheetImg">
        <div class="text-center">
          <h1>{{ homePageElement.title }}</h1>

          {{ homePageElement.description }}
        </div>
      </v-sheet>
    </v-img></nuxt-link
  >
</template>

<style scoped>
.row {
  display: flex;
}

.leftElement {
  flex: 50%;
  text-align: right;
}

.rightElement {
  flex: 50%;
  text-align: left;
}

.writtenContent {
  padding: 10px;
}

.contentTitle {
  font-size: 1.8em;
  font-weight: bold;
}

.contentSubtitle {
  font-size: 1.2em;
  font-weight: 550;
}

img {
  width: 100%;
  object-fit: cover;
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  border-radius: 15px;
}

.sheetImg {
  width: 50%;
  height: 100%;
  background-color: rgba(92, 91, 91, 0.388);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.textImg {
  color: white;
  text-decoration: none;
}
</style>
