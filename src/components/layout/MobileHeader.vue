<script setup lang="ts">
import { NuxtLink } from "#components"
import { motion, AnimatePresence } from "motion-v"
import logo from "~/assets/images/headerIcon.svg"

const route = useRoute()

function active(thisRoute: string) {
  if (route.path.startsWith(`/${thisRoute}`)) return "link active-link"
  else return "link"
}

const open = ref(false)

const { y } = useCustomScroll()
const opacity = computed(() =>
  open.value ? 1 : maprange(clamp(y.value, 0, 600), 0, 600, 0.6, 1)
)

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
}

const linkVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: "-10%",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}
</script>

<template>
  <nav :style="{ opacity: opacity }">
    <header>
      <NuxtLink to="/" class="logo">
        <logo class="header-img" />
      </NuxtLink>
      <v-icon id="icon" icon="mdi-menu" @click="toggleMenu()"></v-icon>
    </header>

    <AnimatePresence>
      <motion.div
        class="mobile-menu"
        :variants="{
          visible: {
            opacity: 1,
            display: 'flex',
            y: 0,
            transition: {
              when: 'beforeChildren',
              staggerChildren: 0.08,
              duration: 0.2,
              ease: 'easeInOut',
            },
          },
          hidden: {
            opacity: 0,
            display: 'none',
            y: '-100%',
            transition: {
              when: 'afterChildren',
              duration: 0.3,
              ease: 'easeInOut',
            },
          },
        }"
        initial="hidden"
        :animate="open ? 'visible' : 'hidden'"
        @click="closeMenu"
      >
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('yogacenter')" to="/yogacenter">
            <img
              src="../../assets/icons/center-icon.png"
              alt=""
              width="17px"
              style="vertical-align: text-bottom; margin-bottom: 2px"
            />
            The Center
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('teachers')" to="/teachers">
            <img
              src="../../assets/icons/team-icon.png"
              alt=""
              width="17px"
              style="vertical-align: text-bottom; margin-bottom: 2px"
            />
            Our Team
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('activities')" to="/activities">
            <img
              src="../../assets/icons/activities-icon.png"
              alt=""
              width="17px"
              style="vertical-align: text-bottom; margin-bottom: 2px"
            />
            Activities
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('events')" to="/events">
            <img
              src="../../assets/icons/events-icons.png"
              alt=""
              width="17px"
              style="vertical-align: text-bottom; margin-bottom: 2px"
            />
            Events
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('pricing')" to="/pricing">
            <img
              src="../../assets/icons/pricing-icon.png"
              alt=""
              width="17px"
              style="vertical-align: text-bottom; margin-bottom: 2px"
            />
            Pricing
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('contacts')" to="/contacts">
            <img
              src="../../assets/icons/contact-icon.png"
              alt=""
              width="17px"
              style="vertical-align: text-bottom; margin-bottom: 2px"
            />
            Contacts
          </NuxtLink>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </nav>
</template>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  width: 100vw;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  align-items: stretch;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: white;
  z-index: -1;

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
    &:hover {
      background-color: #e2e2e2a0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #fffc;
    }
  }
}

header {
  display: flex;
  padding: 12px;
  z-index: 2;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0% 0%;
    transform: scale(0.73);
  }
}

div {
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
