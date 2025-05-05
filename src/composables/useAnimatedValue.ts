import { onWatcherCleanup } from "vue"

export type EaseFN = (x: number) => number

export const Ease: Record<string, EaseFN> = {
  linear: (x) => x,
  bezier: (x) => x * x * (3 - 2 * x),
} as const

export function useAnimatedValue(
  target: Ref<number>,
  transitionTime: number,
  easeFn: EaseFN = Ease.linear
) {
  const animatedValue = ref(target.value)
  const time = ref(Date.now())

  function getProgress() {
    const dt = Date.now() - time.value
    return dt / transitionTime
  }

  function interpolate(progress: number, from: number, to: number) {
    return from + (to - from) * progress
  }

  watch(target, async (newTarget) => {
    time.value = Date.now()
    let progress = 0
    const old = animatedValue.value
    let halt = false
    onWatcherCleanup(() => (halt = true))
    while (progress < 1) {
      animatedValue.value = interpolate(easeFn(progress), old, newTarget)
      await nextFrame()
      if (halt) return
      progress = getProgress()
    }
    animatedValue.value = newTarget
  })

  return animatedValue
}
