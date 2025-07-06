<template>
  <footer>
    <div class="footer-content">
      <div>
        <img class="logo" src="../../assets/images/headerIcon.svg" alt="logo" />
        <div class="socials">
          <img src="../../assets/socials/fb.svg" alt="facebook" />
          <img src="../../assets/socials/tw.svg" alt="twitter" />
          <img src="../../assets/socials/ig.svg" alt="instagram" />
          <img src="../../assets/socials/yt.svg" alt="youtube" />
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
        <NuxtLink to="/">Privacy Policy</NuxtLink>
        <NuxtLink to="/">Terms of Service</NuxtLink>
        <NuxtLink to="/">Cookies Policy</NuxtLink>
      </div>
      <div>
        <h3>Legal Information</h3>
        <p>+39 123 456 7890</p>
        <p>info@example.com</p>
        <p>1234 Yoga St, Wellness City, Country</p>
        <p>CF: 123456789</p>
        <p>P.IVA: 12345678901</p>
        <p>© 2023 The School. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #f3f3f3;
  display: flex;
  padding-bottom: 64px;
  font-size: 14px;
  box-shadow: 0 -1px 16px rgba(0, 0, 0, 0.1);
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
