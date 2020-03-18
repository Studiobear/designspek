<script>
  import { styled } from '@studiobear/designspek'

  let div
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  $: compStyles = styled(
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      ...style,
    },
    theme,
  )
</script>

<div bind:this={div} on:click class={compStyles}>
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
