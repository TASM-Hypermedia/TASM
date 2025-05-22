<script setup lang="ts">
//import type { Teacher } from "~/types"

interface EventType {
  title: string
  subtitle?: string
  mainImageURL: string
  shortDesc: string
  description: string
  infostr: string
  programstr: string
  guest?: {
    name: string
    imageURL: string
    description: string
  }
}

const event: EventType = {
  title: "Flow & Breathe",
  subtitle: "A Vinyasa Yoga Retreat",
  mainImageURL: "events/flownbreathe.png",
  shortDesc:
    "A transformative weekend of deepening your practice, connecting with your breath, and cultivating inner peace.",
  description:
    "Join us for a rejuvenating weekend of Vinyasa Yoga at Flow & Breathe: A Vinyasa Yoga Retreat. Set in the tranquil surroundings of nature, this immersive retreat is designed to deepen your practice, rejuvenate your body, and calm your mind. Whether you're a seasoned yogi or a beginner, this retreat will guide you through dynamic sequences, breathwork techniques, and mindful meditation practices, offering tools to bring balance into your daily life. Each session is crafted to help you build strength, increase flexibility, and connect with your inner self, all while enjoying the peaceful ambiance of our serene location. Don’t miss this opportunity to explore the power of Vinyasa Yoga in a supportive and inspiring environment.",
  infostr:
    "How to flow seamlessly between postures with mindful breath synchronization\nTechniques to strengthen your body and improve flexibility through Vinyasa sequences\nBreathwork (Pranayama) practices to calm the mind and enhance focus\nAlignment principles to prevent injury and improve posture\nMeditation and mindfulness tools to cultivate inner peace and balance\nModifications and variations for poses to tailor your practice to your level\nThe benefits of integrating yoga into your daily routine for long-term well-being",
  programstr:
    "#Saturday:\n7:30 AM – Morning Meditation & Breathwork Session\n8:00 AM – Energizing Vinyasa Flow Practice\n10:00 AM – Healthy Breakfast and Networking\n11:00 AM – Alignment and Adjustments Workshop\n1:00 PM – Lunch (light and nourishing)\n2:30 PM – Mindful Movement and Deep Stretching\n4:00 PM – Pranayama: Breathing Techniques for Stress Relief\n6:00 PM – Dinner (with time for reflection)\n7:30 PM – Evening Candlelight Yoga and Restorative Practice\n#Sunday:\n7:30 AM – Morning Yoga Flow with Meditation\n9:00 AM – Breakfast and Group Reflection\n10:00 AM – Yoga for Strength: Vinyasa Sequences for Building Power\n12:00 PM – Final Circle: Sharing Experiences and Closing Ceremony\n1:00 PM – Farewell Lunch",
  guest: {
    name: "Ravi Solan",
    imageURL: "events/ravisolan.png",
    description:
      'Meet Ravi Solan, the special guest at this year’s Moonridge Yoga Retreat. A former architect turned mindfulness guide, Ravi left the fast-paced world of city design to explore the inner landscapes of the human spirit. Now known for his grounding presence and poetic teachings, he blends Vinyasa flow with ancient breathwork practices inspired by his travels through the Himalayas. Attendees are especially drawn to his "Stillness in Motion" workshops, where silence becomes the most powerful teacher.',
  },
}

const learnPoints = event.infostr.split("\n")
const programPoints: {
  day: string
  points: string[]
}[] = event.programstr.split("#").map((d) => {
  const lines = d.split("\n").map((s) => s.trim())
  return {
    day: lines.shift() ?? "",
    points: lines.filter((s) => s),
  }
})
</script>

<template>
  <PageWrap
    :img-src="event.mainImageURL"
    tagline="Our Events:"
    :title="event.title"
    :subtitle="event.subtitle"
  >
    <section>
      <p class="shortDesc">
        {{ event.shortDesc }}
      </p>
      <p class="description">
        {{ event.description }}
      </p>
      <NuxtLink class="link-button" to="#">
        <img class="attend" src="../../assets/images/calendar.svg" alt="logo" />
        Attend This Event
      </NuxtLink>
    </section>
    <section class="pair">
      <div>
        <h1>What You'll Learn</h1>
        <ul>
          <li v-for="(point, index) in learnPoints" :key="index">
            {{ point }}
          </li>
        </ul>
      </div>
      <div>
        <h1>The Program</h1>
        <template v-for="day of programPoints" :key="day">
          <h3>{{ day.day }}</h3>
          <ul>
            <li v-for="(point, index) in day.points" :key="`${day}-${index}`">
              {{ point }}
            </li>
          </ul>
        </template>
      </div>
    </section>
    <section v-if="event.guest" class="guest">
      <h1>Special Guest</h1>
      <div>
        <NuxtImg
          :src="`/images/${event.guest.imageURL}`"
          :alt="event.guest.name"
        />
        <div>
          <h2>{{ event.guest.name }}</h2>
          <p>{{ event.guest.description }}</p>
        </div>
      </div>
    </section>
    <!--<section style="align-items: center; text-align: center">
      <h1>Teachers in This Event</h1>
      <div class="temp-grid">
        <teacher-card :teacher-prop="teachersList[0]" />
        <teacher-card :teacher-prop="teachersList[1]" />
        <teacher-card :teacher-prop="teachersList[2]" />
      </div>
    </section>-->
    <section style="align-items: center; text-align: center">
      <h2>Similar Events</h2>
      <div class="temp-grid">
        <!-- <activity-card :activity-prop="eventsList[0]" />
        <activity-card :activity-prop="eventsList[1]" />
        <activity-card :activity-prop="eventsList[2]" /> -->
      </div>
      <NuxtLink class="link-button" to="#"> View all events </NuxtLink>
    </section>
  </PageWrap>
</template>

<style scoped lang="scss">
section {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-weight: 400;
    font-size: 1.8em;
  }
}

.shortDesc {
  font-style: italic;
  font-size: 1.2em;
  text-align: center;
  margin: 48px 0;
}

.description {
  text-align: center;
}

h1 {
  font-size: 2.5em;
}

span.label {
  opacity: 0.8;
  font-size: 1.3em;
}

section.pair {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: stretch;
  gap: 64px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

ul {
  padding-left: 20px;

  li::marker {
    font-weight: bold;
  }
}

section.guest {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 64px;
    padding: 0 128px;
    img {
      flex: 0 1 0px;
      max-width: 200px;
      max-height: 300px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
    }
    div {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
}

div.temp-grid {
  display: flex;
  width: 100%;
  padding: 24px 0;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
}

.link-button {
  color: white;
  background-color: #020202;
  border-radius: 8px;
  padding: 8px 32px;
  margin: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  .attend {
    filter: brightness(100);
  }
}
</style>
