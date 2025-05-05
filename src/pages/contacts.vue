<script setup lang="ts">
</script>

<template>
  <PageWrap
    :title="'Contacts'"
  >
    <section class="contacts">
      <div class="row">
        <div class="column"></div>
        <div class="column">
          <img src="../assets/images/socials/wa.png" alt="Whatsapp" style="width: 40%" />
          <br/>
          <span>+39 3123456789</span>
        </div>
        <div class="column">
          <img src="../assets/images/phone-icon.png" alt="Phone" style="width: 40%" />
          <br/>
          <span>+39 3123456789</span>
        </div>
        <div class="column">
          <img src="../assets/images/mail-icon.png" alt="Mail" style="width: 40%" />
          <br/>
          <span>info@yoga.com</span>
        </div>
        <div class="column"></div>
      </div>
    </section>

    <section class="map">
      <div class="map-title">COME AND JOIN US</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89509.5532925476!2d9.043172443359369!3d45.486450000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c12dfe45ee8f%3A0x6528954343c34fd4!2sMilano%20Yoga%20Space!5e0!3m2!1sit!2sit!4v1746451557377!5m2!1sit!2sit" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </PageWrap>
</template>

<style scoped>
.row {
  width: 80%;
  margin: auto;
  display: flex;
}

.column {
  flex: 20%;
  text-align: center;
}

.map {
  background-color: #F5F5F5;
  width: 100%;
  text-align: center;
  color: #1E1E1E;
  padding: 20px;
  margin-top: 40px;
}

.map-title {
  margin-bottom: 20px;
}

</style>