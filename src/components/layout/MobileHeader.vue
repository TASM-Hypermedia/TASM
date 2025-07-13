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
      <NuxtLink to="/" class="logo" aria-label="Home">
        <logo class="header-img" />
      </NuxtLink>
      <button
        class="mdi"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        :aria-expanded="open"
        @click="toggleMenu"
      >
        <Icon name="material-symbols:menu-rounded" />
      </button>
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
            <NuxtImg
              preload
              format="webp"
              src="/icons/center-icon.png"
              alt=""
              class="header-img"
            />
            The Center
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('teachers')" to="/teachers">
            <NuxtImg
              preload
              format="webp"
              src="/icons/team-icon.png"
              alt=""
              class="header-img"
            />
            Our Team
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('activities')" to="/activities">
            <NuxtImg
              preload
              format="webp"
              src="/icons/activities-icon.png"
              alt=""
              class="header-img"
            />
            Activities
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('events')" to="/events">
            <NuxtImg
              preload
              format="webp"
              src="/icons/events-icon.png"
              alt=""
              class="header-img"
            />
            Events
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('pricing')" to="/pricing">
            <NuxtImg
              preload
              format="webp"
              src="/icons/pricing-icon.png"
              alt=""
              class="header-img"
            />
            Pricing
          </NuxtLink>
        </motion.div>
        <motion.div :variants="linkVariants">
          <NuxtLink :class="active('contacts')" to="/contacts">
            <NuxtImg
              preload
              format="webp"
              src="/icons/contact-icon.png"
              alt=""
              class="header-img"
            />
            Contacts
          </NuxtLink>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </nav>
</template>

<style scoped lang="scss">
.header-img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

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
    display: flex;
    align-items: center;
    justify-content: center;

    &.active-link {
      background-color: #ccbce3;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #bfb0d7;
    }

    &:hover {
      background-color: #ccbce3;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #bfb0d7;
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
  width: 63px;

  svg {
    position: absolute;
    width: 87px;
    height: 58px;
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
  cursor: pointer;
  margin: 8px;
  margin-left: auto;
  width: 26px;
  height: 26px;
  span {
    width: 100%;
    height: 100%;
  }
}
</style>
