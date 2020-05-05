<script>
  import { styled } from '@studiobear/designspek'
  import { slugify } from '../../utils'

  let div
  export let name = $$props.name || ''
  export let label = $$props.label || ''
  export let inLabel = $$props.inLabel || true
  export let afterLabel = $$props.afterLabel || true
  export let type = $$props.type || 'text'
  export let value = $$props.value || ''
  export let placeholder = $$props.placeholder || ''
  export let validate = $$props.validate || false
  export let disabled = $$props.disabled || false
  export let checked = $$props.checked || false
  export let min = $$props.min || 0
  export let max = $$props.max || 100
  export let step = $$props.step || 1
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  const defaultStyle = [
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    },
  ]
  $: compStyles = styled(defaultStyle.concat(style), theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
  const typeBool = /(radio|checkbox)/i
  const typeStr = /(text|password|email|url|tel|search|hidden)/i
  const typeNum = /(number|range)/i
  const typeDate = /(date|datetime-local|month|week|)/i
  const typeEvnt = /(submit|reset|button)/i
  const typeFile = /(file)/i

  const id = typeBool.test(type) ? `${name}-${slugify(label)}` : name

  const input = `
    <input
      id="${id}"
      name="${name}"
      type="${type}"
      placeholder="${placeholder}"
      value="${value}"
      ${validate ? `validate="${validate}"` : ''}
      ${disabled ? 'disabled' : ''}
      ${checked ? 'checked' : ''}
      ${typeNum.test(type) || typeDate.test(type) ? `min=${min}` : ''}
      ${typeNum.test(type) || typeDate.test(type) ? `max=${max}` : ''}
      ${typeNum.test(type) ? `step=${step}` : ''}
    />
  `
</script>

<label {...styleProps} for={name}>
  {afterLabel ? label : ''}
  {#if inLabel}
    {@html input}
  {/if}
  {afterLabel ? '' : label}
</label>

{#if !inLabel}
  {@html input}
{/if}
