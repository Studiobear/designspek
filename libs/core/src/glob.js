const SVSTYLE_ID = '_svstyle'
const ssr = { data: '' }

const getSheet = target => {
  try {
    let sheet = target
      ? target.querySelector('#' + SVSTYLE_ID)
      : self[SVSTYLE_ID]
    if (!sheet) {
      sheet = (target || document.head).appendChild(
        document.createElement('style'),
      )
      sheet.innerHTML = ' '
      sheet.id = SVSTYLE_ID
    } else {
      sheet.innerHTML = ' '
    }
    return sheet.firstChild
  } catch (e) {
    console.error
  }
  return ssr
}

const update = (css, sheet, append) =>
  sheet.data.indexOf(css) < 0 &&
  (sheet.data = append ? css + sheet.data : sheet.data + css)

function glob(val) {
  const ctx = this || {}

  return update(val, getSheet(ctx.target))
}
export { glob }
export default glob
