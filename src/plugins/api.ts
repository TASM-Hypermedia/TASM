// wrap the $fetch to provide a consistent API client linked with the vercel backend
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
