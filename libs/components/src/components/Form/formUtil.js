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

const serialize = form => {
  let i = 0,
    j,
    key,
    tmp,
    out = {}
  const rgx1 = /(radio|checkbox)/i
  const rgx2 = /(file|reset|submit|button)/i

  while ((tmp = form.elements[i++])) {
    if (!tmp.name || tmp.disabled || rgx2.test(tmp.type)) continue

    key = tmp.name

    // Grab all values from multi-select
    if (tmp.type === 'select-multiple') {
      out[key] = []
      for (j = 0; j < tmp.options.length; j++) {
        if (tmp.options[j].selected) {
          out[key].push(tmp.options[j].value)
        }
      }
    } else if (rgx1.test(tmp.type)) {
      if (tmp.checked) {
        j = out[key]
        tmp = tmp.value === 'on' || tmp.value
        out[key] = j == null && j !== 0 ? [tmp] : [].concat(j, tmp)
      }
    } else if (tmp.value || tmp.value === 0) {
      j = out[key]
      out[key] = j == null && j !== 0 ? tmp.value : [].concat(j, tmp.value)
    }
  }
  return out
}

const deserialize = (form, vals) => {
  let i = 0
  let tmp

  while ((tmp = form.elements[i++])) {
    if (!tmp.name) continue

    if (tmp.type === 'checkbox') {
      if (!vals[tmp.name]) continue

      if (vals[tmp.name].includes(tmp.value)) {
        tmp.checked = true
      } else {
        tmp.checked = false
      }
    } else {
      tmp.value = vals[tmp.name] ? vals[tmp.name] : ''
    }
  }
}

export function getValues(el) {
  let updated = 0

  const inputs = [].slice.call(el.querySelectorAll('input'))

  inputs.forEach(el => {
    el.oninput = el.onchange
  })

  el.addEventListener('input', handleUpdate)

  const procUpdate = () => {
    el.dispatchEvent(
      new CustomEvent('update', {
        detail: { ...serialize(el) },
      }),
    )
  }

  procUpdate()

  return {
    update: vals => (updated === 2 ? deserialize(el, vals) : (updated += 1)),
    destroy: () => el.removeEventListener('input', procUpdate),
  }
}
