<script setup lang="ts">
import { NuxtLink } from "#components"

const route = useRoute()

function active(thisRoute: string) {
  if (route.path.startsWith(`/${thisRoute}`)) return "link active-link"
  else return "link"
}

const open = ref(false)

function toggleMenu () {
  open.value = !open.value
}
</script>

<template>
  <nav>
    <NuxtLink to="/src/public" class="logo">
      <img
        class="header-img"
        src="../../assets/images/headerIcon.svg"
        alt="logo"
      />
    </NuxtLink>
    <v-icon id="icon" icon="mdi-menu" @click="toggleMenu()"></v-icon>
  </nav>

  <div :style="open ? 'display: flex' : 'display: none'">
    <NuxtLink :class="active('yogacenter')" class="links" to="/yogacenter"
    >The Center</NuxtLink
    >
    <NuxtLink :class="active('teachers')" class="links" to="/teachers"> Our Team </NuxtLink>
    <NuxtLink :class="active('activities')" class="links" to="/activities">
      Activities
    </NuxtLink>
    <NuxtLink :class="active('events')" class="links" to="/events">Events</NuxtLink>
    <NuxtLink :class="active('pricing')" class="links" to="/pricing">Pricing</NuxtLink>
    <NuxtLink :class="active('contacts')" class="links" to="/contacts"> Contacts </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  overflow: hidden;
}

div {
  display: none;
  flex-direction: column;
}

#icon{
  width: 50px;
  height: 50px;
}

.mdi {
  float: right;
  margin-left: auto;
}
</style>