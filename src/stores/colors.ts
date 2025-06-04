import type { CSSProperties } from "vue"
import { defineStore } from "pinia"

export type CSSVars = Record<`--${string}`, CSSProperties["color"]>

export const useColors = defineStore("colors", () => {
  const state = ref("#1156ae")

  const colors = computed(() => ({
    main: `lch(from ${state.value} l c h)`,
    secondary: `lch(from ${state.value} calc(l + 30) calc(c * 0.2) h)`,
    accent: `lch(from ${state.value} calc(l + 10) calc(c * 0.8) h / 60%)`,
    shadow: `lch(from ${state.value} calc(l - 20) calc(c * 0.6) h / 20%)`,
    background: `lch(from ${state.value} calc(l + 30) calc(c * 0.2) h / 40%)`,
  }))

  const rootStyle = computed(() => {
    const vars: CSSVars = {
      "--color-main": colors.value.main,
      "--color-secondary": colors.value.secondary,
      "--color-accent": colors.value.accent,
      "--color-shadow": colors.value.shadow,
      "--color-background": colors.value.background,
    }
    return vars
  })

  function setColor(color: string) {
    state.value = color
  }

  return {
    colors,
    rootStyle,
    setColor,
  }
})
