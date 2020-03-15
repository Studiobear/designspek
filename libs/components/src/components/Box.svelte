<script>
  import { styled } from '@studiobear/designspek'
  //dev-code-only
  import { Logger } from '../utils'
  // import theme from '../theme'

  let div
  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  $: compStyles = styled(
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      ...style,
    },
    theme,
  )
  //dev-code-only
  $: Logger.info('Box: ', compStyles)
</script>

<div bind:this={div} on:click class={compStyles}>
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
