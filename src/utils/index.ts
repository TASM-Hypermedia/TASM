/**
 * Clamps a value between a minimum and maximum value.
 *
 * @param value The value to clamp
 * @param min The minimum value
 * @param max The maximum value
 * @returns The clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

/**
 * Maps a value from one range to another.
 *
 * @param value The value to map
 * @param low1 The lower bound of the input range
 * @param high1 The upper bound of the input range
 * @param low2 The lower bound of the output range
 * @param high2 The upper bound of the output range
 * @returns The mapped value
 */
export function maprange(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
): number {
  return ((value - low1) * (high2 - low2)) / (high1 - low1) + low2
}

/**
 * Throttles a function to limit the rate at which it can be called.
 *
 * The function will get called at most once every `limit` milliseconds.
 * If the function is called again before the `limit` has passed,
 * the call will be ignored and the last result will be returned.
 *
 * @param func The function to throttle
 * @param limit The time limit in milliseconds
 * @returns A throttled version of the function
 */
export function throttle<A extends unknown[], R>(
  func: (...args: A) => R,
  limit: number
): (...args: A) => R {
  let timeout: NodeJS.Timeout | null = null
  let again = false
  let cachedResult: R | symbol = Symbol("Empty cache")

  return function (...args: A): R {
    if (timeout !== null) again = true
    if (!timeout || typeof cachedResult === "symbol") {
      const handler = () => {
        if (again) {
          cachedResult = func(...args)
          timeout = setTimeout(handler, limit)
        } else timeout = null
        again = false
      }
      timeout = setTimeout(handler, limit)
      cachedResult = func(...args)
    }
    return cachedResult
  }
}

/**
 * Locks the execution of a function at at most once per frame, all other calls
 * within the same fram will return the value returned from the last excecuted call
 * @param func The function to be executed
 * @returns A throttled version of the function
 */
export function withFramerate<A extends unknown[], R>(func: (...args: A) => R) {
  let lock = false
  let cachedResult: R | symbol = Symbol("Empty cache")
  return function (...args: A): R {
    if (lock && typeof cachedResult !== "symbol") return cachedResult
    lock = true
    void nextFrame().then(() => (lock = false))
    const res = func(...args)
    cachedResult = res
    return res
  }
}

/**
 * Wait for the next frame.
 */
export async function nextFrame(): Promise<void> {
  return new Promise((res) => {
    window.requestAnimationFrame(() => res())
  })
}
