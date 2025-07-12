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
          <a class="body-text" href="tel:+391234567890">
            <NuxtImg
              preload
              format="webp"
              src="/images/icons/wa.png"
              alt="Whatsapp number"
              class="contact-image"
            />
            <br />
            <p class="contact-info">{{ contactsList![0].contactInfo }}</p>
          </a>
        </div>
        <div class="column">
          <a class="body-text" href="tel:+391234567890">
            <NuxtImg
              preload
              format="webp"
              src="/images/icons/phone.png"
              alt="Phone number"
              class="contact-image"
            />
            <br />
            <p class="contact-info">{{ contactsList![0].contactInfo }}</p>
          </a>
        </div>
        <div class="column">
          <a class="body-text" href="mailto:simone.pedroni@mail.polimi.it">
            <NuxtImg
              preload
              format="webp"
              src="/images/icons/mail.png"
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

    <h1 class="map-title title">Come and join us</h1>
    <section class="map-section">
      <!-- FOR SOME REASON, google refuses to display the map on firefox, we work around that by putting 2 of them :) -->
      <iframe
        title="Map"
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1444071872493!2d9.227271999999997!3d45.478155199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67dd11753%3A0x8e30fae1774a3377!2sPolitecnico%20di%20Milano!5e1!3m2!1sen!2sit!4v1752315415681!5m2!1sen!2sit"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style="display: none"
      ></iframe>
      <iframe
        title="Map"
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1444071872493!2d9.227271999999997!3d45.478155199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67dd11753%3A0x8e30fae1774a3377!2sPolitecnico%20di%20Milano!5e1!3m2!1sen!2sit!4v1752315415681!5m2!1sen!2sit"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

    <h1 class="title">Contact us</h1>
    <section class="form-section body-text">
      <form
        action="mailto:simone.pedroni@mail.polimi.it"
        method="post"
        enctype="text/plain"
        class="contact-form"
      >
        <label for="FirstName" class="form-label">
          First name:<br />
          <input
            id="FirstName"
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
            id="LastName"
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
            id="Message"
            class="form-input"
            name="Message"
            placeholder="Insert your message here"
            cols="70"
            rows="3"
            required
          />
        </label>
        <br /><br />

        <input
          id="submit"
          type="submit"
          class="link-button body-text"
          value="Submit"
        />
        <br />
        <input
          id="reset"
          type="reset"
          class="link-button body-text"
          value="Reset"
        />
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
    font-weight: 500;
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
  margin-top: 32px;

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
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

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
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
}

.form-input {
  border: 1px solid #919090;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  width: 100%;
}

.link-button {
  width: 100%;
  margin: 0;
}

// .form-button {
//   width: 100%;
//   color: white;
//   background-color: #7265B4;
//   border-radius: 10px;
//   padding: 10px;
//   margin: 5px 0;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//   // font-size: 18px;
//   // font-weight: 500;
// }
</style>
