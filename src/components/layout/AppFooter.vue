<template>
  <footer>
    <div class="footer-content">
      <div>
        <img class="logo" src="../../assets/images/headerIcon.svg" alt="logo" />
        <div class="socials">
          <NuxtLink to="https://www.facebook.com/polimi/"
            ><img src="../../assets/socials/fb.svg" alt="facebook"
          /></NuxtLink>
          <NuxtLink to="https://www.instagram.com/polimi/"
            ><img src="../../assets/socials/ig.svg" alt="instagram"
          /></NuxtLink>
          <NuxtLink to="https://www.youtube.com/polimi"
            ><img src="../../assets/socials/yt.svg" alt="youtube"
          /></NuxtLink>
        </div>
      </div>
      <div>
        <h3>The School</h3>
        <NuxtLink to="/yogacenter">The Center</NuxtLink>
        <NuxtLink to="/teachers">Our Team</NuxtLink>
        <NuxtLink to="/activities">Activities</NuxtLink>
        <NuxtLink to="/events">Events</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contacts">Contacts</NuxtLink>
      </div>
      <div>
        <h3>Policies</h3>
        <NuxtLink to="https://www.polimi.it/il-politecnico/comunicazione/privacy"
          >Privacy Policy</NuxtLink
        >
      </div>
      <div>
        <h3>Legal Information</h3>
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
  background: linear-gradient(0deg,rgba(216, 207, 231, 1) 0%, rgba(234, 229, 242, 1) 68%, rgba(255, 255, 255, 1) 100%);
  display: flex;
  padding-bottom: 64px;
  font-size: 14px;
  // box-shadow: 0 -1px 16px rgba(0, 0, 0, 0.1);
  order: 1000;

  .footer-content {
    margin: auto;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    padding: 32px 128px;

    .mobile-layout & {
      padding: 16px;
      flex-direction: column;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-right: 32px;
      min-width: 100px;
      flex: 1;

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
