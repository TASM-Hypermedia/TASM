<script setup lang="ts">
import Logo from "~/assets/images/headerIcon.svg"
import fb from "~/assets/socials/fb.svg"
import ig from "~/assets/socials/ig.svg"
import yt from "~/assets/socials/yt.svg"
</script>

<template>
  <footer>
    <div class="footer-content">
      <div>
        <NuxtLink to="/" aria-label="HomePage"><Logo class="logo" /></NuxtLink>
        <div class="socials">
          <NuxtLink to="https://www.facebook.com/polimi/">
            <fb alt="facebook" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/polimi/">
            <ig alt="instagram" />
          </NuxtLink>
          <NuxtLink to="https://www.youtube.com/polimi">
            <yt alt="youtube" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <h2>The School</h2>
        <NuxtLink to="/yogacenter">The Center</NuxtLink>
        <NuxtLink to="/teachers">Our Team</NuxtLink>
        <NuxtLink to="/activities">Activities</NuxtLink>
        <NuxtLink to="/events">Events</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contacts">Contacts</NuxtLink>
      </div>
      <div>
        <h2>Policies</h2>
        <NuxtLink
          to="https://www.polimi.it/il-politecnico/comunicazione/privacy"
        >
          Privacy Policy
        </NuxtLink>
      </div>
      <div>
        <h2>Legal Information</h2>
        <p>+39 123 456 7890</p>
        <p>info@inner-bloom.com</p>
        <p>Piazza Leonardo da Vinci, 32, 20133 Milan (MI), Italy</p>
        <p>CF: 123456789</p>
        <p>P.IVA: 12345678901</p>
        <p>© 2025 The School. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: linear-gradient(
    0deg,
    rgba(216, 207, 231, 1) 0%,
    rgba(234, 229, 242, 1) 68%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  padding-bottom: 64px;
  font-size: 14px;
  order: 1000;
  width: 100vw;

  .footer-content {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    padding: 32px 128px;

    .mobile-layout & {
      padding: 16px;
      flex-direction: column;
      div {
        flex: 1 1 0;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      margin-right: 32px;
      min-width: 100px;
      flex: 1 1 150px;

      .socials {
        display: flex;
        flex-direction: row;
        margin-right: 48px;
        gap: 8px;

        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}

img {
  cursor: pointer;
}

.logo {
  width: 128px;
  margin-right: auto;
  margin-bottom: 16px;
}

a,
p {
  color: #333;
  text-decoration: none;
  margin-bottom: 4px;
}
</style>
