<script setup lang="ts">

const pricingsList = [
  {
    title: "Base",
    price: 50,
    darkMode: false,
    pricingItems: [
      {text: "3 courses"},
      {text: "1H meeting with an assigned teacher"}
    ],
  },
  {
    title: "Premium",
    price: 75,
    darkMode: true,
    pricingItems: [
      {text: "6 courses"},
      {text: "3 months coverage with a teacher"}
    ],
  },
  {
    title: "Deluxe",
    price: 100,
    darkMode: false,
    pricingItems: [
      {text: "10 courses"},
      {text: "6 months coverage with a teacher"}
    ],
  }
];

</script>

<template>
  <PageWrap
    title="Contacts"
  >

    <section style="width: 100%">
      <card-grid :length="pricingsList.length">
        <template #card="{ index }">
          <price-card :price-prop="pricingsList[index]" />
        </template>
      </card-grid>
    </section>

    <section class="contact-section">
      <div class="row">
        <div class="column"></div>
        <div class="column">
          <img src="../assets/socials/wa.png" alt="Whatsapp number" class="contact-image" />
          <br/>
          <span>+39 3123456789</span>
        </div>
        <div class="column">
          <img src="../public/images/icons/phone.png" alt="Phone number" class="contact-image" />
          <br/>
          <span>+39 3123456789</span>
        </div>
        <div class="column">
          <img src="../public/images/icons/mail.png" alt="Mail" class="contact-image" />
          <br/>
          <span>info@yoga.com</span>
        </div>
        <div class="column"></div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-title">COME AND JOIN US</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89509.5532925476!2d9.043172443359369!3d45.486450000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c12dfe45ee8f%3A0x6528954343c34fd4!2sMilano%20Yoga%20Space!5e0!3m2!1sit!2sit!4v1746451557377!5m2!1sit!2sit" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <section class="form-section">
      <form action="mailto:simone.pedroni@mail.polimi.it" method="post" enctype="text/plain" class="contact-form">
        <label for="fname" class="form-label">Name</label> <br/>
        <input id="fname" class="form-input" type="text" name="fname" placeholder="Value" required /> <br/><br/>

        <label for="lname" class="form-label">Surname</label> <br/>
        <input id="lname" class="form-input" type="text" name="lname" placeholder="Value" required /> <br/><br/>

        <label for="mail" class="form-label">Mail</label> <br/>
        <input id="mail" class="form-input" type="email" name="mail" placeholder="Value" required /> <br/><br/>

        <label for="message" class="form-label">Message</label> <br/>
        <textarea id="message" class="form-input" name="message" placeholder="Insert your message here" cols="70" rows="3" required></textarea> <br/><br/>

        <input id="submit" type="submit" class="form-button" value="Submit"> <br/>
        <input id="reset" type="reset" class="form-button" value="Reset">
      </form>
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

.contact-image {
  width: 50%;
}

.map-section {
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

.form-section {
  margin-top: 40px;
}

.contact-form {
  border: 1px solid #919090;
  border-radius: 10px;
  padding: 30px 20px;
  width: 80%;
  margin: auto;
}

.form-input {
  border: 1px solid #919090;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  width: 100%;
}

.form-button {
  width: 100%;
  color: white;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
}

</style>