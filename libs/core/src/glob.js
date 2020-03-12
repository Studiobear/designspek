const DSSTYLE_ID = '_dsstyle'
const ssr = { data: '' }

const getSheet = (target, DSID = DSSTYLE_ID, extract = false) => {
  try {
    let sheet = target ? target.querySelector('#' + DSID) : self[DSID]
    console.log('***SHEET***: ', sheet.innerText)
    if (extract) return sheet.innerText
    if (!sheet) {
      sheet = (target || document.head).appendChild(
        document.createElement('style'),
      )
      sheet.innerHTML = ' '
      sheet.id = DSID
    } else {
      sheet.innerHTML = ' '
    }
    return sheet.firstChild
  } catch (e) {
    console.error
  }
  return ssr
}

const getText = obj => {
  return obj.textContent ? obj.textContent : obj.innerText
}

export function extractCss(inject) {
  const sheet = getSheet(undefined, '_goober', true)
  console.log('extractCSS: ', sheet)
  return `<style id="_ds_ssr">${inject} ${sheet}</style>`
}

const update = (css, sheet, append) => {
  console.log('update: ', css, sheet, append)
  return (
    sheet.data.indexOf(css) < 0 &&
    (sheet.data = append ? css + sheet.data : sheet.data + css)
  )
}

function glob(val) {
  const ctx = this || {}

  return update(val, getSheet(ctx.target))
}
export { glob }
export default glob
