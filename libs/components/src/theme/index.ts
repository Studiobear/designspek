import { writable } from 'svelte/store'
import { typography, fontLink } from '@studiobear/designspek'
import stAnnesTheme from 'typography-theme-st-annes'

import basicTheme from './basic'

const basic: any = typography(basicTheme, stAnnesTheme)
let dark = Object.assign({}, basic)
dark.colors = basicTheme.colors.modes.dark
dark.mode = 'dark'
basic.mode = 'light'

function createTheme() {
  const { subscribe, set, update } = writable(basic)

  return {
    subscribe,
    dark: () => update((t) => dark),
    light: () => update((t) => basic),
    reset: set(basic),
  }
}

const theme = createTheme()
const googleFonts = fontLink(stAnnesTheme)

export { theme, basic, dark, googleFonts }
export default theme
