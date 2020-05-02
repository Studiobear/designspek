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
    tmpV,
    out = {}

  // Regex to determine input type
  const typeBool = /(radio|checkbox)/i
  // const typeStr = /(text|password|email|url|tel|search|hidden)/i
  // const typeNum = /(number|range)/i
  // const typeDate = /(date|datetime-local|month|week|)/i
  const typeEvnt = /(submit|reset|button)/i
  const typeFile = /(file)/i

  while ((tmp = form.elements[i++])) {
    console.log('serialize : ', tmp.name, tmp.value, tmp.onchange, tmp.oninput)
    if (
      !tmp.name ||
      tmp.disabled ||
      typeEvnt.test(tmp.type) ||
      typeFile.test(tmp.type)
    )
      continue

    key = tmp.name

    if (tmp.type === 'select-multiple') {
      out[key] = []
      for (j = 0; j < tmp.options.length; j++) {
        if (tmp.options[j].selected) {
          out[key].push(tmp.options[j].value)
        }
      }
    } else if (typeBool.test(tmp.type)) {
      if (tmp.checked) {
        j = out[key]
        console.log('serialize tmp: ', tmp, tmp.checked)
        tmpV = tmp.value === 'on' || tmp.value

        if (j === undefined) {
          out[key] = j === null && j !== 0 ? [tmp] : [].concat(j, tmpV)
          console.log('serialize Bool1: ', j, tmp, key, out[key])
        } else {
          out[key] = j === null && j !== 0 ? [tmp] : [].concat(j, tmpV)
          console.log('serialize Bool2: ', j, tmp, key, out[key])
        }
      }
    } else if (tmp.value || tmp.value === 0) {
      j = out[key]
      out[key] = j === null && j !== 0 ? tmp.value : [].concat(j, tmp.value)
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

const debounce = (v, d = 200) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    val = v
  }, d)
}

export const getValues = (el, values) => {
  let updated = 0

  const inputs = [].slice.call(el.querySelectorAll('input'))

  inputs.forEach(node => {
    node.oninput = el.onchange
  })

  const procUpdate = () => {
    el.dispatchEvent(
      new CustomEvent('update', {
        detail: { ...serialize(el) },
      }),
    )
  }

  el.addEventListener('input', procUpdate)

  procUpdate()

  return {
    update: vals => (updated === 2 ? deserialize(el, vals) : (updated += 1)),
    destroy: () => el.removeEventListener('input', procUpdate),
  }
}
