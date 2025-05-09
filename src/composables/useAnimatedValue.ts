import { onWatcherCleanup } from "vue"

export type EaseFN = (x: number) => number

// collection of Ease functions
export const Ease: Record<string, EaseFN> = {
  linear: (x) => x,
  bezier: (x) => x * x * (3 - 2 * x),
} as const

/**
 * Composable to create an animated value that follows a target ref, the
 * animation value is updated once each frame and is computed via the ease function
 * to be completed in a given amount of ms.
 *
 * @param target A ref that describes the target value to animate to
 * @param transitionTime Time in ms for the transition
 * @param easeFn [optional] Ease function, defaults to linear
 * @returns An animated Ref that gets to [target] in [transitionTime] ms
 */
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

/**
 * Composable to create an animated computed value, with a compute function to
 * transform the animated value. see also {@link useAnimatedValue}
 *
 * @param target A ref that describes the target value to animate to
 * @param computeFn A function that transforms the animated value
 * @param transitionTime Time in ms for the transition
 * @param easeFn [optional] Ease function, defaults to linear
 * @returns An animated Ref that gets to [target] in [transitionTime] ms
 */
export function useAnimatedComputed<T>(
  target: Ref<number>,
  computeFn: (value: number) => T,
  transitionTime: number,
  easeFn: EaseFN = Ease.linear
) {
  const animationValue = useAnimatedValue(target, transitionTime, easeFn)
  return computed(() => computeFn(animationValue.value))
}
