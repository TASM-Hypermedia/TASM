<script setup lang="ts">
import { NuxtLink } from "#components"
import { motion, AnimatePresence } from "motion-v"

const route = useRoute()

function active(thisRoute: string) {
  if (route.path.startsWith(`/${thisRoute}`)) return "link active-link"
  else return "link"
}

const open = ref(false)

function toggleMenu() {
  open.value = !open.value
}
</script>

<template>
  <nav>
    <header>
      <NuxtLink to="/src/public" class="logo">
        <img
          class="header-img"
          src="../../assets/images/headerIcon.svg"
          alt="logo"
        />
      </NuxtLink>
      <v-icon id="icon" icon="mdi-menu" @click="toggleMenu()"></v-icon>
    </header>

    <AnimatePresence>
      <motion.div
        key="mobile-menu"
        :variants="{
          visible: { opacity: 1, transition: { when: 'beforeChildren' } },
          hidden: { opacity: 0, transition: { when: 'afterChildren' } },
        }"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <NuxtLink :class="active('yogacenter')" class="links" to="/yogacenter"
          >The Center</NuxtLink
        >
        <NuxtLink :class="active('teachers')" class="links" to="/teachers">
          Our Team
        </NuxtLink>
        <NuxtLink :class="active('activities')" class="links" to="/activities">
          Activities
        </NuxtLink>
        <NuxtLink :class="active('events')" class="links" to="/events"
          >Events</NuxtLink
        >
        <NuxtLink :class="active('pricing')" class="links" to="/pricing"
          >Pricing</NuxtLink
        >
        <NuxtLink :class="active('contacts')" class="links" to="/contacts">
          Contacts
        </NuxtLink>
      </motion.div>
    </AnimatePresence>
  </nav>
</template>

<style scoped lang="scss">
nav {
  position: fixed;
  z-index: 1000;
  background-color: white;
  width: 100vw;
}

header {
  display: flex;
  padding: 12px;
}

.logo {
  height: 50px;
  img {
    height: 100%;
  }
}

div {
  display: none;
  flex-direction: column;
}

#icon {
  width: 50px;
  height: 50px;
}

.mdi {
  margin-left: auto;
}
</style>
