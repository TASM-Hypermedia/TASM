<script setup lang="ts">

const res = await useAPI<
  {
    contactId: number
    contactInfo: string
  }[]
>("/getContacts")

if (res.error.value) throw res.error.value
const contactsList = res.data.value
</script>

<template>
  <PageWrap
    title="Contacts"
    img-src="./banners/contacts-banner.jpg"
  >
    <section class="contact-section">
      <div class="row">
        <div class="column"></div>
        <div class="column">
          <img src="../assets/socials/wa.png" alt="Whatsapp number" class="contact-image" />
          <br/>
          <p class="contact-info">{{contactsList![0].contactInfo}}</p>
        </div>
        <div class="column">
          <img src="../public/images/icons/phone.png" alt="Phone number" class="contact-image" />
          <br/>
          <p class="contact-info">{{contactsList![0].contactInfo}}</p>
        </div>
        <div class="column">
          <img src="../public/images/icons/mail.png" alt="Mail" class="contact-image" />
          <br/>
          <p class="contact-info">{{contactsList![1].contactInfo}}</p>
        </div>
        <div class="column"></div>
      </div>
    </section>

    <h1 class="map-title">Come and join us</h1>
    <section class="map-section">
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89509.5532925476!2d9.043172443359369!3d45.486450000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c12dfe45ee8f%3A0x6528954343c34fd4!2sMilano%20Yoga%20Space!5e0!3m2!1sit!2sit!4v1746451557377!5m2!1sit!2sit" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <h1>Contact us</h1>
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

  .mobile-layout & {
    flex-direction: column;
  }
}

.column {
  flex: 20%;
  text-align: center;
}

.contact-image {
  width: 70%;

  .mobile-layout & {
    width: 30%;
  }
}

.contact-info {
  font-size: 17px;

  .mobile-layout & {
    margin-bottom: 20px;
    font-size: 20px;
  }
}

.map-section {
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-top: 40px;

  .mobile-layout & {
    width: 90%;
    margin: auto;
  }
}

h1 {
  margin-top: 70px;

  .mobile-layout & {
    margin-top: 40px;
    margin-bottom: 10px;
  }
}

.map{
  width: 600px;
  height: 450px;
  border: 0;
  margin-top: -15px;

  .mobile-layout & {
    max-width: 90%;
    max-height: 30%;
    margin: auto;
  }
}

.form-section {
  margin-top: 40px;

  .mobile-layout & {
    margin-top: 15px;
  }
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