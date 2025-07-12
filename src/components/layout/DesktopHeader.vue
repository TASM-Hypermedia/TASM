<script setup lang="ts">
import { NuxtLink } from "#components"
import logo from "~/assets/images/headerIcon.svg"

const { y } = useCustomScroll()
const opacity = computed(() =>
  maprange(clamp(y.value, 0, 600), 0, 600, 0.6, 0.9)
)

const route = useRoute()

function active(thisRoute: string) {
  if (route.path.startsWith(`/${thisRoute}`)) return "link active-link"
  else return "link"
}
</script>

<template>
  <nav
    class="header-div"
    :style="{ backgroundColor: `rgba(232, 221, 241, ${opacity})` }"
  >
    <NuxtLink to="/" class="logo">
      <logo class="header-img" />
    </NuxtLink>
    <NuxtLink :class="active('yogacenter')" to="/yogacenter">
      <img
        src="../../assets/icons/center-icon.png"
        alt=""
        width="17px"
        style="vertical-align: text-bottom; margin-bottom: 2px"
      />
      The Center
    </NuxtLink>
    <NuxtLink :class="active('teachers')" to="/teachers">
      <img
        src="../../assets/icons/team-icon.png"
        alt=""
        width="17px"
        style="vertical-align: text-bottom; margin-bottom: 2px"
      />
      Our Team
    </NuxtLink>
    <NuxtLink :class="active('activities')" to="/activities">
      <img
        src="../../assets/icons/activities-icon.png"
        alt=""
        width="17px"
        style="vertical-align: text-bottom; margin-bottom: 2px"
      />
      Activities
    </NuxtLink>
    <NuxtLink :class="active('events')" to="/events">
      <img
        src="../../assets/icons/events-icons.png"
        alt=""
        width="17px"
        style="vertical-align: text-bottom; margin-bottom: 2px"
      />
      Events
    </NuxtLink>
    <NuxtLink :class="active('pricing')" to="/pricing">
      <img
        src="../../assets/icons/pricing-icon.png"
        alt=""
        width="17px"
        style="vertical-align: text-bottom; margin-bottom: 2px"
      />
      Pricing
    </NuxtLink>
    <NuxtLink :class="active('contacts')" to="/contacts">
      <img
        src="../../assets/icons/contact-icon.png"
        alt=""
        width="17px"
        style="vertical-align: text-bottom; margin-bottom: 2px"
      />
      Contacts
    </NuxtLink>
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
  background-color: rgb(229, 221, 241);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
}

.logo {
  display: block;
  margin-right: auto;
  height: 42px;
  width: 64px;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0% 0%;
    transform: scale(0.73);
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
    background-color: #ccbce3;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #bfb0d7;
  }
}

.link:hover {
  background-color: #ccbce3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #bfb0d7;
}
</style>
