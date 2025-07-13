import type { UseFetchOptions } from "nuxt/app"

// the hook to make API calls, using the $fetch instance provided by the api plugin
export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  })
}
