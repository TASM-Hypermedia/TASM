<script setup lang="ts">
definePageMeta({
  title: "Contacts",
  description: "Get in touch with us for any inquiries or information.",
})

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
  <PageWrap title="Contacts" img-src="./banners/contacts-banner.jpg">
    <section class="contact-section">
      <div class="row">
        <div class="column"></div>
        <div class="column">
          <a href="tel:+391234567890">
            <img
              src="../assets/socials/wa.png"
              alt="Whatsapp number"
              class="contact-image"
            />
            <br />
            <p class="contact-info">{{ contactsList![0].contactInfo }}</p>
          </a>
        </div>
        <div class="column">
          <a href="tel:+391234567890">
            <img
              src="../public/images/icons/phone.png"
              alt="Phone number"
              class="contact-image"
            />
            <br />
            <p class="contact-info">{{ contactsList![0].contactInfo }}</p>
          </a>
        </div>
        <div class="column">
          <a href="mailto:simone.pedroni@mail.polimi.it">
            <img
              src="../public/images/icons/mail.png"
              alt="Mail"
              class="contact-image"
            />
            <br />
            <p class="contact-info">{{ contactsList![1].contactInfo }}</p>
          </a>
        </div>
        <div class="column"></div>
      </div>
    </section>

    <h1 class="map-title">Come and join us</h1>
    <section class="map-section">
      <iframe
        title="Map showing the Yoga Center"
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89509.5532925476!2d9.043172443359369!3d45.486450000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c12dfe45ee8f%3A0x6528954343c34fd4!2sMilano%20Yoga%20Space!5e0!3m2!1sit!2sit!4v1746451557377!5m2!1sit!2sit"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

    <h1>Contact us</h1>
    <section class="form-section">
      <form
        action="mailto:simone.pedroni@mail.polimi.it"
        method="post"
        enctype="text/plain"
        class="contact-form"
      >
        <label for="FirstName" class="form-label">
          First name:<br />
          <input
            id="fname"
            class="form-input"
            type="text"
            name="FirstName"
            placeholder="Insert name here"
            required
          />
          <br /><br />
        </label>

        <label for="LastName" class="form-label">
          Last name:<br />
          <input
            id="lname"
            class="form-input"
            type="text"
            name="LastName"
            placeholder="Insert surname here"
            required
          />
        </label>
        <br /><br />

        <label for="Message" class="form-label">
          Message:<br />
          <textarea
            id="message"
            class="form-input"
            name="Message"
            placeholder="Insert your message here"
            cols="70"
            rows="3"
            required
          />
        </label>
        <br /><br />

        <input id="submit" type="submit" class="form-button" value="Submit" />
        <br />
        <input id="reset" type="reset" class="form-button" value="Reset" />
      </form>
    </section>
  </PageWrap>
</template>

<style scoped lang="scss">
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

  a {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
    text-decoration: none;
  }
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

.map {
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
