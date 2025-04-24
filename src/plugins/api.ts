export default defineNuxtPlugin((_nuxtApp) => {
  const api = $fetch.create({
    baseURL: "https://tasm-backend.vercel.app/api",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })

  return {
    provide: {
      api,
    },
  }
})
