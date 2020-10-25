const DSSTYLE_ID: any = '_dsstyle'
const ssr = { data: '' }

const getSheet = (target: any, DSID = DSSTYLE_ID, remove = false) => {
  try {
    let sheet = target ? target.querySelector('#' + DSID) : window.self[DSID]
    let remEl = document.getElementById(DSID)
    if (remove && remEl !== null) {
      return remEl.remove()
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

const getText = (obj: any) => {
  return obj.textContent ? obj.textContent : obj.innerText
}

const update = (css: any, sheet: any, append?: any) =>
  sheet.data.indexOf(css) < 0 &&
  (sheet.data = append ? css + sheet.data : sheet.data + css)

function glob(this: any, val: any) {
  const ctx = this || {}

  return update(val, getSheet(ctx.target))
}

export const removeSSR = () => getSheet(undefined, '_ds_ssr', true)

export { glob }
export default glob
