import { writable } from 'svelte/store'
import { typography, fontLink } from '@studiobear/svelte-system-ui'
import kirkhamTheme from 'typography-theme-kirkham'

import mainTheme from './themeMain'

const basic = typography(mainTheme, kirkhamTheme)
let dark = Object.assign({}, basic)
dark.colors = mainTheme.colors.modes.dark
dark.mode = 'dark'
basic.mode = 'light'

function createTheme() {
  const { subscribe, set, update } = writable(basic)

  return {
    subscribe,
    dark: () =>
      update(t => {
        console.log('themeDark:', dark)
        return dark
      }),
    light: () =>
      update(t => {
        console.log('themeLight:', basic)
        return basic
      }),
    reset: set(basic),
  }
}

const theme = createTheme()
const googleFonts = fontLink(kirkhamTheme)

export { theme, basic, dark, googleFonts }
export default theme
