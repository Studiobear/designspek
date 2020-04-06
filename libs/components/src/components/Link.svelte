<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let as = 'a'
  export let href = ''
  export let target = undefined

  const defaultStyle = [
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    },
  ]
  $: compStyles = styled(defaultStyle.concat(style), theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Link: ', style)
</script>

{#if !as || as === 'a'}
  <a {href} {target} on:click {...styleProps}>
    <slot />
  </a>
{/if}
