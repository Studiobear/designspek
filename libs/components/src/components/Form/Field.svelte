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
  export let placeholder = $$props.placeholder || undefined
  export let required = $$props.required || false
  export let validate = $$props.validate || false
  export let disabled = $$props.disabled || false
  export let checked = $$props.checked || false
  export let min = $$props.min || 0
  export let max = $$props.max || 100
  export let step = $$props.step || 1
  export let style = $$props.style || {}
  export let labelStyle = $$props.labelStyle || {}
  export let theme = $$props.theme || style.theme || {}

  $: labelStyles = styled(labelStyle, theme)
  $: compStyles = styled(style, theme)
  // $: console.log('Box', style, theme, compStyles, styleProps)
  const typeBool = /(radio|checkbox)/i
  const typeStr = /(text|password|email|url|tel|search|hidden)/i
  const typeNum = /(number|range)/i
  const typeDate = /(date|datetime-local|month|week|)/i
  const typeEvnt = /(submit|reset|button)/i
  const typeFile = /(file)/i

  const id = typeBool.test(type) ? `${name}-${slugify(label)}` : name
  let minValue = typeNum.test(type) || typeDate.test(type) ? `min=${min}` : ''
  let maxValue = typeNum.test(type) || typeDate.test(type) ? `max=${max}` : ''
  let stepValue = typeNum.test(type) ? `step=${step}` : ''
  required = required || validate ? 'required' : ''
</script>

{#if !typeEvnt.test(type)}
  <label class={labelStyles} for={name}>
    {afterLabel ? label : ''}
    {#if inLabel}
      <input
        class={compStyles}
        {id}
        {name}
        {type}
        {placeholder}
        {value}
        {required}
        {validate}
        {disabled}
        {checked}
        {minValue}
        {maxValue}
        {stepValue} />
    {/if}
    {afterLabel ? '' : label}
  </label>
{:else}
  <input
    class={compStyles}
    {id}
    {name}
    {type}
    {placeholder}
    {value}
    {disabled} />
{/if}

{#if !inLabel}
  <input
    class={compStyles}
    {id}
    {name}
    {type}
    {placeholder}
    {value}
    {validate}
    {disabled}
    {checked}
    {minValue}
    {maxValue}
    {stepValue} />
{/if}
