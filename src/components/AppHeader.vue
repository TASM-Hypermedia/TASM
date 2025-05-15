<script setup lang="ts">
import { NuxtLink } from "#components"

const { y } = useScroll()
const opacity = computed(() => maprange(clamp(y.value, 0, 600), 0, 600, 0.6, 1))
</script>

<template>
  <nav
    class="header-div"
    :style="{ backgroundColor: `rgba(240, 240, 240, ${opacity})` }"
  >
    <img class="header-img" src="../assets/images/headerIcon.svg" alt="logo" />
    <NuxtLink to="#">The Center</NuxtLink>
    <NuxtLink to="/teachers">Our Team</NuxtLink>
    <NuxtLink to="/activities">Activities</NuxtLink>
    <NuxtLink to="/events">Events</NuxtLink>
    <NuxtLink to="#">Pricing</NuxtLink>
    <NuxtLink class="active-link" to="/contacts">Contacts</NuxtLink>
  </nav>
</template>

<style scoped>
.header-div {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  top: 0;
  width: 100vw;
  padding: 16px;
  gap: 8px;
  background-color: #f0f0f0;
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

img {
  display: block;
  width: 64px;
  margin-right: auto;
}

ul {
  list-style-type: none;
  padding-right: 50px;
}

li {
  float: right;
}

a {
  display: block;
  color: black;
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 8px;
  background-color: transparent;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

a:hover {
  background-color: #e2e2e2a0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #fffc;
}

.active-link {
  background-color: #e2e2e2f0;
  font-weight: bold;
}
</style>
