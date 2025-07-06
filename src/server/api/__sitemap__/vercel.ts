// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineSitemapEventHandler } from "#imports"

export default defineSitemapEventHandler(async () => {
  const f = $fetch.create({
    baseURL: "https://tasm-backend.vercel.app/api",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })

  const [teachers, events, activities] = await Promise.all([
    f<{ url: string }[]>("/getAllTeachers"),
    f<{ url: string }[]>("/getAllEvents"),
    f<{ url: string }[]>("/getAllActivities"),
  ])

  return [
    ...teachers.map((teacher) => `/teachers/${teacher.url}`),
    ...events.map((event) => `/events/${event.url}`),
    ...activities.map((activity) => `/activities/${activity.url}`),
  ]
    .sort((a, b) => a.localeCompare(b))
    .map((item) => ({
      loc: item,
    }))
})
