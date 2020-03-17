const DSSTYLE_ID = '_dsstyle'
const ssr = { data: '' }

const getSheet = (target, DSID = DSSTYLE_ID, remove = false) => {
  try {
    let sheet = target ? target.querySelector('#' + DSID) : self[DSID]
    if (remove) {
      return document.getElementById(DSID).remove()
    }
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

const update = (css, sheet, append) =>
  sheet.data.indexOf(css) < 0 &&
  (sheet.data = append ? css + sheet.data : sheet.data + css)

function glob(val) {
  const ctx = this || {}

  return update(val, getSheet(ctx.target))
}

export const removeSSR = () => getSheet(undefined, '_ds_ssr', true)

export { glob }
export default glob
