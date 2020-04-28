<script>
  import { styled } from '@studiobear/designspek'

  let div
  export let name = $$props.name || ''
  export let label = $$props.label || ''
  export let type = $$props.type || 'text'
  export let value = $$props.value || ''
  export let placeholder = $$props.placeholder || ''
  export let validate = $$props.validate || false
  export let inline = $$props.inline || false
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
</script>

<label {...styleProps}>
  {label}
  {#if inline}
    <input {type} {placeholder} {name} {value} />
  {/if}
</label>

{#if !inline}
  <input {type} {placeholder} {name} {value} />
{/if}
