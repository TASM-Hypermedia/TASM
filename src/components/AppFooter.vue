<template>
  <footer>
    <div>
      <img class="logo" src="../assets/images/headerIcon.svg" alt="logo" />
      <div class="socials">
        <img src="../assets/images/socials/fb.svg" alt="facebook" />
        <img src="../assets/images/socials/tw.svg" alt="twitter" />
        <img src="../assets/images/socials/ig.svg" alt="instagram" />
        <img src="../assets/images/socials/yt.svg" alt="youtube" />
      </div>
    </div>
    <div>
      <h3>The School</h3>
      <NuxtLink to="#">The Center</NuxtLink>
      <NuxtLink to="#">Our Team</NuxtLink>
      <NuxtLink to="#">Activities</NuxtLink>
      <NuxtLink to="#">Events</NuxtLink>
      <NuxtLink to="#">Pricing</NuxtLink>
      <NuxtLink to="#">Contacts</NuxtLink>
    </div>
    <div>
      <h3>Policies</h3>
      <NuxtLink to="#">Privacy Policy</NuxtLink>
      <NuxtLink to="#">Terms of Service</NuxtLink>
      <NuxtLink to="#">Cookies Policy</NuxtLink>
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
  </footer>
</template>

<style scoped>
footer {
  background-color: #f3f3f3;
  padding: 32px;
  gap: 16px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 64px;
  font-size: 14px;
  box-shadow: 0 -1px 16px rgba(0, 0, 0, 0.1);
}

img {
  cursor: pointer;
}

footer div {
  display: flex;
  flex-direction: column;
}

.logo {
  width: 128px;
  margin-right: auto;
  margin-bottom: 16px;
}

.socials {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.socials img {
  width: 32px;
  height: 32px;
}

a,
p {
  color: #333;
  text-decoration: none;
  margin-bottom: 4px;
}
</style>
