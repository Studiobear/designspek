<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let as = 'a'
  export let href = ''
  export let target = undefined
  $: compStyles = styled(
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      ...style,
    },
    theme,
  )
  // $: console.log('Link: ', style)
</script>

{#if !as || as === 'a'}
  <a {href} {target} class={compStyles}>
    <slot />
  </a>
{/if}
