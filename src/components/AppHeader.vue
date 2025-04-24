<script setup lang="ts">
import { NuxtLink } from "#components"
</script>

<template>
  <nav class="header-div">
    <img class="header-img" src="../assets/images/headerIcon.svg" alt="logo" />
    <NuxtLink to="#">The Center</NuxtLink>
    <NuxtLink to="#">Our Team</NuxtLink>
    <NuxtLink to="#">Activities</NuxtLink>
    <NuxtLink to="#">Events</NuxtLink>
    <NuxtLink to="#">Pricing</NuxtLink>
    <NuxtLink class="active-link" to="#">Contacts</NuxtLink>
  </nav>
</template>

<style scoped>
.header-div {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  top: 0;
  width: 100vw;
  padding: 16px;
  gap: 8px;
  background-color: #f0f0f0;
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
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #e2e2e2;
  color: black;
}

.active-link {
  background-color: #d3d3d3;
}
</style>
