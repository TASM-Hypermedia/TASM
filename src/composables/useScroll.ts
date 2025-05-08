import { onBeforeUnmount, onMounted, ref } from "vue"
import { withFramerate } from "~/utils"

export function useScroll() {
  const x = ref(0)
  const y = ref(0)

  const onScroll = withFramerate(() => {
    x.value = window.scrollX
    y.value = window.scrollY
  })

  onMounted(() => {
    window.addEventListener("scroll", onScroll)
    onScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
  })

  return { x, y }
}
