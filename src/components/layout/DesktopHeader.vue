<script setup lang="ts">
import { NuxtLink } from "#components"

const { y } = useCustomScroll()
const opacity = computed(() => maprange(clamp(y.value, 0, 600), 0, 600, 0.6, 1))

const route = useRoute()

function active(thisRoute: string) {
  if (route.path.startsWith(`/${thisRoute}`)) return "link active-link"
  else return "link"
}
</script>

<template>
  <nav
    class="header-div"
    :style="{ backgroundColor: `rgba(240, 240, 240, ${opacity})` }"
  >
    <NuxtLink to="/" class="logo">
      <img
        class="header-img"
        src="../../assets/images/headerIcon.svg"
        alt="logo"
      />
    </NuxtLink>
    <NuxtLink :class="active('yogacenter')" to="/yogacenter"
      >The Center</NuxtLink
    >
    <NuxtLink :class="active('teachers')" to="/teachers"> Our Team </NuxtLink>
    <NuxtLink :class="active('activities')" to="/activities">
      Activities
    </NuxtLink>
    <NuxtLink :class="active('events')" to="/events">Events</NuxtLink>
    <NuxtLink :class="active('pricing')" to="/pricing">Pricing</NuxtLink>
    <NuxtLink :class="active('contacts')" to="/contacts"> Contacts </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.header-div {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  padding: 16px;
  gap: 8px;
  background-color: #f0f0f0;
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.logo {
  display: block;
  margin-right: auto;
  img {
    width: 64px;
  }
}

.link {
  display: block;
  color: black;
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 8px;
  background-color: transparent;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &.active-link {
    background-color: #e2e2e2f0;
    font-weight: bold;
  }
}

.link:hover {
  background-color: #e2e2e2a0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #fffc;
}
</style>
