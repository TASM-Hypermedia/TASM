import { onBeforeUnmount, onMounted, ref } from "vue"
import { throttle } from "~/utils"

export function useScroll() {
  const x = ref(0)
  const y = ref(0)

  const onScroll = throttle(() => {
    x.value = window.scrollX
    y.value = window.scrollY
  }, 10)

  onMounted(() => {
    window.addEventListener("scroll", onScroll)
    onScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
  })

  return { x, y }
}
