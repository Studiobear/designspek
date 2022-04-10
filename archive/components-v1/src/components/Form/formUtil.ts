export const isEmpty = (obj: any) => {
  return !obj || Object.keys(obj).length === 0
}

export const selectTextOnFocus = (el: any) => {
  const handleFocus = () => {
    el && typeof el.select === 'function' && el.select()
  }

  el.addEventListener('focus', handleFocus)

  return {
    destroy() {
      el.removeEventListener('focus', handleFocus)
    },
  }
}

const typeBool = /(radio|checkbox)/i
const typeStr = /(text|password|email|url|tel|search|hidden)/i
const typeNum = /(number|range)/i
const typeDate = /(date|datetime-local|month|week|)/i
const typeEvnt = /(submit|reset|button)/i
const typeFile = /(file)/i

interface FormElements extends HTMLInputElement{
  elements?: any
}

const serialize = (form: FormElements, submitted = false) => {
  let i = 0,
    j,
    key,
    tmp,
    tmpV,
    tmpValidate,
    out: any = {}

  if (!submitted) {
    while ((tmp = form.elements[i++])) {
      if (!tmp.name || tmp.disabled || typeFile.test(tmp.type)) continue

      key = tmp.name
      console.log('serialize: ', key, tmp.type, tmp.value, tmp.checked)
      if (tmp.type === 'select-multiple' || key.endsWith('[]')) {
        if (tmp.type === 'select-multiple') {
          tmpV = []
          for (j = 0; j < tmp.options.length; j++) {
            if (tmp.options[j].selected) {
              tmpV.push(tmp.options[j].value)
            }
          }
          out[key] = { value: tmpV }
        } else {
          out[key] = isEmpty(out[key])
            ? { [tmp.value]: tmp.checked }
            : { [tmp.value]: tmp.checked, ...out[key] }
        }
      } else if (typeEvnt.test(tmp.type)) {
        out[key] = { value: tmp.value }
      } else if (typeBool.test(tmp.type)) {
        j = out[key]
        console.log('serialize bool: ', tmp.type, tmp.value, tmp.checked)
        tmpV =
          tmp.value !== undefined && tmp.value !== '' ? tmp.value : tmp.checked

        if (tmp.type === 'radio') {
          if (tmp.checked) out[key] = { value: tmp.value }
        } else {
          out[key] = { value: tmpV }
        }
      } else if (tmp.value || tmp.value === 0) {
        j = out[key]
        out[key] = { value: tmp.value }
      }
      if (tmp.validate || tmp.required) {
        let validity = {}
        for (let key in tmp.validity) {
          if (tmp.validity[key])
            validity = { ...validity, [key]: tmp.validity[key] }
        }

        out[key] = {
          ...out[key],
          validate: {
            validity,
            validationMessage: tmp.validationMessage,
          },
        }
      }
    }
  }
  if (submitted) out['submitted'] = true
  console.log('serialize out: ', out)
  return out
}

const deserialize = (form: FormElements, vals: any) => {
  let i = 0,
    tmp,
    key

  console.log('deserialize', vals)
  while ((tmp = form.elements[i++])) {
    if (!tmp.name) continue
    key = tmp.name
    if (key.endsWith('[]')) {
      if (vals[key].hasOwnProperty(tmp.value))
        tmp.checked = vals[key][tmp.value]
      break
    }
    if (typeBool.test(tmp.type)) {
      if (!vals[key]) continue
      console.log('deserialize bool', key, tmp.type, vals[key], tmp.value)
      if (tmp.type === 'radio' && vals[key].hasOwnProperty('value')) {
        let valsVal = vals[key]
        if (valsVal.value === tmp.value) {
          tmp.checked = true
        } else {
          tmp.checked = false
        }
      } else {
        tmp.checked = vals[key].hasOwnProperty('value')
          ? vals[key]['value']
          : false
      }
      break
    }
    tmp.value = vals[key] && vals[key]['value'] ? vals[key]['value'] : ''
  }
}

// Use event delegation to manage input updates
export const getValues = (el: FormElements) => {
  let updated = 0

  const inputs = [].slice.call(el.querySelectorAll<HTMLElement>('input'))

  inputs.forEach((node: HTMLElement) => {
    node.oninput = el.onchange
  })

  const procUpdate = (e: any) => {
    if (e === void 0) {}
    if (typeEvnt.test(e.target.type)) {
      return el.dispatchEvent(
        new CustomEvent('submit', {
          detail: { ...serialize(el, true) },
        }),
      )
    }
    return el.dispatchEvent(
      new CustomEvent('update', {
        detail: { ...serialize(el, false) },
      }),
    )
  }

  el.addEventListener('input', procUpdate)
  el.addEventListener('click', procUpdate)

  procUpdate(null)

  return {
    submit: (vals: any) => {
      console.log('form submitted')
      return vals
    },
    update: (vals: any) => {
      console.log('getValues update: ', vals)
      return updated === 2 ? deserialize(el, vals) : (updated += 1)
    },
    destroy: () => {
      el.removeEventListener('input', procUpdate)
      el.removeEventListener('click', procUpdate)
    },
  }
}
