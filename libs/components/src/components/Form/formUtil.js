export const isEmpty = obj => {
  return !obj || Object.keys(obj).length === 0
}

export const selectTextOnFocus = el => {
  const handleFocus = event => {
    el && typeof el.select === 'function' && el.select()
  }

  el.addEventListener('focus', handleFocus)

  return {
    destroy() {
      el.removeEventListener('focus', handleFocus)
    },
  }
}

const serialize = (form, submitted = false) => {
  let i = 0,
    j,
    key,
    tmp,
    tmpV,
    tmpValidate,
    out = {}

  // Regex to determine input type
  const typeBool = /(radio|checkbox)/i
  // const typeStr = /(text|password|email|url|tel|search|hidden)/i
  // const typeNum = /(number|range)/i
  // const typeDate = /(date|datetime-local|month|week|)/i
  const typeEvnt = /(submit|reset|button)/i
  const typeFile = /(file)/i

  while ((tmp = form.elements[i++])) {
    if (!tmp.name || tmp.disabled || typeFile.test(tmp.type)) continue

    key = tmp.name

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
      console.log('serialize tmp: ', tmp, tmp.checked)
      tmpV = tmp.type === 'radio' ? tmp.value : tmp.checked

      if (j === undefined) {
        if (tmp.type === 'radio') {
          if (tmp.checked) out[key] = { [tmpV]: true }
        } else {
          out[key] = { value: tmpV }
        }
      } else {
        if (tmp.type === 'radio') {
          if (tmp.checked) out[key] = { [tmpV]: true }
        } else {
          out[key] = { value: tmpV }
        }
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
  if (submitted) out['submitted'] = true
  console.log('serialize out: ', out)
  return out
}

const deserialize = (form, vals) => {
  let i = 0,
    tmp,
    key

  while ((tmp = form.elements[i++])) {
    if (!tmp.name) continue
    key = tmp.name
    if (key.endsWith('[]')) {
      if (vals[key].hasOwnProperty(tmp.value))
        tmp.checked = vals[key][tmp.value]
      break
    }
    if (tmp.type === 'radio') {
      if (!vals[key]) continue
      if (vals[key].includes(tmp.value)) {
        tmp.checked = true
      } else {
        tmp.checked = false
      }
      break
    }
    if (tmp.type === 'checkbox') {
      if (!vals[key]) continue
      console.log('deserialize cb: ', vals[key])

      if (vals[key]) {
        tmp.checked = true
      } else {
        tmp.checked = false
      }
      break
    }
    tmp.value = vals[key] && vals[key]['value'] ? vals[key]['value'] : ''
  }
}

const debounce = (v, d = 200) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    val = v
  }, d)
}

// Use event delegation to manage input updates
export const getValues = el => {
  let updated = 0

  const inputs = [].slice.call(el.querySelectorAll('input'))

  inputs.forEach(node => {
    node.oninput = el.onchange
  })

  const procUpdate = () => {
    el.dispatchEvent(
      new CustomEvent('update', {
        detail: { ...serialize(el, false) },
      }),
    )
  }

  const procSubmit = () => {
    console.log('event submit', el)
    el.dispatchEvent(
      new CustomEvent('submit', {
        detail: { ...serialize(el, true) },
      }),
    )
  }

  el.addEventListener('input', procUpdate)
  el.addEventListener('click', procSubmit)

  procUpdate()

  return {
    submit: vals => {
      console.log('form submitted')
    },
    update: vals => {
      return updated === 2 ? deserialize(el, vals) : (updated += 1)
    },
    destroy: () => el.removeEventListener('input', procUpdate),
  }
}
