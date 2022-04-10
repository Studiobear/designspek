<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let as = 'tr'

  $: compStyles = styled(style, theme, ssr)

  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
</script>

{#if !as || as === 'tr'}
  <tr {...styleProps}>
    <slot />
  </tr>
{:else if as === 'caption'}
  <caption {...styleProps}>
    <slot />
  </caption>
{/if}
